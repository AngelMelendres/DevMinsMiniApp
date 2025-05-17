import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Calendar,
  Download,
  FileText,
  Share2,
  Shield,
  Tag,
  User,
  Users,
  Info,
  Eye,
  CheckCircle,
  X,
  ArrowRight,
  QrCode,
  Lock,
} from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import MobileNavbar from "@/components/mobile-navbar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectDetailPage() {
  const backButton = (
    <Link href="/dashboard" className="mr-2">
      <ArrowLeft className="h-5 w-5" />
    </Link>
  )

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Detalle del Proyecto" showLogo={false} backButton={backButton} />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          {/* Project Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">MVP Aplicación Móvil</h1>
              <Badge className="ml-2">Protegido</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Aplicación móvil para gestión de tareas con funcionalidades de colaboración y recordatorios.
            </p>
          </div>

          <Tabs defaultValue="info" className="w-full mb-4">
            <TabsList className="grid grid-cols-3 h-9">
              <TabsTrigger value="info" className="text-xs">
                Información
              </TabsTrigger>
              <TabsTrigger value="file" className="text-xs">
                Archivo
              </TabsTrigger>
              <TabsTrigger value="certificates" className="text-xs">
                Certificados
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-4 space-y-4">
              {/* Project Info */}
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Fecha de registro</p>
                      <p className="text-sm">15 de Mayo, 2025 14:30</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Autor principal</p>
                      <p className="text-sm">Juan Pérez</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Colaboradores</p>
                      <p className="text-sm">María Rodríguez, Carlos López</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Tipo de proyecto</p>
                      <p className="text-sm">Software / Aplicación</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Versión</p>
                      <p className="text-sm">1.0</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Confidencialidad</p>
                      <p className="text-sm">Media - Información sensible</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Hash de verificación</p>
                      <p className="text-sm font-mono">8f7d56a9c3b2e1d0f4a5...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-sm font-medium mb-2">Etiquetas</h3>
                <div className="flex flex-wrap gap-1">
                  <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md">Tecnología</div>
                  <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md">Móvil</div>
                  <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md">Productividad</div>
                  <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md">Gestión</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Referencias</h3>
                <Card>
                  <CardContent className="p-3 text-xs">
                    <p>
                      Este proyecto está basado en investigaciones previas sobre gestión de tareas y productividad.
                      Referencias: "Task Management Systems" (2024), "Mobile Productivity Apps" (2023).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="file" className="mt-4 space-y-4">
              {/* Project Preview */}
              <Card>
                <CardContent className="p-4 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <FileText className="h-12 w-12 text-muted-foreground" />
                    <p className="text-sm font-medium mt-2">documento-mvp.pdf</p>
                    <p className="text-xs text-muted-foreground">1.2 MB</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" /> Descargar
                </Button>
                <Button variant="outline" className="gap-2">
                  <Eye className="h-4 w-4" /> Previsualizar
                </Button>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Protección del archivo</h3>
                <Card>
                  <CardContent className="p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <p className="text-xs">Verificación de integridad</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <p className="text-xs">Almacenamiento IPFS</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <p className="text-xs">Timestamp verificado</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">Marca de agua digital (no aplicada)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="certificates" className="mt-4 space-y-4">
              <Link href="/certificate/1" className="block">
                <Card className="border-primary/20 mb-3">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium text-sm">Certificado Digital</h3>
                          <p className="text-xs text-muted-foreground">Emitido: 15/05/2025</p>
                          <p className="text-xs text-muted-foreground mt-1">Hash: 8f7d56a9c3b2...</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <div className="grid grid-cols-2 gap-3">
                <Button className="gap-2">
                  <Share2 className="h-4 w-4" /> Compartir
                </Button>
                <Button variant="outline" className="gap-2">
                  <QrCode className="h-4 w-4" /> Ver QR
                </Button>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Historial de verificaciones</h3>
                <Card>
                  <CardContent className="p-3 space-y-3">
                    <div className="border-l-2 border-green-500 pl-3 py-1">
                      <p className="text-xs font-medium">Verificación exitosa</p>
                      <p className="text-xs text-muted-foreground">20/05/2025, 10:15</p>
                    </div>
                    <div className="border-l-2 border-green-500 pl-3 py-1">
                      <p className="text-xs font-medium">Verificación exitosa</p>
                      <p className="text-xs text-muted-foreground">18/05/2025, 14:30</p>
                    </div>
                    <div className="border-l-2 border-green-500 pl-3 py-1">
                      <p className="text-xs font-medium">Certificado emitido</p>
                      <p className="text-xs text-muted-foreground">15/05/2025, 14:32</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <MobileNavbar />
    </div>
  )
}
