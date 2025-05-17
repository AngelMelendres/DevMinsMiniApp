"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CreditCard,
  HelpCircle,
  LogOut,
  Settings,
  Shield,
  User,
} from "lucide-react";
import MobileHeader from "@/components/mobile-header";
import MobileNavbar from "@/components/mobile-navbar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

type UserInfo = {
  walletAddress: string;
  username: string | null;
  profilePictureUrl?: string | null;
};

export default function ProfilePage() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed);
      } catch {
        setUser(null);
      }
    }
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("storage"));
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader title="Mi Perfil" />

      <main className="flex-1 px-4 pb-16">
        <div className="py-4">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              {user?.profilePictureUrl ? (
                <img
                  src={user.profilePictureUrl}
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <User className="h-8 w-8 text-primary" />
              )}
            </div>
            <div>
              <h2 className="font-bold text-lg">
                {user?.username || "Usuario sin nombre"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {user?.walletAddress
                  ? `${user.walletAddress.slice(0, 6)}...${user.walletAddress.slice(-4)}`
                  : "Wallet no disponible"}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-green-600">Identidad verificada</span>
              </div>
            </div>
          </div>

          {/* Plan Info */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Plan Free</h3>
                  <p className="text-xs text-muted-foreground">3 de 5 registros utilizados</p>
                </div>
                <Link href="/pricing">
                  <Button size="sm" variant="outline" className="gap-1">
                    <ArrowRight className="h-3 w-3" /> Actualizar
                  </Button>
                </Link>
              </div>
              <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                <div className="bg-primary h-full w-3/5 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          {/* Settings */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Cuenta</h3>
              <Card>
                <CardContent className="p-0">
                  <Link href="/profile/personal-info" className="flex items-center justify-between p-3 border-b">
                    <div className="flex items-center gap-3">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Información personal</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link href="/profile/payment" className="flex items-center justify-between p-3 border-b">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Métodos de pago</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link href="/profile/settings" className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-3">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Configuración</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Preferencias</h3>
              <Card>
                <CardContent className="p-3 space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications" className="text-sm">
                      Notificaciones
                    </Label>
                    <Switch id="notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-alerts" className="text-sm">
                      Alertas por email
                    </Label>
                    <Switch id="email-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-protect" className="text-sm">
                      Protección automática
                    </Label>
                    <Switch id="auto-protect" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Soporte</h3>
              <Card>
                <CardContent className="p-0">
                  <Link href="/help" className="flex items-center justify-between p-3 border-b">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Centro de ayuda</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link href="/about" className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-3">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Acerca de CertiMind</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full gap-2 text-destructive border-destructive/30 hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" /> Cerrar sesión
            </Button>
          </div>
        </div>
      </main>

      <MobileNavbar />
    </div>
  );
}
