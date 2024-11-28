import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Projects() {
  const projects = [
    {
      title: 'Akıllı Ev Sistemleri',
      description: 'Modern villa için komple akıllı ev otomasyonu',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      details: 'İstanbul / 2023',
    },
    {
      title: 'Endüstriyel Tesisat',
      description: 'Fabrika elektrik altyapı yenileme projesi',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      details: 'Ankara / 2023',
    },
    {
      title: 'Aydınlatma Projesi',
      description: 'Otel kompleksi LED aydınlatma sistemi',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80',
      details: 'İzmir / 2023',
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold">Projelerimiz</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Başarıyla tamamladığımız bazı projelerimiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden border border-border hover-glow animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <AspectRatio ratio={16 / 9}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{project.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}