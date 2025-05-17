import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Plus, Search, Upload } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import MobileNavbar from "@/components/mobile-navbar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Mis Proyectos" />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          {/* Header with upload button */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold">Proyectos Registrados</h1>
            <Link href="/dashboard/upload">
              <Button size="sm" className="gap-1">
                <Upload className="h-3 w-3" /> Subir
              </Button>
            </Link>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar proyectos..." className="pl-8" />
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full mb-4">
            <TabsList className="grid grid-cols-3 h-9">
              <TabsTrigger value="all" className="text-xs">
                Todos
              </TabsTrigger>
              <TabsTrigger value="recent" className="text-xs">
                Recientes
              </TabsTrigger>
              <TabsTrigger value="shared" className="text-xs">
                Compartidos
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Projects List */}
          <div className="space-y-3">
            <Link href="/dashboard/projects/1">
              <Card>
                <CardContent className="p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm">MVP Aplicación Móvil</h3>
                        <Badge variant="outline" className="text-[10px] h-4">
                          Protegido
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Subido: 15/05/2025</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="bg-primary/10 px-1.5 py-0.5 rounded text-[10px] font-medium text-primary">
                          PDF
                        </div>
                        <p className="text-xs text-muted-foreground">1.2 MB</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground border-t pt-2">
                    <p className="line-clamp-2">
                      Aplicación móvil para gestión de tareas con funcionalidades de colaboración y recordatorios.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/projects/2">
              <Card>
                <CardContent className="p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm">Diseño de Logo</h3>
                        <Badge variant="outline" className="text-[10px] h-4">
                          Protegido
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Subido: 10/05/2025</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="bg-primary/10 px-1.5 py-0.5 rounded text-[10px] font-medium text-primary">
                          PNG
                        </div>
                        <p className="text-xs text-muted-foreground">3.5 MB</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground border-t pt-2">
                    <p className="line-clamp-2">
                      Diseño de identidad visual para startup tecnológica, incluye logo, paleta de colores y
                      aplicaciones.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/projects/3">
              <Card>
                <CardContent className="p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm">Propuesta de Negocio</h3>
                        <Badge variant="outline" className="text-[10px] h-4">
                          Protegido
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Subido: 01/05/2025</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="bg-primary/10 px-1.5 py-0.5 rounded text-[10px] font-medium text-primary">
                          DOCX
                        </div>
                        <p className="text-xs text-muted-foreground">0.8 MB</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground border-t pt-2">
                    <p className="line-clamp-2">
                      Plan de negocio para plataforma de comercio electrónico especializada en productos artesanales.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

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
  )
}
