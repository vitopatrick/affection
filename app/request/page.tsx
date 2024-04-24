import Banner from "@/components/banner/Banner";
import RequestForm from "@/components/request-form/RequestForm";
import React from "react";

export default function RequestPage() {
  return (
    <div>
      {/* banner */}
      <Banner
        title="Request"
        img="https://images.unsplash.com/photo-1586957960362-65815d739527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
      />
      {/* form */}
      <RequestForm />
    </div>
  );
}
