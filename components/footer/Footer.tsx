import { links } from "@/lib/links";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* container */}
      <div className="w-11/12 mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-16">
        {/* about us  */}
        <div className="space-y-4 lg:col-span-2">
          <h4 className="text-xl font-medium">About Us</h4>
          <p>
            Affection Arcade is the largest luxury and secured connection site
            for the beautiful,wealthy and successful,with 15 plus years in over
            60 countries{" "}
          </p>
          <p>
            MEMBERS OF AFFECTION ARCADE ARE NOT SUBJECT TO MANDATORY BACKGROUND
            SCREENINGS BUT HAVE THE OPTION TO SUBMIT FOR A BACKGROUND CHECK
            AND/OR ID VERIFICATION.
          </p>
        </div>
        {/* links */}
        <div className="space-y-3">
          <h4 className="text-xl font-medium">Links</h4>
          <div className="gap-3 flex flex-col">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.title}
                className="inline-block hover:text-red-700 transition-all ease-in-out"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {/* stay connected */}
        <div className="space-y-4">
          <h4 className="text-xl font-medium">Stay Connected</h4>
          <div className="space-y-4">
            {/* location */}
            <div className="flex items-center gap-2">
              <MapPin />
              <p>PO Box 9123, Wilsonton 4350</p>
            </div>
            {/* email */}
            <div className="flex items-center gap-2">
              <Mail />
              <p>info@affectionarcade.com</p>
            </div>
            {/* number */}
            <div className="flex items-center gap-2">
              <Phone />
              <p> +61 4888 72153</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:text-center p-5">
        <p className="text-sm p-3">
          2023 Affection Arcade | All right Reserved
        </p>
      </div>
    </footer>
  );
}
