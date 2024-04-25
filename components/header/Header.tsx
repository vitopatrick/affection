import { links } from "@/lib/links";
import Link from "next/link";
import React from "react";
import MobileNav from "../mobile-nav/MobileNav";

export default function Header() {
  return (
    <header>
      {/* container */}
      <div className="w-11/12 mx-auto py-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img alt="logo" src="/logo.png" className="lg:w-[10%] w-[12%]" />
          <p className="text-2xl uppercase tracking-wider hidden lg:block">
            Affection Arcade
          </p>
        </Link>
        <div className="space-x-5 hidden lg:block">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className="uppercase text-sm hover:border-b-4 hover:border-blue-700 transition-all ease-in-out"
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
