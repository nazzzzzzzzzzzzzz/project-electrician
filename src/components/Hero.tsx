import { ArrowRight, Lightbulb, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slide-up">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Profesyonel Elektrik Çözümleri
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            20 yıllık deneyim ile elektrik tesisatı, bakım ve onarım hizmetleri sunuyoruz.
            Güvenilir ve kaliteli hizmet garantisi ile yanınızdayız.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 hover-scale">
              Hemen Teklif Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              Hizmetlerimiz
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: Shield,
              title: 'Güvenilir Hizmet',
              description: '7/24 teknik destek ve profesyonel ekip',
            },
            {
              icon: Zap,
              title: 'Hızlı Çözüm',
              description: 'Acil durumlarda 30 dakika içinde müdahale',
            },
            {
              icon: Lightbulb,
              title: 'Modern Çözümler',
              description: 'En son teknoloji ve akıllı sistemler',
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon className="h-12 w-12 text-yellow-500 mb-4 animate-bounce-in" style={{ animationDelay: `${index * 200 + 300}ms` }} />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}