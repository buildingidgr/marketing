import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhyMechLabs() {
  return (
    <section className="py-24 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 items-start gap-8 md:gap-24">
          {/* Left side */}
          <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
              Γιατί να επιλέξετε την MechLabs
            </h2>
            <p className="text-lg md:text-xl font-semibold text-muted-foreground tracking-tighter mb-4">
              Η πλατφόρμα που εμπιστεύονται χιλιάδες πελάτες και μηχανικοί
            </p>
            <Button className="text-lg font-semibold text-blue-500 tracking-tighter pl-0 flex items-center gap-2" variant="link">
              <Link href="/project/new" className="flex items-center gap-2">
                Ξεκινήστε το έργο σας
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right side */}
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {/* Verified Engineers */}
              <div className="bg-white">
                <div className="relative w-20 h-20 mb-2">
                  <Image 
                    src="/verified-engineers.svg"
                    alt="Πιστοποιημένοι Μηχανικοί"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1">Πιστοποιημένοι Μηχανικοί</h2>
                <p className="text-muted-foreground font-semibold">
                  Πιστοποιημένοι μηχανικοί με αποδεδειγμένη εμπειρία.
                </p>
              </div>

              {/* Large Network */}
              <div className="bg-white">
                <div className="relative w-20 h-20 mb-2">
                  <Image 
                    src="/network.svg"
                    alt="Εκτεταμένο Δίκτυο"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1">Eκτεταμένο Δίκτυο</h2>
                <p className="text-muted-foreground font-semibold">
                  Πανελλαδικό δίκτυο μηχανικών στη διάθεσή σας.
                </p>
              </div>

              {/* Quality Guarantee */}
              <div className="bg-white">
                <div className="relative w-20 h-20 mb-2">
                  <Image 
                    src="/quality.svg"
                    alt="Εγγύηση Ποιότητας"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1">Εγγύηση Ποιότητας</h2>
                <p className="text-muted-foreground font-semibold">
                Η ποιότητα και η ικανοποίησή σας είναι δέσμευσή μας.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-8 relative h-[300px] md:h-[600px] rounded-xl overflow-hidden">
          <Image
            src="/collaboration.png"
            alt="Συνεργασία μηχανικών"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
} 