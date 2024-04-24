import { links } from "@/lib/links";
import Link from "next/link";
import React from "react";
import MobileNav from "../mobile-nav/MobileNav";

export default function Header() {
  return (
    <header>
      {/* container */}
      <div className="w-11/12 mx-auto py-8 flex justify-between items-center">
        <Link href="/">Affection Arcade</Link>
        <div className="space-x-5 hidden lg:block">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className="uppercase text-sm hover:border-b-4 hover:border-red-700 transition-all ease-in-out"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
