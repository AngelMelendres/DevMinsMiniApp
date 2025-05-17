import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, QrCode, Share2, Shield, UserCheck } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import MobileNavbar from "@/components/mobile-navbar"
import { Badge } from "@/components/ui/badge"

export default function LegalCertificateExamplePage() {
  const backButton = (
    <Link href="/dashboard/library" className="mr-2">
      <ArrowLeft className="h-5 w-5" />
    </Link>
  )

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Ejemplo Modo Legal" showLogo={false} backButton={backButton} />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-4">
            Este es un ejemplo de cómo se verá tu certificado en <strong>modo legal</strong>, mostrando tus datos
            personales para mayor validez legal.
          </p>

          <div className="border-2 border-yellow-200 rounded-lg overflow-hidden">
            <div className="text-center border-b p-4 bg-yellow-50">
              <Shield className="h-10 w-10 text-yellow-600 mx-auto mb-2" />
              <h2 className="text-lg font-bold">Certificado de Propiedad Intelectual</h2>
              <p className="text-xs text-muted-foreground">Verificado y Registrado por CertiMind</p>
            </div>

            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground">Título</h3>
                  <p className="text-sm font-medium">MVP Aplicación Móvil</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground">Fecha</h3>
                  <p className="text-sm font-medium">15/05/2025</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground">Autoría</h3>
                  <div className="flex items-center gap-1">
                    <p className="text-sm font-medium">Juan Pérez Rodríguez</p>
                    <Badge variant="outline" className="text-[10px] h-4 border-yellow-300 text-yellow-700 bg-yellow-50">
                      Verificado
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground">Tipo</h3>
                  <p className="text-sm font-medium">PDF (1.2 MB)</p>
                </div>
              </div>

              <div className="pt-2 border-t">
                <h3 className="text-xs font-medium text-muted-foreground mb-1">Datos Legales</h3>
                <div className="bg-yellow-50 p-3 rounded-md text-xs border border-yellow-200">
                  <div className="mb-1">
                    <span className="text-muted-foreground mr-1">Nombre completo:</span>
                    <span className="font-medium">Juan Pérez Rodríguez</span>
                  </div>
                  <div className="mb-1">
                    <span className="text-muted-foreground mr-1">Documento:</span>
                    <span className="font-medium">DNI 12345678X</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground mr-1">País:</span>
                    <span className="font-medium">España</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t">
                <h3 className="text-xs font-medium text-muted-foreground mb-1">Verificación</h3>
                <div className="bg-muted p-3 rounded-md font-mono text-xs break-all">
                  <div className="mb-1">
                    <span className="text-muted-foreground mr-1">Hash:</span>
                    8f7d56a9c3b2e1d0f4a5...
                  </div>
                  <div>
                    <span className="text-muted-foreground mr-1">IPFS:</span>
                    QmT78zSuBmuS4z925WZ...
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-green-500" />
                  <span className="text-xs font-medium">Identidad verificada con World ID</span>
                </div>
              </div>

              <div className="bg-yellow-50 p-3 rounded-md text-xs border border-yellow-200">
                <p className="font-medium text-yellow-700">
                  Obra registrada por Juan Pérez Rodríguez, con DNI 12345678X, verificada vía World ID.
                </p>
                <p className="mt-1 text-muted-foreground">
                  Este certificado tiene validez legal y puede ser utilizado en procedimientos oficiales.
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <div className="border-2 border-dashed rounded-lg p-3 w-24 h-24 flex items-center justify-center">
                  <QrCode className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="border-t p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button className="gap-2">
                  <Download className="h-4 w-4" /> Descargar
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" /> Compartir
                </Button>
              </div>

              <div className="text-center text-xs text-muted-foreground">
                <p>Verificable en:</p>
                <p className="font-medium">certimind.com/verify/8f7d56a9</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-sm font-medium mb-2 text-yellow-700">Ventajas del modo legal:</h3>
            <ul className="text-xs space-y-1 list-disc pl-4 text-yellow-700">
              <li>Mayor validez legal para trámites oficiales</li>
              <li>Reconocimiento directo de autoría con datos personales</li>
              <li>Facilita procesos legales y reclamaciones de derechos</li>
              <li>Ideal para proyectos que requieren protección legal completa</li>
            </ul>
          </div>
        </div>
      </main>

      <MobileNavbar />
    </div>
  )
}
