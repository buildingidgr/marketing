import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EngineerCTA() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 items-start gap-8 md:gap-24">
          {/* Left side - Title and Description */}
          <div className="col-span-12 md:col-span-4 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Είσαι μηχανικός;
            </h2>
            <p className="text-lg md:text-xl font-semibold text-muted-foreground tracking-tighter mb-4">
              Εντάξου στο δίκτυο της MechLabs
            </p>
            <Button className="text-lg font-semibold text-blue-500 tracking-tighter pl-0 flex items-center gap-2 mx-auto md:mx-0" variant="link">
              <Link href="/project/new" className="flex items-center gap-2">
                Εγγραφή τώρα
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right side - Grid of features */}
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {/* New Projects */}
              <div className="bg-white text-center md:text-left">
                <div className="relative w-20 h-20 mb-2 mx-auto md:mx-0">
                  <Image 
                    src="/new-projects.svg"
                    alt="Νέα Έργα Καθημερινά"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1">Νέα έργα καθημερινά</h2>
                <p className="text-muted-foreground font-semibold tracking-tighter">
                  Αποκτήστε πρόσβαση σε νέα έργα και ευκαιρίες στην περιοχή σας.
                </p>
              </div>

              {/* Professional Development */}
              <div className="bg-white text-center md:text-left">
                <div className="relative w-20 h-20 mb-2 mx-auto md:mx-0">
                  <Image 
                    src="/professional-development.svg"
                    alt="Επαγγελματική Ανάπτυξη"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1">Επαγγελματική ανάπτυξη</h2>
                <p className="text-muted-foreground font-semibold tracking-tighter">
                  Διευρύνετε το πελατολόγιό σας και την επαγγελματική φήμη.
                </p>
              </div>

              {/* Support */}
              <div className="bg-white text-center md:text-left">
                <div className="relative w-20 h-20 mb-2 mx-auto md:mx-0">
                  <Image 
                    src="/support.svg"
                    alt="Υποστήριξη 24/7"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1">Υποστήριξη 24/7</h2>
                <p className="text-muted-foreground font-semibold tracking-tighter">
                  Πλήρης υποστήριξη από την ομάδα μας για οποιοδήποτε θέμα.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-12 md:mt-8 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/engineer-cta.png"
            alt="Συνεργασία μηχανικών"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
} 