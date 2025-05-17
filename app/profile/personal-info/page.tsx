import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Check, Info } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import MobileNavbar from "@/components/mobile-navbar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function PersonalInfoPage() {
  const backButton = (
    <Link href="/profile" className="mr-2">
      <ArrowLeft className="h-5 w-5" />
    </Link>
  )

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Información Personal" showLogo={false} backButton={backButton} />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          <Alert variant="default" className="mb-4 bg-primary/10 border-primary/20">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-xs">
              Esta información es necesaria para habilitar el modo legal en tus certificados. Solo será visible cuando
              utilices el modo legal.
            </AlertDescription>
          </Alert>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre completo *</Label>
              <Input id="fullName" placeholder="Nombre y apellidos" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="docType">Tipo de documento *</Label>
                <Select>
                  <SelectTrigger id="docType">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dni">DNI</SelectItem>
                    <SelectItem value="passport">Pasaporte</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="docNumber">Número de documento *</Label>
                <Input id="docNumber" placeholder="Ej: 12345678X" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Dirección *</Label>
              <Input id="address" placeholder="Calle, número, piso" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="city">Ciudad *</Label>
                <Input id="city" placeholder="Ciudad" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Código postal *</Label>
                <Input id="postalCode" placeholder="Ej: 28001" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">País *</Label>
              <Select>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Seleccionar país" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">España</SelectItem>
                  <SelectItem value="mx">México</SelectItem>
                  <SelectItem value="co">Colombia</SelectItem>
                  <SelectItem value="ar">Argentina</SelectItem>
                  <SelectItem value="cl">Chile</SelectItem>
                  <SelectItem value="pe">Perú</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" placeholder="Ej: +34 612345678" />
            </div>

            <div className="pt-4">
              <Button className="w-full gap-2">
                <Check className="h-4 w-4" /> Guardar información
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Esta información solo será visible cuando utilices el modo legal en tus certificados.
              </p>
            </div>
          </form>
        </div>
      </main>

      <MobileNavbar />
    </div>
  )
}
