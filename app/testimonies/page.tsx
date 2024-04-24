import Banner from "@/components/banner/Banner";
import Card from "@/components/testimony-card/Card";
import { testimonies } from "@/lib/testimonies";
import React from "react";

export default function TestimonyPage() {
  return (
    <div>
      <Banner
        title="Testimonies"
        img="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="w-11/12 mx-auto p-3 grid grid-cols-1 lg:grid-cols-3 gap-4 my-8">
        {testimonies.map((testimony, index) => (
          <Card testimony={testimony} key={index} />
        ))}
      </div>
    </div>
  );
}
