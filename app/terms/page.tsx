import { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου | MechLabs",
  description: "Πολιτική Απορρήτου και όροι χρήσης της πλατφόρμας MechLabs",
};

export default function Terms() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Όροι Χρήσης</h1>
        <div className="prose max-w-none">
          <p>Οι παρόντες όροι χρήσης (&ldquo;Όροι&rdquo;) διέπουν τη χρήση της πλατφόρμας MechLabs.</p>
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Συλλογή και Επεξεργασία Δεδομένων</h2>
              <h3 className="text-lg font-medium mb-2">1.1. Συλλέγουμε και επεξεργαζόμαστε τα ακόλουθα προσωπικά δεδομένα:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Στοιχεία ταυτότητας (ονοματεπώνυμο)</li>
                <li>Στοιχεία επικοινωνίας (email, τηλέφωνο)</li>
                <li>Διεύθυνση και τοποθεσία έργου</li>
                <li>Πληροφορίες σχετικά με τα έργα και τις απαιτήσεις σας</li>
                <li>Δεδομένα περιήγησης και χρήσης της πλατφόρμας</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Σκοπός και Νομική Βάση Επεξεργασίας</h2>
              <h3 className="text-lg font-medium mb-2">2.1. Επεξεργαζόμαστε τα δεδομένα σας για τους εξής σκοπούς:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Παροχή των υπηρεσιών της πλατφόρμας</li>
                <li>Διασύνδεση με κατάλληλους επαγγελματίες</li>
                <li>Επικοινωνία σχετικά με τα έργα σας</li>
                <li>Βελτίωση των υπηρεσιών μας</li>
                <li>Συμμόρφωση με νομικές υποχρεώσεις</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">2.2. Η επεξεργασία βασίζεται στις ακόλουθες νομικές βάσεις:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Εκτέλεση σύμβασης</li>
                <li>Έννομο συμφέρον</li>
                <li>Συγκατάθεση (όπου απαιτείται)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Προστασία και Ασφάλεια Δεδομένων</h2>
              <h3 className="text-lg font-medium mb-2">3.1. Εφαρμόζουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων σας:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Κρυπτογράφηση δεδομένων</li>
                <li>Ασφαλή συστήματα αποθήκευσης</li>
                <li>Περιορισμένη πρόσβαση προσωπικού</li>
                <li>Τακτικούς ελέγχους ασφαλείας</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">3.2. Συμμορφωνόμαστε πλήρως με τον GDPR και την ελληνική νομοθεσία περί προστασίας δεδομένων.</h3>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Δικαιώματα Χρηστών</h2>
              <h3 className="text-lg font-medium mb-2">4.1. Έχετε τα ακόλουθα δικαιώματα σχετικά με τα προσωπικά σας δεδομένα:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Δικαίωμα πρόσβασης στα δεδομένα σας</li>
                <li>Δικαίωμα διόρθωσης ανακριβών δεδομένων</li>
                <li>Δικαίωμα διαγραφής ("δικαίωμα στη λήθη")</li>
                <li>Δικαίωμα περιορισμού της επεξεργασίας</li>
                <li>Δικαίωμα φορητότητας των δεδομένων</li>
                <li>Δικαίωμα εναντίωσης στην επεξεργασία</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">4.2. Μπορείτε να ασκήσετε τα δικαιώματά σας επικοινωνώντας μαζί μας στο <a href="mailto:privacy@mechlabs.gr" className="text-primary hover:underline">privacy@mechlabs.gr</a></h3>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Διατήρηση και Διαγραφή Δεδομένων</h2>
              <h3 className="text-lg font-medium mb-2">5.1. Διατηρούμε τα προσωπικά σας δεδομένα για όσο χρονικό διάστημα είναι απαραίτητο για την εκπλήρωση των σκοπών επεξεργασίας.</h3>
              <h3 className="text-lg font-medium">5.2. Μετά την ολοκλήρωση του σκοπού επεξεργασίας, τα δεδομένα σας διαγράφονται με ασφαλή τρόπο.</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 