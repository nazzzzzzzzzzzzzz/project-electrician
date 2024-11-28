import {
  BatteryCharging,
  Building2,
  Home,
  Zap,
  Shield,
  Wrench,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Ev Elektrik Tesisatı',
      description: 'Yeni bina ve renovasyon projeleri için komple elektrik tesisatı',
    },
    {
      icon: Building2,
      title: 'Endüstriyel Elektrik',
      description: 'Fabrika ve işyerleri için profesyonel çözümler',
    },
    {
      icon: Zap,
      title: 'Acil Elektrik Servisi',
      description: '7/24 acil elektrik arıza ve tamir hizmeti',
    },
    {
      icon: Shield,
      title: 'Elektrik Kontrolü',
      description: 'Periyodik bakım ve güvenlik kontrolleri',
    },
    {
      icon: BatteryCharging,
      title: 'Enerji Verimliliği',
      description: 'Enerji tasarrufu çözümleri ve danışmanlık',
    },
    {
      icon: Wrench,
      title: 'Bakım & Onarım',
      description: 'Her türlü elektrik arıza ve tamirat işleri',
    },
  ];

  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold">Hizmetlerimiz</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Profesyonel ekibimizle size en iyi hizmeti sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="border border-border hover-glow animate-fade-in hover-rotate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-yellow-500 mb-4 transition-transform duration-300 hover:scale-110" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>7/24 Destek</li>
                  <li>Ücretsiz Keşif</li>
                  <li>Garanti</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}