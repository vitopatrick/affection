import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { links } from "@/lib/links";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <>
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="w-[200px] pt-8 bg-neutral-800 border-none"
        >
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className="text-neutral-200 hover:text-red-700 transition-all ease-in-out block uppercase my-4 "
            >
              {link.title}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </>
  );
}
