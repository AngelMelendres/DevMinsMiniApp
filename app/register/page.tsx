import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import WorldIDButton from "@/components/world-id-button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RegisterPage() {
  const backButton = (
    <Link href="/" className="mr-2">
      <ArrowLeft className="h-5 w-5" />
    </Link>
  )

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Crear cuenta" showLogo={false} backButton={backButton} />

      <main className="flex-1 px-4 py-6">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold">Verificación de identidad</h1>
            <p className="text-sm text-muted-foreground">Inicia sesión con World ID para verificar tu identidad</p>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <WorldIDButton />
          </div>

          <Alert variant="default" className="bg-primary/10 border-primary/20">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-xs">
              CertiMind utiliza World ID para verificar tu identidad humana. Esto garantiza la autenticidad de tus
              certificados y protege contra fraudes.
            </AlertDescription>
          </Alert>

          <div className="space-y-4 pt-4 border-t">
            <h2 className="text-sm font-medium">¿Por qué usar World ID?</h2>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>• Verificación de identidad humana única</p>
              <p>• Protección contra bots y fraudes</p>
              <p>• Opción de usar seudónimo o modo legal en tus certificados</p>
              <p>• Mayor seguridad para tus proyectos</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
