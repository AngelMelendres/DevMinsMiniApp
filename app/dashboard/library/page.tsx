import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Search, Share2, Shield, UserCheck, AlertTriangle, Info } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import MobileNavbar from "@/components/mobile-navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LibraryPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Biblioteca" />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar en la biblioteca..." className="pl-8" />
          </div>

          <Tabs defaultValue="projects" className="w-full mb-4">
            <TabsList className="grid grid-cols-3 h-9">
              <TabsTrigger value="projects" className="text-xs">
                Mis Proyectos
              </TabsTrigger>
              <TabsTrigger value="certificates" className="text-xs">
                Certificados
              </TabsTrigger>
              <TabsTrigger value="examples" className="text-xs">
                Ejemplos
              </TabsTrigger>
            </TabsList>

            {/* Pestaña de Proyectos */}
            <TabsContent value="projects" className="mt-4 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">Proyectos con Modo Seudónimo</h3>
                <Badge variant="outline" className="text-[10px] h-5 border-primary/30 text-primary">
                  Seudónimo
                </Badge>
              </div>

              <Link href="/dashboard/project/1">
                <Card className="border-primary/20 mb-3">
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
                    <div className="mt-2 pt-2 border-t">
                      <div className="flex items-center gap-1">
                        <UserCheck className="h-3 w-3 text-primary" />
                        <p className="text-xs text-muted-foreground">
                          Autor: <span className="font-medium">@IdeaCreadoraX</span> (Modo Seudónimo)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/certificate/1">
                <Card className="border-primary/10 bg-primary/5 ml-4 mb-6">
                  <CardContent className="p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs font-medium">Certificado Digital (Seudónimo)</p>
                        <p className="text-[10px] text-muted-foreground">15/05/2025</p>
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

              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">Proyectos con Modo Legal</h3>
                <Badge variant="outline" className="text-[10px] h-5 border-yellow-300 text-yellow-700 bg-yellow-50">
                  Legal
                </Badge>
              </div>

              <Link href="/dashboard/project/2">
                <Card className="border-yellow-200 mb-3">
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
                    <div className="mt-2 pt-2 border-t">
                      <div className="flex items-center gap-1">
                        <UserCheck className="h-3 w-3 text-yellow-600" />
                        <p className="text-xs text-muted-foreground">
                          Autor: <span className="font-medium">Juan Pérez Rodríguez</span> (Modo Legal)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/certificate/2">
                <Card className="border-yellow-200 bg-yellow-50 ml-4 mb-6">
                  <CardContent className="p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-yellow-600" />
                      <div>
                        <p className="text-xs font-medium">Certificado Digital (Legal)</p>
                        <p className="text-[10px] text-muted-foreground">10/05/2025</p>
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

              <Link href="/dashboard/project/3">
                <Card className="border-yellow-200">
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
                    <div className="mt-2 pt-2 border-t">
                      <div className="flex items-center gap-1">
                        <UserCheck className="h-3 w-3 text-yellow-600" />
                        <p className="text-xs text-muted-foreground">
                          Autor: <span className="font-medium">Juan Pérez Rodríguez</span> (Modo Legal)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </TabsContent>

            {/* Pestaña de Certificados */}
            <TabsContent value="certificates" className="mt-4 space-y-3">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">Certificados con Modo Seudónimo</h3>
                <Badge variant="outline" className="text-[10px] h-5 border-primary/30 text-primary">
                  Seudónimo
                </Badge>
              </div>

              <Link href="/certificate/1">
                <Card className="border-primary/20 mb-4">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium text-sm">Certificado MVP Aplicación</h3>
                          <p className="text-xs text-muted-foreground">15/05/2025</p>
                          <p className="text-xs text-muted-foreground mt-1">Hash: 8f7d56a9c3b2...</p>
                          <div className="mt-2 text-xs bg-primary/10 p-2 rounded-md">
                            <p>
                              Obra registrada por <strong>@IdeaCreadoraX</strong>, verificada como humana única vía
                              World ID.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary/10 px-2 py-1 rounded text-xs font-medium text-primary">PDF</div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="text-xs h-8 flex-1 gap-1">
                        <Download className="h-3 w-3" /> Descargar
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs h-8 flex-1 gap-1">
                        <Share2 className="h-3 w-3" /> Compartir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">Certificados con Modo Legal</h3>
                <Badge variant="outline" className="text-[10px] h-5 border-yellow-300 text-yellow-700 bg-yellow-50">
                  Legal
                </Badge>
              </div>

              <Link href="/certificate/2">
                <Card className="border-yellow-200">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-sm">Certificado Diseño Logo</h3>
                          <p className="text-xs text-muted-foreground">10/05/2025</p>
                          <p className="text-xs text-muted-foreground mt-1">Hash: 3e9c12b8a7f6...</p>
                          <div className="mt-2 text-xs bg-yellow-50 p-2 rounded-md border border-yellow-200">
                            <p>
                              Obra registrada por <strong>Juan Pérez Rodríguez</strong>, con DNI 12345678X, verificada
                              vía World ID.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary/10 px-2 py-1 rounded text-xs font-medium text-primary">PNG</div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="text-xs h-8 flex-1 gap-1">
                        <Download className="h-3 w-3" /> Descargar
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs h-8 flex-1 gap-1">
                        <Share2 className="h-3 w-3" /> Compartir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </TabsContent>

            {/* Pestaña de Ejemplos */}
            <TabsContent value="examples" className="mt-4 space-y-4">
              <h3 className="text-sm font-medium">Ejemplos de Certificados</h3>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  CertiMind te permite elegir entre dos modos de autoría para tus certificados:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <p className="text-xs font-medium text-primary">Modo Seudónimo</p>
                    <p className="text-xs text-muted-foreground">Protege tu identidad real</p>
                  </div>
                  <div className="bg-yellow-50 p-2 rounded-md">
                    <p className="text-xs font-medium text-yellow-700">Modo Legal</p>
                    <p className="text-xs text-muted-foreground">Muestra tus datos personales</p>
                  </div>
                </div>
              </div>

              {/* Ejemplo de Certificado con Modo Seudónimo */}
              <Card className="border-primary/20">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="font-medium text-sm">Certificado Modo Seudónimo</h3>
                          <Badge variant="outline" className="text-[10px] h-4 border-primary/30 text-primary">
                            Ejemplo
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Protege tu identidad real</p>
                        <div className="mt-2 text-xs bg-primary/10 p-2 rounded-md">
                          <div className="flex items-center gap-1 mb-1">
                            <UserCheck className="h-3 w-3 text-primary" />
                            <span className="font-medium">@IdeaCreadoraX</span>
                          </div>
                          <p>
                            Obra registrada por <strong>@IdeaCreadoraX</strong>, verificada como humana única vía World
                            ID.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Link href="/certificate/examples/pseudonym" className="w-full">
                      <Button variant="outline" size="sm" className="text-xs h-8 w-full">
                        Ver ejemplo completo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Alert variant="default" className="bg-primary/10 border-primary/20">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-xs">
                  <strong>Modo Seudónimo:</strong> Tu identidad real está protegida. Solo tú puedes demostrar que eres
                  el autor del proyecto. Ideal para proteger tu privacidad.
                </AlertDescription>
              </Alert>

              {/* Ejemplo de Certificado con Modo Legal */}
              <Card className="border-yellow-200">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="font-medium text-sm">Certificado Modo Legal</h3>
                          <Badge
                            variant="outline"
                            className="text-[10px] h-4 border-yellow-300 text-yellow-700 bg-yellow-50"
                          >
                            Ejemplo
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Muestra tus datos personales</p>
                        <div className="mt-2 text-xs bg-yellow-50 p-2 rounded-md border border-yellow-200">
                          <div className="flex items-center gap-1 mb-1">
                            <UserCheck className="h-3 w-3 text-yellow-600" />
                            <span className="font-medium">Juan Pérez Rodríguez</span>
                          </div>
                          <p>
                            Obra registrada por <strong>Juan Pérez Rodríguez</strong>, con DNI 12345678X, verificada vía
                            World ID.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Link href="/certificate/examples/legal" className="w-full">
                      <Button variant="outline" size="sm" className="text-xs h-8 w-full">
                        Ver ejemplo completo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Alert variant="default" className="bg-yellow-50 border-yellow-200">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-xs text-yellow-700">
                  <strong>Modo Legal:</strong> Tus datos personales son visibles en el certificado. Proporciona mayor
                  validez legal para trámites oficiales y reconocimiento directo de autoría.
                </AlertDescription>
              </Alert>

              <div className="bg-muted p-3 rounded-md text-xs">
                <h4 className="font-medium mb-2">Comparativa de modos</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    <div></div>
                    <div className="font-medium text-center text-primary">Seudónimo</div>
                    <div className="font-medium text-center text-yellow-700">Legal</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>Privacidad</div>
                    <div className="text-center">Alta</div>
                    <div className="text-center">Baja</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>Validez legal</div>
                    <div className="text-center">Media</div>
                    <div className="text-center">Alta</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>Trámites oficiales</div>
                    <div className="text-center">Limitado</div>
                    <div className="text-center">Completo</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>Requisitos</div>
                    <div className="text-center">World ID</div>
                    <div className="text-center">World ID + Datos personales</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <MobileNavbar />
    </div>
  )
}
