"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectTypes() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-0">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
              Πολιτικοί Μηχανικοί
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground tracking-tighter font-semibold">
              Συνεργαστείτε με έμπειρους πολιτικούς μηχανικούς για:
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
                src="/engineering-diagram.png"
                alt="Engineering Diagram"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 