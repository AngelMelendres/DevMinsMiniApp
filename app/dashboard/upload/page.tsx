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
    <Link href="/dashboard" className="mr-2">
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
          <TabsList className="grid grid-cols-3 h-9">
            <TabsTrigger value="basic" className="text-xs">
              Básico
            </TabsTrigger>
            <TabsTrigger value="details" className="text-xs">
              Detalles
            </TabsTrigger>
            <TabsTrigger value="protection" className="text-xs">
              Protección
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
              <Label htmlFor="type">Tipo de Proyecto awdaw d*</Label>
              <Select>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Selecciona un tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectContent>
                    <SelectItem value="programacion">Programación</SelectItem>
                    <SelectItem value="diseno">Diseño</SelectItem>
                    <SelectItem value="plan-negocio"> Plan de Negocio</SelectItem>
                    <SelectItem value="investigacion">Investigación</SelectItem>
                    <SelectItem value="obra-literaria"> Obra Literaria</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Archivo del Proyecto *</Label>
              <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center">
                <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                <p className="text-xs text-muted-foreground mb-2 text-center">
                  Arrastra y suelta tu archivo aquí, o haz clic para
                  seleccionarlo
                </p>
                <Button variant="outline" size="sm">
                  Seleccionar Archivo
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

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="authors">Autores / Colaboradores</Label>
                <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                  <Plus className="h-3 w-3" /> Añadir
                </Button>
              </div>
              <div className="flex items-center gap-2 border rounded-md p-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  {authorshipMode === "legal" ? "Juan Pérez" : "@IdeaCreadoraX"}{" "}
                  (Tú)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Etiquetas / Categorías</Label>
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md flex items-center gap-1">
                  <span>Tecnología</span>
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md flex items-center gap-1">
                  <span>Móvil</span>
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="h-6 text-xs">
                  + Añadir
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Fecha de Creación</Label>
              <div className="relative">
                <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="date" type="date" className="pl-8" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="version">Versión</Label>
              <Input id="version" placeholder="Ej: 1.0" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="references">
                Referencias o Trabajos Relacionados
              </Label>
              <Textarea
                id="references"
                placeholder="Incluye referencias a otros trabajos o proyectos relacionados"
                className="min-h-[60px]"
              />
            </div>

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
            <div className="space-y-2">
              <Label htmlFor="confidentiality">Nivel de Confidencialidad</Label>
              <Select defaultValue="medium">
                <SelectTrigger id="confidentiality">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">
                    Bajo - Información general
                  </SelectItem>
                  <SelectItem value="medium">
                    Medio - Información sensible
                  </SelectItem>
                  <SelectItem value="high">
                    Alto - Información confidencial
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="visibility">Visibilidad</Label>
              <Select defaultValue="private">
                <SelectTrigger id="visibility">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private">
                    Privado (solo tú puedes verlo)
                  </SelectItem>
                  <SelectItem value="shared">
                    Compartido (con enlace)
                  </SelectItem>
                  <SelectItem value="public">
                    Público (visible para todos)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Opciones de Protección</Label>
              <div className="space-y-3 mt-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm">Verificación World ID</p>
                      <p className="text-xs text-muted-foreground">
                        Identidad humana verificada
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked disabled />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm">Almacenamiento IPFS</p>
                      <p className="text-xs text-muted-foreground">
                        Registro descentralizado
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm">Certificado Digital</p>
                      <p className="text-xs text-muted-foreground">
                        Con hash y timestamp
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Fingerprint className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm">Marca de agua digital</p>
                      <p className="text-xs text-muted-foreground">
                        Protección adicional
                      </p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional">Información Adicional</Label>
              <Textarea
                id="additional"
                placeholder="Cualquier información adicional relevante para la protección"
                className="min-h-[60px]"
              />
            </div>

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
              Elige cómo quieres que se muestre tu autoría en los documentos.
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
                      Tu identidad real estará protegida. El certificado
                      mostrará: "Obra registrada por @IdeaCreadoraX, verificada
                      como humana única vía World ID."
                    </AlertDescription>
                  </Alert>
                  <p className="text-sm text-muted-foreground">
                   
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
                 
                  </p>
                </div>
              </div>
            </RadioGroup>

            <div className="bg-muted p-3 rounded-md">
              <h4 className="text-sm font-medium mb-1">
                Ejemplos de certificados:
              </h4>
              <div className="space-y-2">
                <div className="text-xs border-l-2 border-primary pl-2 py-1">
                  <p className="font-medium">Modo Seudónimo:</p>
                  <p>
                    "Obra registrada por @IdeaCreadoraX, verificada como humana
                    única vía World ID."
                  </p>
                </div>
                <div className="text-xs border-l-2 border-yellow-500 pl-2 py-1">
                  <p className="font-medium">Modo Legal:</p>
                  <p>
                    "Obra registrada por Juan Pérez, con DNI/Pasaporte XXXXXXXX,
                    verificada vía World ID."
                  </p>
                </div>
              </div>
            </div>
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
