/* "use client";
import { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import { VerifyBlock } from "@/components/Verify";
import { PayBlock } from "@/components/Pay";
import { WalletAuth } from "@/components/WalletAuth";
import { Login } from "@/components/Login";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMiniKit = async () => {
      const isInstalled = MiniKit.isInstalled();
      if (isInstalled) {
        setIsLoading(false);
      } else {
        setTimeout(checkMiniKit, 500);
      }
    };

    checkMiniKit();
  }, []);

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-12 bg-gray-50">
        <div className="flex flex-col items-center justify-center text-center">
          <svg
            className="animate-spin h-10 w-10 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="mt-4 text-lg font-medium text-gray-900">CARGANDO...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="w-full max-w-md mx-auto space-y-8 py-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-black">CERTIMIND </h1>

        <section className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">INICIAR SESION</h2>
          <Login />
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            AUTENTIFIACION CON WALLET
          </h2> G
          <WalletAuth />
        </section>
      </div>
    </main>
  );
}
 */

"use client";
import { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import { VerifyBlock } from "@/components/Verify";
import { PayBlock } from "@/components/Pay";
import { WalletAuth } from "@/components/WalletAuth";
import { Login } from "@/components/Login";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import MobileHeader from "@/components/mobile-header";
import MobileNavbar from "@/components/mobile-navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="MindProof" />

      <main className="flex-1 px-4 pb-16">
        {/* Hero Section */}
        <section className="py-6">
          <div className="space-y-4 text-center">
            <Shield className="h-12 w-12 text-primary mx-auto" />
            <h1 className="text-2xl font-bold">MindProof</h1>
            <p className="text-sm text-muted-foreground">
              Tu idea. Tu identidad. Tu prueba. En un clic, sin abogados.
            </p>
            <p className="text-xs text-muted-foreground">
              Registra y protege tu propiedad intelectual de forma instantánea,
              segura y verificable.
            </p>
            <div className="pt-2">
              {/* <Link href="/register">
                <Button className="w-full gap-2">
                  Iniciar Sesion <ArrowRight className="h-4 w-4" />
                </Button>
              </Link> */}
              <Login />
            </div>
          </div>
        </section>

        {/* User Journeys */}
        <section className="py-4">
          <h2 className="text-lg font-bold mb-4">Experiencias Reales</h2>
          <div className="space-y-3">
            <div className="bg-muted/50 p-3 rounded-lg">
              <h3 className="font-medium text-sm">Estudiante Creativo</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Se registra con World ID → Sube su proyecto final → Obtiene
                certificado con sello de su universidad → Lo incluye en su
                portafolio profesional.
              </p>
            </div>

            <div className="bg-muted/50 p-3 rounded-lg">
              <h3 className="font-medium text-sm">Startup Early-Stage</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Sube su MVP en PDF → Obtiene hash + registro → Envía certificado
                a un inversor como prueba de autoría.
              </p>
            </div>

            <div className="bg-muted/50 p-3 rounded-lg">
              <h3 className="font-medium text-sm">Estudio Legal</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Integra MindProof en su flujo → Recomienda a clientes → Gana
                comisiones por cada nuevo registro.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-4">
          <h2 className="text-lg font-bold mb-4">Ventaja Competitiva</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <h3 className="font-medium text-sm">World ID</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Identidad verificada = cero bots, cero fraudes.
              </p>
            </div>

            <div className="bg-primary/10 p-3 rounded-lg">
              <h3 className="font-medium text-sm">IPFS + Hash</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Registro descentralizado, inalterable y global.
              </p>
            </div>

            <div className="bg-primary/10 p-3 rounded-lg">
              <h3 className="font-medium text-sm">UX Simple</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Usable incluso sin conocimientos técnicos.
              </p>
            </div>

            <div className="bg-primary/10 p-3 rounded-lg">
              <h3 className="font-medium text-sm">Certificados</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Listos para compartir y validar.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-4">
          <div className="bg-primary text-primary-foreground p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">El Problema</h2>
            <div className="space-y-2 text-sm">
              <p>
                En el mundo actual, millones de ideas creativas nacen a diario
                sin protección legal ni respaldo técnico.
              </p>
              <p>
                Registrar propiedad intelectual de manera formal sigue siendo un
                proceso lento, costoso y excluyente.
              </p>
            </div>
            <div className="mt-3 p-3 bg-primary-foreground text-primary rounded-lg">
              <p className="text-sm font-medium">
                MindProof resuelve este problema al ofrecer un registro
                instantáneo, seguro y verificable.
              </p>
              <p className="mt-2 text-xs font-bold">
                Todo esto, sin abogados, sin trámites, y en menos de un minuto.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-6">
          <Link href="/register">
            <Button size="lg" className="w-full gap-2">
              Protege tus ideas ahora <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </section>
      </main>

      <MobileNavbar />
    </div>
  );
}
