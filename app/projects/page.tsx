"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Plus, Search, Upload } from "lucide-react";
import MobileHeader from "@/components/mobile-header";
import MobileNavbar from "@/components/mobile-navbar";
import { Badge } from "@/components/ui/badge";

type Proyecto = {
  id: number;
  titulo: string;
  descripcion?: string;
  fecha_subida: string;
  tipo: string;
  protegido: boolean;
};

export default function DashboardPage() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProyectos = async () => {
      const userRaw = localStorage.getItem("user");
      if (!userRaw) {
        console.warn("No se encontró el usuario en localStorage");
        return;
      }

      const user = JSON.parse(userRaw);
      const walletAddress = user?.walletAddress;

      if (!walletAddress) {
        console.warn("No se encontró walletAddress en user");
        return;
      }

      try {
        const res = await fetch("/api/proyectos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ walletAddress }),
        });

        const result = await res.json();

        if (Array.isArray(result.data)) {
          setProyectos(result.data);
        } else {
          console.error("Respuesta inesperada de la API:", result);
          setProyectos([]);
        }
      } catch (error) {
        console.error("Error al obtener proyectos:", error);
        setProyectos([]);
      }
    };

    fetchProyectos();
  }, []);

  const proyectosFiltrados = proyectos.filter((proyecto) =>
    proyecto.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Proyectos:", proyectos);

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Mi Biblioteca" />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold">Mis Proyectos</h1>
            <Link href="/dashboard/upload">
              <Button size="sm" className="gap-1">
                <Upload className="h-3 w-3" /> Nuevo
              </Button>
            </Link>
          </div>

          <div className="relative flex gap-4 mt-6 mb-4 justify-center">
            <Input
              type="search"
              placeholder="Buscar proyectos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-8 w-full max-w-xs"
            />
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <Card>
              <CardContent className="p-3">
                <div className="text-xl font-bold">{proyectos.length}</div>
                <div className="text-xs text-muted-foreground">Total</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3">
                <div className="text-xl font-bold">
                  {proyectos.filter((p) => p.protegido).length}
                </div>
                <div className="text-xs text-muted-foreground">Protegidos</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {proyectosFiltrados.map((proyecto) => (
              <Link
                key={proyecto.id}
                href={`/dashboard/project/${proyecto.id}`}
              >
                <Card className="mb-1">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-sm">
                            {proyecto.titulo}
                          </h3>
                          {proyecto.protegido && (
                            <Badge
                              variant="outline"
                              className="text-[10px] h-4"
                            >
                              Protegido
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Subido:{" "}
                          {new Date(proyecto.created_at).toLocaleDateString()}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="bg-primary/10 px-1.5 py-0.5 rounded text-[10px] font-medium text-primary">
                            Categoria:
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Programacion
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}

            <Link href="/dashboard/upload" className="block">
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-6">
                  <div className="rounded-full bg-primary/10 p-2 mb-2">
                    <Plus className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm">Subir nuevo proyecto</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      <MobileNavbar />
    </div>
  );
}
