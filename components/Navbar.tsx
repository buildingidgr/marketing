"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  {
    title: "Πώς λειτουργεί",
    href: "#how-it-works",
  },
  {
    title: "Γιατί MechLabs",
    href: "#why-mechlabs",
  },
  {
    title: "Μηχανικοί",
    href: "#engineers",
    subItems: [
      {
        title: "Πολιτικοί Μηχανικοί",
        href: "#project-types",
      },
      {
        title: "Αρχιτέκτονες",
        href: "#architects",
      },
      {
        title: "Μηχανολόγοι Μηχανικοί",
        href: "#mechanics",
      },
      {
        title: "Ηλεκτρολόγοι Μηχανικοί",
        href: "#electicts",
      },
    ],
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 border-b bg-white/95 backdrop-blur-sm relative z-50">
      <div className="flex items-center justify-between h-16 px-4 container mx-auto">
        {/* Logo */}
        <div className="flex">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="MechLabs Logo"
              width={100}
              height={12}
              className="h-7 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.subItems ? (
                <>
                  <button className="text-sm font-semibold transition-colors hover:text-primary flex items-center gap-1">
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold transition-colors hover:text-primary"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 border-t">
          {menuItems.map((item, index) => (
            <div key={index} className="py-2">
              {item.subItems ? (
                <div>
                  <div className="text-sm font-semibold mb-2">{item.title}</div>
                  <div className="pl-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block py-2 text-sm text-muted-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 