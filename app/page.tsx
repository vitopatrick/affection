"use client";

import { Filter, QrCode, ThumbsUp, Users } from "lucide-react";
import Link from "next/link";
// import { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

const superpowers = [
  {
    id: 1,
    logo: <ThumbsUp size={100} strokeWidth={0.8} color="#2563eb" />,
    title: "Simple to use",
    about: "Simple steps to follow to have an affection arcade connection",
  },

  {
    id: 2,
    logo: <QrCode size={100} strokeWidth={2} color="#2563eb" />,
    title: "Smart Matching",
    about: "Create Connection with users that are like you",
  },
  {
    id: 3,
    logo: <Filter size={100} strokeWidth={1} color="#2563eb" />,
    title: "Filter Very Fast",
    about: "Don't Waste your time!,Find only what you are interested in",
  },
  {
    id: 4,
    logo: <Users size={100} strokeWidth={1.5} color="#2563eb" />,
    title: "Cool Community",
    about: "Affection Arcade is filled with cool members",
  },
];

const extra = [
  {
    icon: "https://www.givitation.com/img/icon-trophy-1.85e5cf1f.svg",
    title: "Best Site for Luxury Connecting",
  },
  {
    icon: "https://www.givitation.com/img/icon-hearts-1.8c877e60.svg",
    title: "Desires That Fit Your Lifestyle",
  },
  {
    icon: "https://www.givitation.com/img/icon-globe-1.68b90b88.svg",
    title: "15 plus years in over 60 countries",
  },
  {
    icon: "https://www.givitation.com/img/icon-lock-1.e84f7ef0.svg",
    title: "Secure & Private",
  },
];

const images = ["/bg-1.png", "/bg-2.jpeg", "/bg-3.webp", "/bg-1.png"];

export default function Home() {
  // const [imageNum, setImageNum] = useState(0);

  // useMemo(() => {
  //   const interval = setInterval(() => {
  //     if (imageNum == images.length) {
  //       setImageNum(0);
  //     } else {
  //       setImageNum((prev) => prev + 1);
  //     }
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [imageNum]);

  return (
    <div className="w-screen">
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url('/bg-1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="h-[50vh] w-screen"
      >
        <div className="flex flex-col items-center justify-center bg-black/50 h-full">
          <div className="text-center space-y-4">
            <h4 className="text-3xl lg:text-5xl lg:w-3/4 mx-auto">
              Find a Sugar Baby or Sugar Daddy/Mama in Your Area Today!
            </h4>
            <p>
              Are you an Elegant man/woman seeking a reliable connections that
              is mutually beneficial?
            </p>
            <Link
              href="/request"
              className="inline-block bg-blue-500 text-white p-4 rounded-md w-fit mt-5"
            >
              Join Anonymously & Discretely
            </Link>
          </div>
        </div>
      </div>
      {/* connect */}
      <div className="w-11/12 p-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <img
            src="https://www.givitation.com/img/yellow-dress.b60d9b8b.png"
            alt="image"
          />
        </div>
        <div className="text-center space-y-3">
          <h4 className="text-2xl text-blue-600">Start Connecting</h4>
          <p>
            Affection Arcade is the luxury Connecting site for successful
            mommies and daddy who just want to have fun discreetly.
          </p>
          <p>
            “Elevating your experience” is the foundation of Affection Arcade,
            where you will discover the connections, passions, and expectations
            you desire…every step of the way.
          </p>
          <p>
            Affection Arcade helps members choose connections that uniquely
            align with their personal passions and dreams. With such a diverse
            range of people and passions, we provide a safe environment to
            explore, discover, and evolve what desire truly means to you.
          </p>
          <div className="grid grid-cols-4 gap-3 ">
            {extra.map((e) => (
              <div key={e.title} className="space-y-2">
                <div>
                  <img src={e.icon} alt={e.title} className="w-[70%] mx-auto" />
                </div>
                <h4 className="text-sm lg:text-base">{e.title}</h4>
              </div>
            ))}
          </div>
          <Link
            href="/request"
            className="inline-block bg-blue-500 text-white p-4 rounded-md w-fit mt-5 text-center"
          >
            Send A Request
          </Link>
        </div>
      </div>
      {/* Powers */}
      <div className="my-8">
        <div className="text-center space-y-3 text-center">
          <h4 className="text-2xl lg:text-3xl text-blue-600">
            Affection Arcade super powers
          </h4>
          <p>
            Affection Arcade is like a breath of fresh Air. Secure and Discreet
            with ready to use features we are sure you will love.
          </p>
        </div>
        <div className="w-[90%] mx-auto p-3 grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
          {superpowers.map((power) => (
            <SuperCardPowers
              key={power.id}
              title={power.title}
              about={power.about}
              logo={power.logo}
            />
          ))}
        </div>
      </div>
      {/* how it works */}
      <div className="w-[90%] mx-auto space-y-4">
        <h4 className="text-center text-2xl lg:text-3xl">How Does It Work</h4>
        <HowItWorksCard
          imgUrl="https://www.givitation.com/img/home-dating-search.af8a3dd9.png"
          title="Search"
          about="The simple steps to follow to have a great experience using Affection Arcade. All you have to do is follow your gut and your heart!"
        />
        <HowItWorksCard
          imgUrl="https://www.givitation.com/img/home-dating-match.ec5a2584.png"
          title="Match"
          about="Ready to use and easy to setup matching system. You get to choose users profile fields and percentage that impact the matching result!"
          order={2}
        />
        <HowItWorksCard
          imgUrl="https://www.givitation.com/img/home-dating-find-out.f039ac3f.png"
          title="Find Out"
          about="Users get to create a beautiful connection, get matched to your desiblue Sugar lover instantly."
        />
      </div>
    </div>
  );
}

// How it works card
const HowItWorksCard = ({ imgUrl, title, about, order }: any) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className={order == 2 ? "lg:order-last" : ""}>
        <img src={imgUrl} alt={title} />
      </div>
      <div className=" lg:flex flex-col justify-center">
        <h4 className="text-xl lg:text-2xl text-blue-600">{title}</h4>
        <p>{about}</p>
      </div>
    </div>
  );
};

// super power card
const SuperCardPowers = ({ logo, title, about }: any) => {
  return (
    <div className="flex items-center justify-center flex-col border rounded-lg border-neutral-700 shadow-sm p-4">
      <div>{logo}</div>
      <div className="text-center space-y-2 mt-3">
        <h4 className="text-2xl ">{title}</h4>
        <p>{about}</p>
      </div>
    </div>
  );
};
