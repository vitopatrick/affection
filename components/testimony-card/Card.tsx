import React from "react";

export default function Card({ testimony }: any) {
  return (
    <div className="text-center bg-stone-900 p-4 rounded-t-lg space-y-6 border-t-4 border-red-600">
      <p className="leading-relaxed">{testimony.testimony}</p>
      <div>
        <p>{testimony.name}</p>
        <p className="text-neutral-400">{testimony.location}</p>
      </div>
    </div>
  );
}
