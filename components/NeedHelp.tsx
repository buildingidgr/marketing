import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const NeedHelp = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Χρειάζεστε Βοήθεια;
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Η ομάδα υποστήριξης της MechLabs είναι εδώ για να σας βοηθήσει με οποιαδήποτε απορία
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Phone className="h-5 w-5" />
              <span>+30 210 1234567</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <span>support@mechlabs.gr</span>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border">
            <h3 className="font-semibold text-xl mb-4">
              Στείλτε μας το Ερώτημά σας
            </h3>
            <p className="text-muted-foreground mb-6">
              Συμπληρώστε τη φόρμα επικοινωνίας και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Επικοινωνήστε Μαζί μας
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp; 