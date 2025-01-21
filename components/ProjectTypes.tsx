"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { 
  Wrench, 
  Wind, 
  Zap, 
  Shield, 
  CableCar, 
  Droplet,
  Cable,
  Home,
  Bell,
  Sun,
  Camera,
  Network,
  Ruler,
  Palette,
  Lightbulb,
  Trees,
  Leaf
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const projectTypes = [
  {
    icon: "/civil-engineering.png",
    title: "Πολιτικοί Μηχανικοί",
    description: "Συνεργαστείτε με έμπειρους πολιτικούς μηχανικούς για:",
    services: [
      {
        title: "Στατικές Μελέτες",
        description: "Επαγγελματική εμπειρία στον σχεδιασμό και την ανάλυση κατασκευών.",
        icon: <Wrench className="h-5 w-5 text-muted-foreground mb-2" />
      },
      {
        title: "Νομιμοποιήσεις",
        description: "Διαχείριση τακτοποίησεων αυθαιρέτων και έκδοση ταυτότητας κτηρίου.",
        icon: <Home className="h-5 w-5 text-muted-foreground mb-2" />
      },
      {
        title: "Ενεργειακή Πιστοποίηση",
        description: "Έκδοση ενεργειακών πιστοποιητικών και προτάσεις βελτίωσης.",
        icon: <Zap className="h-5 w-5 text-muted-foreground mb-2" />
      },
      {
        title: "Άδειες & Επιβλέψες",
        description: "Διαχείριση αδειών δόμησης και επίβλεψη κατασκευαστικών έργων.",
        icon: <Shield className="h-5 w-5 text-muted-foreground mb-2" />
      },
      {
        title: "Ανακαινίσεις",
        description: "Μελέτη και επίβλεψη ανακαινίσεων κατοικιών και επαγγελματικών χώρων.",
        icon: <CableCar className="h-5 w-5 text-muted-foreground mb-2" />
      },
      {
        title: "Τεχνικός Έλεγχος",
        description: "Επιθεώρηση κτιρίων και τεχνικοί έλεγχοι ακινήτων.",
        icon: <Camera className="h-5 w-5 text-muted-foreground mb-2" />
      }
    ]
  }
];

export default function ProjectTypes() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-0">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
              Πολιτικοί Μηχανικοί
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground tracking-tighter font-semibold">
              Συνεργαστείτε με έμπειρους πολιτικούς μηχανικούς για:
            </p>
            <Button className="text-lg font-semibold text-blue-500 tracking-tighter pl-0 flex items-center gap-2 mx-auto md:mx-0" variant="link">
              <Link href="/project/new" className="flex items-center gap-2">
                Ξεκινήστε τώρα
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[300px] md:w-[500px] h-[200px]">
              <Image
                src="/engineering-diagram.png"
                alt="Engineering Diagram"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {projectTypes.map((type, index) => (
            <div key={index} className=" rounded-2xl p-0">
              <div className="flex flex-col md:flex-row gap-8"> 
                <div className="">
                  <div className="grid md:grid-cols-3 gap-6">
                    {type.services.map((service, idx) => (
                      <div key={idx} className="p-12 rounded-xl bg-slate-50">
                        {service.icon}
                        <h4 className="text-lg font-semibold mb-1">{service.title}</h4>
                        <p className="text-muted-foreground font-semibold tracking-tight">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      
    </section>
  );
} 