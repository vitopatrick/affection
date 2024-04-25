import Banner from "@/components/banner/Banner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";
import React from "react";

export default function ContactUs() {
  return (
    <div>
      <Banner
        title="Contact Us"
        img="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <div className="w-11/12 mx-auto bg-stone-700 p-3 grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-lg my-8">
        <div className="flex flex-col justify-between px-4 py-4">
          <h4 className="text-xl text-blue-600">
            CONTACT <br /> US
          </h4>
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
        <div className="space-y-8">
          <Input
            className="placeholder:text-white text-neutral-400 outline-none bg-transparent uppercase tracking-wider border-b border-neutral-300 rounded-none"
            placeholder="Name"
          />
          <Input
            className="placeholder:text-white text-neutral-400 outline-none bg-transparent uppercase tracking-wider border-b border-neutral-300 rounded-none"
            placeholder="Email"
          />
          <Input
            className="placeholder:text-white text-neutral-400 outline-none bg-transparent uppercase tracking-wider border-b border-neutral-300 rounded-none"
            placeholder="contact no."
          />
          <Input
            className="placeholder:text-white text-neutral-400 outline-none bg-transparent uppercase tracking-wider border-b border-neutral-300 rounded-none"
            placeholder="message"
          />
          <Button
            variant={"default"}
            className="uppercase text-blue-600 bg-transparent hover:bg-transparent"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
