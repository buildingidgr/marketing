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
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProjectType {
  icon: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

const projectTypes: ProjectType[] = [
  {
    icon: "/mechanical.png",
    title: "Μηχανολόγοι Μηχανικοί",
    description: "Εξειδικευμένοι επαγγελματίες για:",
    services: [
      {
        title: "Μηχανολογικές Εγκαταστάσεις",
        description: "Σχεδιασμός και μελέτες Η/Μ εγκαταστάσεων.",
        icon: <Wrench className="h-5 w-5 text-blue-500 mb-2" />
      },
      {
        title: "Συστήματα Κλιματισμού",
        description: "Μελέτες θέρμανσης-ψύξης και εξαερισμού.",
        icon: <Wind className="h-5 w-5 text-blue-500 mb-2" />
      },
      {
        title: "Ενεργειακή Αναβάθμιση",
        description: "Φωτοβολταϊκά συστήματα και εγκαταστάσεις φυσικού αρίου.",
        icon: <Zap className="h-5 w-5 text-blue-500 mb-2" />
      },
      {
        title: "Πυρασφάλεια",
        description: "Μελέτες και εγκατάσταση συστημάτων πυροπροστασίας.",
        icon: <Shield className="h-5 w-5 text-blue-500 mb-2" />
      },
      {
        title: "Ανελκυστήρες",
        description: "Μελέτες και πιστοποιήσεις ανελκυστήρων.",
        icon: <CableCar className="h-5 w-5 text-blue-500 mb-2" />
      },
      {
        title: "Υδραυλικές Μελέτες",
        description: "Σχεδιασμός υδραυλικών εγκαταστάσεων και αποχέτευσης.",
        icon: <Droplet className="h-5 w-5 text-blue-500 mb-2" />
      }
    ]
  }
];

export default function Mechanics() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-0">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
              Μηχανολόγοι Μηχανικοί
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground tracking-tighter font-semibold">
              Εξειδικευμένοι επαγγελματίες για:
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
                src="/mechanic-diagram.png"
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

















