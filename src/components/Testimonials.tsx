import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Ev Sahibi',
      content: 'Çok profesyonel ve hızlı çalışma. Evimizin elektrik tesisatını yenilediler, çok memnun kaldık.',
      rating: 5,
    },
    {
      name: 'Mehmet Kaya',
      role: 'İşletme Sahibi',
      content: 'İşyerimizin elektrik arızasına aynı gün müdahale ettiler. Güvenilir ve kaliteli hizmet.',
      rating: 5,
    },
    {
      name: 'Ayşe Demir',
      role: 'Site Yöneticisi',
      content: 'Sitemizin aydınlatma sistemini yenilediler. Enerji tasarrufu sağladık, çok teşekkürler.',
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Müşteri Yorumları</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Müşterilerimizin bizimle ilgili değerlendirmeleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border border-border">
              <CardHeader>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 italic">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}