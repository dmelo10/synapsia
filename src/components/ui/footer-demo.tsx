"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t border-slate-800 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Mantenha Contato</h2>
            <p className="mb-6 text-muted-foreground">
              Inscreva-se para receber as últimas atualizações e ofertas exclusivas.
            </p>
            <div className="relative overflow-hidden rounded-lg backdrop-blur-md">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <form className="relative z-10">
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="pr-12 backdrop-blur-sm bg-background/50 border-slate-700 focus:border-primary focus-visible:ring-primary/30"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Inscrever-se</span>
                </Button>
              </form>
            </div>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold bg-gradient-to-r from-primary/90 to-primary/60 bg-clip-text text-transparent">Links Rápidos</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-primary">
                Início
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Sobre Nós
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Serviços
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Produtos
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Contato
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold bg-gradient-to-r from-primary/90 to-primary/60 bg-clip-text text-transparent">Entre em Contato</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>Rua Teste 99</p>
              <p>São Paulo - Brasil</p>
              <p>Telefone: (11) 1234-5678</p>
              <p>Email: contato@synapsia.com.br</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold bg-gradient-to-r from-primary/90 to-primary/60 bg-clip-text text-transparent">Siga-nos</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-slate-700 hover:border-primary/50 hover:bg-primary/10">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Siga-nos no Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-slate-700 hover:border-primary/50 hover:bg-primary/10">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Siga-nos no Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-slate-700 hover:border-primary/50 hover:bg-primary/10">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Siga-nos no Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-slate-700 hover:border-primary/50 hover:bg-primary/10">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Conecte-se conosco no LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Alternar modo escuro
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center md:flex-row">
          <div className="relative overflow-hidden rounded-lg bg-background/30 border border-slate-800 backdrop-blur-md p-4 w-full">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
            />
            <p className="text-sm text-muted-foreground relative z-10">
              © 2024 Synapsia. Todos os direitos reservados.
            </p>
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Termos de Serviço
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Configurações de Cookies
            </a>
          </nav>
        </div>
      </div>
      
      {/* Efeito decorativo */}
      <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-[80px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-[60px] opacity-20"></div>
      </div>
    </footer>
  )
}

export { Footerdemo } 