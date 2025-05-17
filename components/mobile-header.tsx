import type React from "react"
import { Shield } from "lucide-react"

interface MobileHeaderProps {
  title: string
  showLogo?: boolean
  backButton?: React.ReactNode
}

export default function MobileHeader({ title, showLogo = true, backButton }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-background border-b">
      <div className="h-14 flex items-center justify-between px-4">
        <div className="flex items-center">
          {backButton}
          {showLogo && !backButton && <Shield className="h-5 w-5 text-primary mr-2" />}
          <span className="font-semibold">{title}</span>
        </div>
      </div>
    </header>
  )
}
