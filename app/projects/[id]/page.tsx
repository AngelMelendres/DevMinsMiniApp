import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Download, FileText, Share2, Shield, Tag, User } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import MobileNavbar from "@/components/mobile-navbar"
import { Badge } from "@/components/ui/badge"

export default function ProjectDetailPage() {
  const backButton = (
    <Link href="/dashboard/projects" className="mr-2">
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

          {/* Project Preview */}
          <Card className="mb-4">
            <CardContent className="p-4 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <FileText className="h-12 w-12 text-muted-foreground" />
                <p className="text-sm font-medium mt-2">documento-mvp.pdf</p>
                <p className="text-xs text-muted-foreground">1.2 MB</p>
              </div>
            </CardContent>
          </Card>

          {/* Project Info */}
          <Card className="mb-4">
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
                  <p className="text-xs text-muted-foreground">Autor</p>
                  <p className="text-sm">Juan Pérez</p>
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
                <Shield className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Hash de verificación</p>
                  <p className="text-sm font-mono">8f7d56a9c3b2e1d0f4a5...</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Link href="/certificate/1">
              <Button variant="outline" className="w-full gap-2">
                <Shield className="h-4 w-4" /> Ver Certificado
              </Button>
            </Link>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" /> Descargar
            </Button>
          </div>

          <Button className="w-full gap-2">
            <Share2 className="h-4 w-4" /> Compartir Proyecto
          </Button>

          {/* Additional Info */}
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Información adicional</h3>
            <Card>
              <CardContent className="p-3 text-xs">
                <p className="mb-2">
                  Este proyecto está protegido mediante registro en IPFS y verificación de identidad con World ID.
                </p>
                <p>
                  El certificado digital asociado puede ser verificado en cualquier momento por terceros a través del
                  enlace de verificación.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <MobileNavbar />
    </div>
  )
}
