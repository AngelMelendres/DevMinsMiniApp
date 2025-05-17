"use client";

import Link from "next/link";
import { FileText, Home, Shield, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileNavbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<null | { walletAddress: string }>(null);

  const loadUser = () => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.walletAddress) {
          setUser(parsed);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    // Cargar usuario al montar
    loadUser();

    // Escuchar cambios en localStorage (ej. desde logout/login)
    const handleStorageChange = () => loadUser();
    window.addEventListener("storage", handleStorageChange);

    // Limpieza al desmontar
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 bg-background border-t max-w-md mx-auto">
      <div className="flex items-center justify-around h-16">
        <Link
          href="/"
          className="flex flex-col items-center justify-center w-full"
        >
          <Home
            className={`h-5 w-5 ${pathname === "/" ? "text-primary" : ""}`}
          />
          <span
            className={`text-xs mt-1 ${
              pathname === "/" ? "text-primary font-medium" : ""
            }`}
          >
            Inicio
          </span>
        </Link>

        {user && (
          <>
            <Link
              href="/dashboard"
              className="flex flex-col items-center justify-center w-full"
            >
              <FileText
                className={`h-5 w-5 ${
                  pathname.startsWith("/dashboard") ? "text-primary" : ""
                }`}
              />
              <span
                className={`text-xs mt-1 ${
                  pathname.startsWith("/dashboard")
                    ? "text-primary font-medium"
                    : ""
                }`}
              >
                Biblioteca
              </span>
            </Link>
            <Link
              href="/certificate/verify"
              className="flex flex-col items-center justify-center w-full"
            >
              <Shield
                className={`h-5 w-5 ${
                  pathname.startsWith("/certificate/verify")
                    ? "text-primary"
                    : ""
                }`}
              />
              <span
                className={`text-xs mt-1 ${
                  pathname.startsWith("/certificate/verify")
                    ? "text-primary font-medium"
                    : ""
                }`}
              >
                Verificar
              </span>
            </Link>
            <Link
              href="/profile"
              className="flex flex-col items-center justify-center w-full"
            >
              <User
                className={`h-5 w-5 ${
                  pathname.startsWith("/profile") ? "text-primary" : ""
                }`}
              />
              <span
                className={`text-xs mt-1 ${
                  pathname.startsWith("/profile")
                    ? "text-primary font-medium"
                    : ""
                }`}
              >
                Perfil
              </span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
