import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      {/* Mobile Image */}
      <div className="relative h-[60vh] md:hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/hero-engineer.png"
          alt="Επαγγελματίας μηχανικός στο χώρο εργασίας"
          fill
          className="object-cover"
          priority
        />
        {/* Mobile Content Overlay */}
        <div className="relative z-20 h-full flex items-end pb-8 px-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter text-white mb-4">
              Έργα που γίνονται πραγματικότητα
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Ανεβάστε το έργο σας στο MechLabs και θα βρούμε τον κατάλληλο μηχανικό για εσάς.
            </p>
            <Button size="lg" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/90" asChild>
              <Link href="/project/new">Ξεκινήστε το έργο σας</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Desktop Hero */}
      <div className="relative min-h-[85vh] hidden md:flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/hero-engineer.png"
            alt="Επαγγελματίας μηχανικός στο χώρο εργασίας"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
            Κάντε το έργο σας πραγματικότητα
            </h1>
            <p className="text-xl text-gray-200 mb-8">
            Βρείτε τον ιδανικό μηχανικό για το project σας μέσα από το δίκτυο επαγγελματιών του MechLabs. Απλά. Άμεσα. Δωρεάν.

            </p>
            <div className="flex gap-4">
              <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/90" asChild>
                <Link href="/project/new">Ξεκινήστε το έργο σας</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 