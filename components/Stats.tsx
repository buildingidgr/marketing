import { Star } from "lucide-react";

const Stats = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Engineers */}
          <div className="space-y-2">
            <div className="text-4xl font-bold">500+</div>
            <div className="text-sm font-medium opacity-90">Πιστοποιημένοι Μηχανικοί</div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <div className="text-4xl font-bold">2.5K+</div>
            <div className="text-sm font-medium opacity-90">Ολοκληρωμένα Έργα</div>
          </div>

          {/* Rating */}
          <div className="space-y-2">
            <div className="text-4xl font-bold flex items-center justify-center gap-2">
              4.9
              <Star className="h-6 w-6 fill-primary-foreground" />
            </div>
            <div className="text-sm font-medium opacity-90">Μέση Αξιολόγηση</div>
          </div>

          {/* Cities */}
          <div className="space-y-2">
            <div className="text-4xl font-bold">42</div>
            <div className="text-sm font-medium opacity-90">Πόλεις στην Ελλάδα</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 