import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CreditCard, Plus, Trash2 } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import MobileNavbar from "@/components/mobile-navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PaymentMethodsPage() {
  const backButton = (
    <Link href="/profile" className="mr-2">
      <ArrowLeft className="h-5 w-5" />
    </Link>
  )

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Métodos de Pago" showLogo={false} backButton={backButton} />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          <Tabs defaultValue="cards" className="w-full mb-4">
            <TabsList className="grid grid-cols-2 h-9">
              <TabsTrigger value="cards" className="text-xs">
                Tarjetas
              </TabsTrigger>
              <TabsTrigger value="history" className="text-xs">
                Historial
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cards" className="mt-4 space-y-4">
              {/* Current Plan */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Plan Actual</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold">Plan Free</p>
                      <p className="text-xs text-muted-foreground">5 registros por mes</p>
                    </div>
                    <Link href="/pricing">
                      <Button size="sm">Actualizar</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Métodos de Pago</h3>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Plus className="h-3 w-3" /> Añadir
                  </Button>
                </div>

                {/* Card 1 */}
                <Card className="mb-3">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-primary/10 rounded flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                          <p className="text-xs text-muted-foreground">Expira 05/26</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">Principal</div>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Trash2 className="h-3.5 w-3.5 text-muted-foreground" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-primary/10 rounded flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">•••• •••• •••• 8888</p>
                          <p className="text-xs text-muted-foreground">Expira 12/25</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Trash2 className="h-3.5 w-3.5 text-muted-foreground" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Billing Address */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Dirección de Facturación</h3>
                  <p className="text-sm">Juan Pérez</p>
                  <p className="text-sm">Calle Principal 123</p>
                  <p className="text-sm">Ciudad, Estado 12345</p>
                  <p className="text-sm">México</p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-xs">
                    Editar dirección
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-4 space-y-4">
              {/* Billing History */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-3">Historial de Facturación</h3>

                  <div className="space-y-3">
                    <div className="border-b pb-3">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-medium">Plan Premium</p>
                          <p className="text-xs text-muted-foreground">15 Mayo, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">$19.99</p>
                          <p className="text-xs text-green-600">Pagado</p>
                        </div>
                      </div>
                      <Button variant="link" className="p-0 h-auto mt-1 text-xs">
                        Descargar factura
                      </Button>
                    </div>

                    <div className="border-b pb-3">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-medium">Plan Premium</p>
                          <p className="text-xs text-muted-foreground">15 Abril, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">$19.99</p>
                          <p className="text-xs text-green-600">Pagado</p>
                        </div>
                      </div>
                      <Button variant="link" className="p-0 h-auto mt-1 text-xs">
                        Descargar factura
                      </Button>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-medium">Plan Premium</p>
                          <p className="text-xs text-muted-foreground">15 Marzo, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">$19.99</p>
                          <p className="text-xs text-green-600">Pagado</p>
                        </div>
                      </div>
                      <Button variant="link" className="p-0 h-auto mt-1 text-xs">
                        Descargar factura
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Settings */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Configuración de Pagos</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">Renovación automática</p>
                      <Button variant="outline" size="sm">
                        Activada
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm">Notificaciones de pago</p>
                      <Button variant="outline" size="sm">
                        Activadas
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm">Moneda</p>
                      <Button variant="outline" size="sm">
                        USD
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <MobileNavbar />
    </div>
  )
}
