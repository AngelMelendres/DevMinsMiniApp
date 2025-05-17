import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Download,
  Plus,
  Search,
  Share2,
  Shield,
  Upload,
} from "lucide-react";
import MobileHeader from "@/components/mobile-header";
import MobileNavbar from "@/components/mobile-navbar";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Mi Biblioteca" />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          {/* Header with upload button */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold">Mis Proyectos</h1>
            <Link href="/dashboard/upload">
              <Button size="sm" className="gap-1">
                <Upload className="h-3 w-3" /> Nuevo
              </Button>
            </Link>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar proyectos o certificados..."
              className="pl-8"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Card>
              <CardContent className="p-3">
                <div className="text-xl font-bold">3</div>
                <div className="text-xs text-muted-foreground">Proyectos</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3">
                <div className="text-xl font-bold">5</div>
                <div className="text-xs text-muted-foreground">
                  Certificados
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3">
                <div className="text-xl font-bold">12</div>
                <div className="text-xs text-muted-foreground">Descargas</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Tabs */}
          <Tabs defaultValue="all" className="w-full mb-4">
            <TabsList className="grid grid-cols-4 h-9">
              <TabsTrigger value="all" className="text-xs">
                Todos
              </TabsTrigger>
              <TabsTrigger value="recent" className="text-xs">
                Recientes
              </TabsTrigger>
              <TabsTrigger value="shared" className="text-xs">
                Compartidos
              </TabsTrigger>
              <TabsTrigger value="verified" className="text-xs">
                Verificados
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Projects List */}
          <div className="space-y-4">
            {/* Project 1 */}
            <div>
              <Link href="/dashboard/project/1">
                <Card className="mb-1">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-sm">
                            MVP Aplicación Móvil
                          </h3>
                          <Badge variant="outline" className="text-[10px] h-4">
                            Protegido
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Subido: 15/05/2025
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="bg-primary/10 px-1.5 py-0.5 rounded text-[10px] font-medium text-primary">
                            PDF
                          </div>
                          <p className="text-xs text-muted-foreground">
                            1.2 MB
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Associated Certificate */}
              <Link href="/certificate/1" className="block ml-4">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs font-medium">
                          Certificado Digital
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          15/05/2025
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Project 2 */}
            <div>
              <Link href="/dashboard/project/2">
                <Card className="mb-1">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-sm">
                            Diseño de Logo
                          </h3>
                          <Badge variant="outline" className="text-[10px] h-4">
                            Protegido
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Subido: 10/05/2025
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="bg-primary/10 px-1.5 py-0.5 rounded text-[10px] font-medium text-primary">
                            PNG
                          </div>
                          <p className="text-xs text-muted-foreground">
                            3.5 MB
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Associated Certificate */}
              <Link href="/certificate/2" className="block ml-4">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs font-medium">
                          Certificado Digital
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          10/05/2025
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Project 3 */}
            <div>
              <Link href="/dashboard/project/3">
                <Card className="mb-1">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-sm">
                            Propuesta de Negocio
                          </h3>
                          <Badge variant="outline" className="text-[10px] h-4">
                            Protegido
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Subido: 01/05/2025
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="bg-primary/10 px-1.5 py-0.5 rounded text-[10px] font-medium text-primary">
                            DOCX
                          </div>
                          <p className="text-xs text-muted-foreground">
                            0.8 MB
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Associated Certificates (multiple) */}
              <div className="ml-4 space-y-1">
                <Link href="/certificate/3" className="block">
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-xs font-medium">
                            Certificado Digital
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            01/05/2025
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/certificate/4" className="block">
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-xs font-medium">
                            Certificado Universidad
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            03/05/2025
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Add New Project */}
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
