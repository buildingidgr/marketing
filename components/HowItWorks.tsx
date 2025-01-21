"use client";

import Image from "next/image";

const steps = [
  {
    image: "/step1.svg",
    title: "Υποβολή του έργου",
    description: "Συμπληρώστε τη φόρμα με τις λεπτομέρειες και τις απαιτήσεις του έργου σας",
  },
  {
    image: "/step2.svg", 
    title: "Εύρεση Μηχανικού",
    description: "Βρίσκουμε τον κατάλληλο μηχανικό που ταιριάζει με τις ανάγκες του έργου σας",
  },
  {
    image: "/step3.svg",
    title: "Επικοινωνία",
    description: "Ο μηχανικός Θα επικοινωνήσει μαζί σας, για όλες τις λεπτομέρειες μιας πιθανής συνεργασίας",
  },
  {
    image: "/step4.svg",
    title: "Υλοποίηση",
    description: "Ξεκινήστε τώρα χωρίς ρίσκο - δεν έχετε καμία οικονομική υποχρέωση.",
  }
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-center md:text-left">
            Πώς λειτουργεί
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground tracking-tighter font-semibold mb-12 md:mb-24 text-center md:text-left">
            Περιγράψτε το έργο σας, σας συνδέουμε με τον κατάλληλο μηχανικό.
            <span className="hidden md:inline"><br /></span>
            <span className="block mt-2">Πληρώνετε μόνο αν, και ό,τι συμφωνήσετε με τον επαγγελματία</span>
            <span className="block mt-2">Η Mechlabs είναι μία δωρεάν πλατφόρμα διασύνδεσης.</span>
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="relative w-24 md:w-32 h-24 md:h-32 mb-4">
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl tracking-tighter font-semibold mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground font-semibold tracking-tighter max-w-[300px] md:max-w-none">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 