"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Calendar,
  Upload,
  User,
  Plus,
  X,
  Database,
  FileText,
  Fingerprint,
  AlertTriangle,
  UserCheck,
  Info,
  ArrowRight,
  Lock,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileHeader from "@/components/mobile-header";
import MobileNavbar from "@/components/mobile-navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function UploadPage() {
  const backButton = (
    <Link href="/projects/" className="mr-2">
      <ArrowLeft className="h-5 w-5" />
    </Link>
  );

  // Simulamos que el usuario no ha completado su información personal
  const [hasCompletedProfile, setHasCompletedProfile] = useState(false);
  const [authorshipMode, setAuthorshipMode] = useState<"pseudonym" | "legal">(
    "pseudonym"
  );
  const [showAuthorshipDialog, setShowAuthorshipDialog] = useState(false);
  const [tempAuthorshipMode, setTempAuthorshipMode] = useState<
    "pseudonym" | "legal"
  >("pseudonym");
  const [showProfileRequiredDialog, setShowProfileRequiredDialog] =
    useState(false);

  const handleAuthorshipModeChange = () => {
    if (tempAuthorshipMode === "legal" && !hasCompletedProfile) {
      setShowProfileRequiredDialog(true);
    } else {
      setShowAuthorshipDialog(true);
    }
  };

  const confirmAuthorshipMode = () => {
    if (tempAuthorshipMode === "legal" && !hasCompletedProfile) {
      setShowProfileRequiredDialog(true);
      setShowAuthorshipDialog(false);
    } else {
      setAuthorshipMode(tempAuthorshipMode);
      setShowAuthorshipDialog(false);

      // ✅ Corrección segura: convertir a HTMLElement para usar .click()
      if (tempAuthorshipMode === "legal") {
        const tabElement = document.querySelector(
          '[data-value="details"]'
        ) as HTMLElement | null;
        tabElement?.click();
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">
      <MobileHeader
        title="Nuevo Proyecto"
        showLogo={false}
        backButton={backButton}
      />

      <main className="flex-1 px-4 pb-16">
        <Tabs defaultValue="basic" className="w-full mt-4">
          <TabsList className="grid grid-cols-2 h-9">
            <TabsTrigger value="basic" className="text-xs">
              Básico
            </TabsTrigger>
            <TabsTrigger value="details" className="text-xs">
              Detalles
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título del Proyecto *</Label>
              <Input id="title" placeholder="Ej: MVP de Aplicación Móvil" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción *</Label>
              <Textarea
                id="description"
                placeholder="Describe brevemente tu proyecto o idea"
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Categoria *</Label>
              <Select>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Selecciona un tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="programacion">Programación</SelectItem>
                  <SelectItem value="diseno">Diseño</SelectItem>
                  <SelectItem value="plan-negocio">Plan de Negocio</SelectItem>
                  <SelectItem value="investigacion">Investigación</SelectItem>
                  <SelectItem value="obra-literaria">Obra Literaria</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Archivos *</Label>
              <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center">
                <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                <p className="text-xs text-muted-foreground mb-2 text-center">
                  Arrastra y suelta tus archivos aquí, o haz clic para
                  seleccionarlos
                </p>
                <Button variant="outline" size="sm">
                  Seleccionar Archivos
                </Button>
                <p className="text-[10px] text-muted-foreground mt-2">
                  Formatos: PDF, DOCX, JPG, PNG, ZIP (máx. 10MB)
                </p>
              </div>
            </div>

            {/* Modo de autoría */}
            <div className="space-y-2">
              <Label htmlFor="authorship-mode">Modo de Autoría *</Label>
              <Button
                variant="outline"
                className="w-full justify-between"
                onClick={handleAuthorshipModeChange}
              >
                <span>
                  {authorshipMode === "pseudonym"
                    ? "Seudónimo (Anónimo)"
                    : "Legal (Datos personales)"}
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              {authorshipMode === "pseudonym" ? (
                <Alert
                  variant="default"
                  className="bg-primary/10 border-primary/20"
                >
                  <Info className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-xs">
                    Modo seudónimo: Tu identidad real estará protegida. El
                    certificado mostrará tu seudónimo.
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert
                  variant="default"
                  className="bg-yellow-50 border-yellow-200"
                >
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertDescription className="text-xs text-yellow-700">
                    Modo legal: Tus datos personales serán visibles en el
                    certificado para mayor validez legal.
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <Button
              className="w-full"
              onClick={() =>
                document.querySelector('[data-value="details"]')?.click()
              }
            >
              Continuar
            </Button>
          </TabsContent>

          <TabsContent value="details" className="mt-4 space-y-4">
            {authorshipMode === "legal" && (
              <div className="space-y-2">
                <Label htmlFor="legal-name">Nombre legal completo *</Label>
                <Input id="legal-name" placeholder="Nombre y apellidos" />
                <p className="text-xs text-muted-foreground">
                  Este nombre aparecerá en todos los certificados y documentos
                  legales.
                </p>
              </div>
            )}

            {authorshipMode === "pseudonym" && (
              <div className="space-y-2">
                <Label htmlFor="pseudonym">Seudónimo *</Label>
                <Input
                  id="pseudonym"
                  placeholder="@TuSeudónimo"
                  defaultValue="@IdeaCreadoraX"
                />
                <p className="text-xs text-muted-foreground">
                  Este seudónimo aparecerá en tus certificados y protegerá tu
                  identidad real.
                </p>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() =>
                  document.querySelector('[data-value="basic"]')?.click()
                }
              >
                Atrás
              </Button>
              <Button
                className="flex-1"
                onClick={() =>
                  document.querySelector('[data-value="protection"]')?.click()
                }
              >
                Continuar
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="protection" className="mt-4 space-y-4">
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() =>
                  document.querySelector('[data-value="details"]')?.click()
                }
              >
                Atrás
              </Button>
              <Button className="flex-1 gap-2">
                <Upload className="h-4 w-4" /> Registrar Proyecto
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Al subir tu proyecto, aceptas nuestros{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Términos de Servicio
              </Link>
            </p>
          </TabsContent>
        </Tabs>
      </main>

      <MobileNavbar />

      {/* Diálogo de selección de modo de autoría */}
      <Dialog
        open={showAuthorshipDialog}
        onOpenChange={setShowAuthorshipDialog}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Seleccionar modo de autoría</DialogTitle>
            <DialogDescription>
              Elige cómo quieres que se muestre tu autoría en los certificados y
              documentos.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <RadioGroup
              value={tempAuthorshipMode}
              onValueChange={(value) =>
                setTempAuthorshipMode(value as "pseudonym" | "legal")
              }
              className="space-y-4"
            >
              <div className="flex items-start space-x-2">
                <RadioGroupItem
                  value="pseudonym"
                  id="pseudonym"
                  className="mt-1"
                />
                <div className="grid gap-1.5">
                  <Label htmlFor="pseudonym" className="font-medium">
                    Modo Seudónimo (Anónimo)
                  </Label>
                  <Alert
                    variant="default"
                    className="bg-primary/10 border-primary/20"
                  >
                    <Info className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-xs">
                      Tu identidad real estará protegida, verificada como humana
                      única vía World ID.
                    </AlertDescription>
                  </Alert>
                  <p className="text-sm text-muted-foreground">
                    Recomendado para proteger tu privacidad. En caso de disputa,
                    solo tú podrás demostrar que eres el autor.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <RadioGroupItem
                  value="legal"
                  id="legal"
                  className="mt-1"
                  disabled={!hasCompletedProfile}
                />
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <Label
                      htmlFor="legal"
                      className={`font-medium ${
                        !hasCompletedProfile ? "text-muted-foreground" : ""
                      }`}
                    >
                      Modo Legal (Datos personales)
                    </Label>
                    {!hasCompletedProfile && (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>

                  {!hasCompletedProfile ? (
                    <Alert
                      variant="default"
                      className="bg-muted border-muted-foreground/20"
                    >
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <AlertDescription className="text-xs text-muted-foreground">
                        Debes completar tu información personal en el perfil
                        para habilitar el modo legal.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert
                      variant="destructive"
                      className="bg-red-50 border-red-200"
                    >
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-xs text-red-700">
                        Tus datos personales (nombre completo) serán visibles
                        públicamente en el certificado y documentos legales.
                      </AlertDescription>
                    </Alert>
                  )}

                  <p className="text-sm text-muted-foreground">
                    Recomendado para trámites oficiales, mayor validez legal y
                    reconocimiento directo de autoría.
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowAuthorshipDialog(false)}
            >
              Cancelar
            </Button>
            <Button onClick={confirmAuthorshipMode} variant="default">
              Confirmar selección
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo de información de perfil requerida */}
      <Dialog
        open={showProfileRequiredDialog}
        onOpenChange={setShowProfileRequiredDialog}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Información de perfil requerida</DialogTitle>
            <DialogDescription>
              Para utilizar el modo legal, necesitas completar tu información
              personal en el perfil.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <Alert variant="default" className="bg-yellow-50 border-yellow-200">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-xs text-yellow-700">
                El modo legal requiere que proporciones tu información personal
                completa para aparecer en los certificados.
              </AlertDescription>
            </Alert>

            <div className="mt-4 space-y-2">
              <p className="text-sm">
                Para habilitar el modo legal, necesitas completar:
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Nombre completo</li>
                <li>Número de documento de identidad</li>
                <li>Dirección</li>
                <li>País de residencia</li>
              </ul>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowProfileRequiredDialog(false)}
            >
              Cancelar
            </Button>
            <Link href="/profile/personal-info">
              <Button>Completar perfil</Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
