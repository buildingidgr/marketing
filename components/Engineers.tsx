"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Wrench, Home, Zap, Shield, CableCar, Camera, Ruler, Palette, Lightbulb, Trees, Leaf, Wind, Droplet, Bell, Sun, Network, Cable } from "lucide-react";
const engineerTypes = [
  {
    id: "civil",
    title: "Πολιτικοί Μηχανικοί",
    description: "Συνεργαστείτε με έμπειρους πολιτικούς μηχανικούς για:",
    image: "/engineering-diagram.png",
    services: [
        {
            title: "Στατικές Μελέτες",
            description: "Επαγγελματική εμπειρία στον σχεδιασμό και την ανάλυση κατασκευών.",
            icon: <Wrench className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Νομιμοποιήσεις",
            description: "Διαχείριση τακτοποίησεων αυθαιρέτων και έκδοση ταυτότητας κτηρίου.",
            icon: <Home className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Ενεργειακή Πιστοποίηση",
            description: "Έκδοση ενεργειακών πιστοποιητικών και προτάσεις βελτίωσης.",
            icon: <Zap className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Άδειες & Επιβλέψες",
            description: "Διαχείριση αδειών δόμησης και επίβλεψη κατασκευαστικών έργων.",
            icon: <Shield className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Ανακαινίσεις",
            description: "Μελέτη και επίβλεψη ανακαινίσεων κατοικιών και επαγγελματικών χώρων.",
            icon: <CableCar className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Τεχνικός Έλεγχος",
            description: "Επιθεώρηση κτιρίων και τεχνικοί έλεγχοι ακινήτων.",
            icon: <Camera className="h-5 w-5 text-blue-500 mb-2" />
          }
    ],
  },
  {
    id: "architect",
    title: "Αρχιτέκτονες",
    description: "Σχεδιάστε το χώρο σας με επαγγελματίες αρχιτέκτονες για:",
    image: "/architect-diagram.png",
    services: [
        {
            title: "Αρχιτεκτονικές Μελέτες",
            description: "Ολοκληρωμένος σχεδιασμός κτιρίων και χώρων.",
            icon: <Ruler className="h-5 w-5 text-muted-foreground mb-2" />
          },
          {
            title: "Εσωτερικοί Χώροι",
            description: "Σχεδιασμός και διακόσμηση εσωτερικών χώρων.",
            icon: <Palette className="h-5 w-5 text-muted-foreground mb-2" />
          },
          {
            title: "Οπτική Επικοινωνία",
            description: "Φωτορεαλιστικές απεικονίσεις και τρισδιάστατα μοντέλα.",
            icon: <Camera className="h-5 w-5 text-muted-foreground mb-2" />
          },
          {
            title: "Μελέτες Φωτισμού",
            description: "Σχεδιασμός φωτισμού για εσωτερικούς και εξωτερικούς χώρους.",
            icon: <Lightbulb className="h-5 w-5 text-muted-foreground mb-2" />
          },
          {
            title: "Σχεδιασμός Κήπων",
            description: "Αρχ��τεκτονική τοπίου και διαμόρφωση εξωτερικών χώρων.",
            icon: <Trees className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Βιοκλιματικός Σχεδιασμός",
            description: "Οικολογικός σχεδιασμός με έμφαση στην ενεργειακή απόδοση.",
            icon: <Leaf className="h-5 w-5 text-blue-500 mb-2" />
          }
    ],
  },
  {
    id: "mechanical",
    title: "Μηχανολόγοι Μηχανικοί",
    description: "Εξειδικευμένοι επαγγελματίες για:",
    image: "/mechanic-diagram.png",
    services: [
        {
            title: "Μηχανολογικές Εγκαταστάσεις",
            description: "Σχεδιασμός και μελέτες Η/Μ εγκαταστάσεων.",
            icon: <Wrench className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Συστήματα Κλιματισμού",
            description: "Μελέτες θέρμανσης-ψύξ��ς και εξαερισμού.",
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
    ],
  },
  {
    id: "electrical",
    title: "Ηλεκτρολόγοι Μηχανικοί",
    description: "Εξειδικευμένες υπηρεσίες για:",
    image: "/electrical-diagram.png",
    services: [
        {
            title: "Ηλεκτρολογικές Μελέτες",
            description: "Σχεδιασμός ηλεκτρολογικών εγκαταστάσεων.",
            icon: <Cable className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Έξυπ��α Συστήματα",
            description: "Αυτοματισμοί και συστήματα ασφαλείας.",
            icon: <Home className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Τηλεπικοινωνίες",
            description: "Δίκτυα και συστήματα επικοινωνιών.",
            icon: <Bell className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Φωτοβολταϊκά",
            description: "Μελέτη και εγκατάσταση φωτοβολταϊκών συστημάτων.",
            icon: <Sun className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Συστήματα Παρακολούθησης",
            description: "Εγκατάσταση καμερών και συστημάτων επιτήρησης.",
            icon: <Camera className="h-5 w-5 text-blue-500 mb-2" />
          },
          {
            title: "Δομημένη Καλωδίωση",
            description: "Σχεδιασμός και εγκατάσταση δικτύων υπολογιστών.",
            icon: <Network className="h-5 w-5 text-blue-500 mb-2" />
          }
    ],
  },
];

export default function Engineers() {
  return (
    <section className="py-12" id="engineers">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="civil" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {engineerTypes.map((type) => (
              <TabsTrigger
                key={type.id}
                value={type.id}
                className="text-sm md:text-base font-semibold"
              >
                {type.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {engineerTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <div className="flex flex-col md:flex-row items-center md:items-end gap-0">
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
                    {type.title}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground tracking-tighter font-semibold">
                    {type.description}
                  </p>
                  <Button className="text-lg font-semibold text-blue-500 tracking-tighter pl-0 flex items-center gap-2 mx-auto md:mx-0 mt-4" variant="link">
                    <Link href="/project/new" className="flex items-center gap-2">
                      Ξεκινήστε τώρα
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="w-full md:w-1/2 flex items-end justify-center md:justify-end">
                  <div className="relative w-[300px] md:w-[500px] h-[200px]">
                    <Image
                      src={type.image}
                      alt={`${type.title} Diagram`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-0">
                {type.services.map((service, idx) => (
                  <div key={idx} className="p-12 rounded-xl bg-slate-50">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-lg font-semibold mb-1">{service.title}</h4>
                    <p className="text-muted-foreground font-semibold tracking-tight">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
} 