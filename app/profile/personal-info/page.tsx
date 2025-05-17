"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check, Info } from "lucide-react";
import MobileHeader from "@/components/mobile-header";
import MobileNavbar from "@/components/mobile-navbar";
import { useToast } from "@/components/ui/use-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PersonalInfoPage() {
  const { toast } = useToast();

  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [form, setForm] = useState({
    nombres: "",
    identificacion: "",
    direccion: "",
    ciudad: "",
    pais: "",
    telefono: "",
  });

  // Leer wallet del localStorage
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setWalletAddress(parsed.walletAddress);
      } catch {
        setWalletAddress(null);
      }
    }
  }, []);

  // Obtener datos del usuario
  useEffect(() => {
    const fetchUser = async () => {
      if (!walletAddress) return;

      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletAddress }),
      });

      const result = await res.json();

      if (result.data) {
        setForm({
          nombres: result.data.nombres || "",
          identificacion: result.data.identificacion || "",
          direccion: result.data.direccion || "",
          ciudad: result.data.ciudad || "",
          pais: result.data.pais || "",
          telefono: result.data.telefono || "",
        });
      }
    };

    fetchUser();
  }, [walletAddress]);

  // Cambiar campos
  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Guardar datos
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!walletAddress || form.nombres === "") {
      return (
        <div className="flex justify-center items-center h-screen">
          <p className="text-muted-foreground text-sm">
            Cargando datos del usuario...
          </p>
        </div>
      );
    }

    const res = await fetch("/api/user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ walletAddress, updates: form }),
    });

    const result = await res.json();

    if (result.success) {
      toast({
        title: "✅ Datos actualizados",
        description: "Tu información ha sido guardada correctamente.",
      });

      setTimeout(() => {
        router.push("/profile");
      }, 1200); // Espera 1.2 segundos antes de redirigir
    } else {
      toast({
        variant: "destructive",
        title: "Error al guardar",
        description: result.error || "Ocurrió un problema inesperado.",
      });
    }
  };

  const backButton = (
    <Link href="/profile" className="mr-2">
      <ArrowLeft className="h-5 w-5" />
    </Link>
  );

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader
        title="Información Personal"
        showLogo={false}
        backButton={backButton}
      />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          <Alert
            variant="default"
            className="mb-4 bg-primary/10 border-primary/20"
          >
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-xs">
              Esta información es necesaria para habilitar el modo legal en tus
              certificados.
            </AlertDescription>
          </Alert>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre completo *</Label>
              <Input
                id="fullName"
                value={form.nombres}
                onChange={(e) => handleChange("nombres", e.target.value)}
                placeholder="Nombre y apellidos"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="docNumber">Número de documento *</Label>
              <Input
                id="docNumber"
                value={form.identificacion}
                onChange={(e) => handleChange("identificacion", e.target.value)}
                placeholder="Ej: 12345678X"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Dirección *</Label>
              <Input
                id="address"
                value={form.direccion}
                onChange={(e) => handleChange("direccion", e.target.value)}
                placeholder="Calle, número, piso"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Ciudad *</Label>
              <Input
                id="city"
                value={form.ciudad}
                onChange={(e) => handleChange("ciudad", e.target.value)}
                placeholder="Ciudad"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">País *</Label>
              <Select
                value={form.pais}
                onValueChange={(val) => handleChange("pais", val)}
              >
                <SelectTrigger id="country">
                  <SelectValue placeholder="Seleccionar país" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">España</SelectItem>
                  <SelectItem value="mx">México</SelectItem>
                  <SelectItem value="co">Colombia</SelectItem>
                  <SelectItem value="ar">Argentina</SelectItem>
                  <SelectItem value="cl">Chile</SelectItem>
                  <SelectItem value="pe">Perú</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                value={form.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
                placeholder="Ej: +34 612345678"
              />
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full gap-2">
                <Check className="h-4 w-4" /> Guardar información
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Esta información solo será visible cuando utilices el modo
                legal.
              </p>
            </div>
          </form>
        </div>
      </main>

      <MobileNavbar />
    </div>
  );
}
