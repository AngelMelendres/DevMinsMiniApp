import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Download, FileText, Search, Share2 } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import MobileNavbar from "@/components/mobile-navbar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CertificatesPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Mis Certificados" />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar certificados..." className="pl-8" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Card>
              <CardContent className="p-3">
                <div className="text-2xl font-bold">5</div>
                <div className="text-xs text-muted-foreground">Certificados</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-muted-foreground">Descargas</div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full mb-4">
            <TabsList className="grid grid-cols-3 h-9">
              <TabsTrigger value="all" className="text-xs">
                Todos
              </TabsTrigger>
              <TabsTrigger value="shared" className="text-xs">
                Compartidos
              </TabsTrigger>
              <TabsTrigger value="verified" className="text-xs">
                Verificados
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Certificates List */}
          <div className="space-y-3">
            <Link href="/certificate/1">
              <Card>
                <CardContent className="p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-sm">Certificado MVP Aplicación</h3>
                        <p className="text-xs text-muted-foreground">15/05/2025</p>
                        <p className="text-xs text-muted-foreground mt-1">Hash: 8f7d56a9c3b2...</p>
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

            <Link href="/certificate/2">
              <Card>
                <CardContent className="p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-sm">Certificado Diseño Logo</h3>
                        <p className="text-xs text-muted-foreground">10/05/2025</p>
                        <p className="text-xs text-muted-foreground mt-1">Hash: 3e9c12b8a7f6...</p>
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

            <Link href="/certificate/3">
              <Card>
                <CardContent className="p-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-sm">Certificado Propuesta Negocio</h3>
                        <p className="text-xs text-muted-foreground">01/05/2025</p>
                        <p className="text-xs text-muted-foreground mt-1">Hash: 5a2f98c7d6e5...</p>
                      </div>
                    </div>
                    <div className="bg-primary/10 px-2 py-1 rounded text-xs font-medium text-primary">DOCX</div>
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

            <Card>
              <CardContent className="p-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sm">Certificado Código Fuente</h3>
                      <p className="text-xs text-muted-foreground">25/04/2025</p>
                      <p className="text-xs text-muted-foreground mt-1">Hash: 1b2c3d4e5f6g...</p>
                    </div>
                  </div>
                  <div className="bg-primary/10 px-2 py-1 rounded text-xs font-medium text-primary">ZIP</div>
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

            <Card>
              <CardContent className="p-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sm">Certificado Investigación</h3>
                      <p className="text-xs text-muted-foreground">15/04/2025</p>
                      <p className="text-xs text-muted-foreground mt-1">Hash: 9h8g7f6e5d4c...</p>
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
          </div>
        </div>
      </main>

      <MobileNavbar />
    </div>
  )
}
