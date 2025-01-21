"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Πώς λειτουργεί η MechLabs;",
    answer: "Η MechLabs είναι μία πλατφόρμα διασύνδεσης πελατών με πιστοποιημένους μηχανικούς. Περιγράφετε το έργο σας, και εμείς σας συνδέουμε με τον κατάλληλο μηχανικό. Πληρώνετε μόνο αν, και ό,τι συμφωνήσετε με τον επαγγελματία."
  },
  {
    question: "Πόσο κοστίζει η υπηρεσία;",
    answer: "Η MechLabs είναι μία δωρεάν πλατφόρμα διασύνδεσης. Δεν υπάρχει κόστος για την εγγραφή ή τη χρήση της πλατφόρμας. Πληρώνετε μόνο για τις υπηρεσίες που συμφωνείτε με τον μηχανικό."
  },
  {
    question: "Πώς επιλέγετε τους μηχανικούς;",
    answer: "Όλοι οι μηχανικοί στο δίκτυό μας είναι πιστοποιημένοι επαγγελματίες με αποδεδειγμένη εμπειρία. Ελέγχουμε τα διαπιστευτήρια και την επαγγελματική τους εμπειρία πριν την ένταξή τους στην πλατφόρμα."
  },
  {
    question: "Τι είδους έργα μπορώ να αναθέσω;",
    answer: "Η πλατφόρμα καλύπτει όλο το φάσμα των μηχανολογικών, ηλεκτρολογικών, και κατασκευαστικών έργων. Από απλές μελέτες και πιστοποιήσεις μέχρι πλήρεις ανακαινίσεις και κατασκευαστικά έργα."
  },
  {
    question: "Παρέχετε εγγύηση για τις υπηρεσίες;",
    answer: "Η ποιότητα και η ικανοποίησή σας είναι δέσμευσή μας. Παρακολουθούμε κάθε έργο και διασφαλίζουμε την ομαλή συνεργασία μεταξύ πελατών και μηχανικών."
  }
];

export default function FAQ() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-center md:text-left">
            Συχνές Ερωτήσεις
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground tracking-tighter font-semibold mb-8 md:mb-12">
            Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με τη MechLabs
          </p>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-base md:text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 