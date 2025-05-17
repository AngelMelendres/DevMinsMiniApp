import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Download, QrCode, Share2, Shield } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import MobileNavbar from "@/components/mobile-navbar"

export default function CertificatePage() {
  const backButton = (
    <Link href="/dashboard" className="mr-2">
      <ArrowLeft className="h-5 w-5" />
    </Link>
  )

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Certificado" showLogo={false} backButton={backButton} />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          <div className="border-2 rounded-lg overflow-hidden">
            <div className="text-center border-b p-4 bg-muted/30">
              <Shield className="h-10 w-10 text-primary mx-auto mb-2" />
              <h2 className="text-lg font-bold">Certificado de Propiedad Intelectual</h2>
              <p className="text-xs text-muted-foreground">Verificado y Registrado por MindProof</p>
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
                  <h3 className="text-xs font-medium text-muted-foreground">Autor</h3>
                  <p className="text-sm font-medium">Juan Pérez</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground">Tipo</h3>
                  <p className="text-sm font-medium">PDF (1.2 MB)</p>
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
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-xs font-medium">Identidad verificada con World ID</span>
                </div>
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
                <p className="font-medium">mindproof.com/verify/8f7d56a9</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Link href="/dashboard/project/1">
              <Button variant="outline" className="w-full">
                Ver proyecto completo
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <MobileNavbar />
    </div>
  )
}
