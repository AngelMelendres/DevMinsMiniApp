import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, FileText, Shield, Tag, User, Users, Info, Lock } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
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
              <h1 className="text-xl font-bold">Diseño de Logo</h1>
              <Badge className="ml-2">Protegido</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Diseño de identidad visual para startup tecnológica, incluye logo, paleta de colores y aplicaciones.
            </p>
            <div className="mt-2">
              <Badge variant="outline" className="text-[10px] h-5 border-yellow-300 text-yellow-700 bg-yellow-50">
                Modo Legal
              </Badge>
            </div>
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
                      <p className="text-sm">10 de Mayo, 2025 11:45</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Autor principal</p>
                      <p className="text-sm">Juan Pérez Rodríguez (Modo Legal)</p>
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
                      <p className="text-sm">Diseño / Arte</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Versión</p>
                      <p className="text-sm">2.0</p>
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
                      <p className="text-sm font-mono">3e9c12b8a7f6...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-sm font-medium mb-2">Datos Legales</h3>
                <Card className="border-yellow-200">
                  <CardContent className="p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-yellow-600" />
                      <div>
                        <p className="text-xs text-muted-foreground">Nombre completo</p>
                        <p className="text-sm">Juan Pérez Rodríguez</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-yellow-600" />
                      <div>
                        <p className="text-xs text-muted-foreground">Documento</p>
                        <p className="text-sm">DNI 12345678X</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-yellow-600" />
                      <div>
                        <p className="text-xs text-muted-foreground">País</p>
                        <p className="text-sm">España</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>\
