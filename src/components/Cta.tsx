/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, CheckCircle, ArrowRight, LockIcon } from 'lucide-react';

/**
 * Constants
 */
import { ctaData } from '@/constants';

/**
 * Framer motion variants
 */
import * as variants from '@/lib/motionVariants';

const Cta = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação do envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className='section'>
      <div className='container'>
        <motion.div
          variants={variants.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='bg-background/50 backdrop-blur-xl rounded-xl border border-slate-800 shadow-2xl overflow-hidden relative'
        >
          <div className='p-8 md:p-12 lg:p-16'>
            <motion.div
              variants={variants.fadeIn}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='max-w-3xl mx-auto text-center mb-12'
            >
              <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                {ctaData.sectionTitle}
              </h2>
              <p className='text-muted-foreground text-lg'>
                {ctaData.sectionText}
              </p>
            </motion.div>

            <motion.div
              variants={variants.fadeInUp}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='max-w-5xl mx-auto'
            >
              <Card className="border border-slate-800 bg-background/70 backdrop-blur-xl shadow-lg relative overflow-hidden">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                
                {!isSubmitted ? (
                  <>
                    <CardHeader className="relative z-10 pb-4 border-b border-slate-800/40">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                          <CardTitle className="text-xl md:text-2xl font-bold flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-primary" />
                            Acesso Antecipado
                          </CardTitle>
                          <CardDescription className="mt-1">
                            Entre na lista de espera e seja um dos primeiros a testar
                          </CardDescription>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs md:text-sm font-medium text-primary flex items-center gap-1.5">
                          <LockIcon className="w-3 h-3" />
                          100 vagas disponíveis
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-6">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="text-sm font-medium">
                                Nome <span className="text-primary">*</span>
                              </Label>
                              <Input 
                                id="name" 
                                placeholder="Seu nome completo" 
                                required
                                className="bg-background/50 border-slate-700 focus:border-primary focus-visible:ring-primary/30 h-11" 
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-sm font-medium">
                                E-mail <span className="text-primary">*</span>
                              </Label>
                              <Input 
                                id="email" 
                                type="email" 
                                placeholder="seu@email.com" 
                                required
                                className="bg-background/50 border-slate-700 focus:border-primary focus-visible:ring-primary/30 h-11" 
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="company" className="text-sm font-medium">
                                Nome da empresa <span className="text-primary">*</span>
                              </Label>
                              <Input 
                                id="company" 
                                placeholder="Nome da sua startup" 
                                required
                                className="bg-background/50 border-slate-700 focus:border-primary focus-visible:ring-primary/30 h-11" 
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div className="space-y-2">
                              <Label htmlFor="revenue" className="text-sm font-medium">
                                Faturamento <span className="text-muted-foreground/80">(opcional)</span>
                              </Label>
                              <Select>
                                <SelectTrigger className="bg-background/50 border-slate-700 focus:border-primary focus-visible:ring-primary/30 h-11">
                                  <SelectValue placeholder="Selecione o faturamento" />
                                </SelectTrigger>
                                <SelectContent className="bg-background/90 border-slate-700">
                                  <SelectItem value="pre-revenue">Pré-faturamento</SelectItem>
                                  <SelectItem value="0-100k">Até R$ 100 mil/ano</SelectItem>
                                  <SelectItem value="100k-500k">R$ 100 mil a R$ 500 mil/ano</SelectItem>
                                  <SelectItem value="500k-1m">R$ 500 mil a R$ 1 milhão/ano</SelectItem>
                                  <SelectItem value="1m-5m">R$ 1 milhão a R$ 5 milhões/ano</SelectItem>
                                  <SelectItem value="5m+">Acima de R$ 5 milhões/ano</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="linkedin" className="text-sm font-medium">
                                LinkedIn <span className="text-muted-foreground/80">(opcional)</span>
                              </Label>
                              <Input 
                                id="linkedin" 
                                placeholder="linkedin.com/in/seu-perfil" 
                                className="bg-background/50 border-slate-700 focus:border-primary focus-visible:ring-primary/30 h-11" 
                              />
                            </div>
                            
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="pt-2.5"
                            >
                              <Button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-11 text-base font-medium relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                              >
                                {isSubmitting ? (
                                  <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processando...
                                  </span>
                                ) : (
                                  <span className="flex items-center justify-center gap-2">
                                    Entrar na lista de espera
                                    <ArrowRight className="w-4 h-4" />
                                  </span>
                                )}
                                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700"></span>
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                    
                    <CardFooter className="relative z-10 pt-4 pb-6 px-6 border-t border-slate-800/40 mt-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <LockIcon className="w-3.5 h-3.5" />
                        <p>Seus dados estão seguros. Não compartilhamos com terceiros.</p>
                      </div>
                    </CardFooter>
                  </>
                ) : (
                  <div className="py-16 px-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center max-w-md mx-auto"
                    >
                      <div className="mx-auto w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Inscrição realizada com sucesso!</h3>
                      <p className="text-muted-foreground text-lg mb-6">
                        Obrigado pelo seu interesse! Entraremos em contato em breve com mais informações sobre o acesso antecipado.
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        Fique de olho na sua caixa de entrada para as próximas atualizações.
                      </p>
                    </motion.div>
                  </div>
                )}
              </Card>
              
              {/* Elementos decorativos */}
              <div className="pointer-events-none">
                <motion.div 
                  className="absolute -right-16 -top-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -left-16 -bottom-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Efeito de brilho para o container */}
          <div className='absolute -z-10 inset-0 blur-[100px] opacity-20 bg-gradient-to-r from-primary via-primary/50 to-primary/30'></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
