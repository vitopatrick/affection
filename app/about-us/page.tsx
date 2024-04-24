import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div>
      {/* banner */}
      <div
        style={{
          background:
            "url('https://www.givitation.com/img/hero_safety_img.9e80be7f.png')",
        }}
        className="h-80"
      >
        <div className="flex items-center justify-center  h-full">
          <h4 className="text-2xl lg:text-4xl">About Us</h4>
        </div>
      </div>
      {/* community */}
      <div>
        <h4 className="p-4 text-center lg:text-3xl text-2xl">
          Affection Arcade Community At A Glance
        </h4>
        <div className="w-11/12 mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Community
            title="5+ Million"
            about="Big Community Of Members World Wide"
          />

          <Community
            title="60+"
            about="Countries Where Members Use Givitation"
          />
          <Community
            title="1+ Million"
            about="Messages Sent Daily (on average)"
          />
          <Community
            title="1,000+"
            about="Connections made Daily (on average)"
          />
        </div>
      </div>
      {/* about */}
      <HeroCard
        imgUrl="https://www.givitation.com/img/yellow-dress.b60d9b8b.png"
        title="About"
        p1="
Experience why Affection Arcade is the best site for Attractive and Elegant people. Start Connecting"
        p2="Affection Arcade is a site committed to creating connections between sugar daddies/mamas and more youthful sugar babies. sugar daddies/mamas can encounter new and energizing conceivable outcomes when they are connecting with youthful sugar babies"
        p3="The right partnership can have a profound impact on your personal growth, which is why Affection Arcade doesn’t want you to settle for anything less than your ideal."
        p4="Connect Responsibly! Must be 18 and Over."
      />
      {/* Getting Started */}
      <div className="w-11/12 mx-auto p-4  text-center space-y-6">
        <h4 className=" text-center lg:text-3xl text-2xl text-red-600">
          Getting Started on Affection Arcade
        </h4>
        <p>
          Find What You Want Everyone wants something different out of
          connections.
          <br /> Affection Arcade helps you find what you are looking for.
        </p>
        <p>
          Connect with the Sugar Mamas/Daddies Connect with well-established,
          exceptional <br /> individuals who know how to treat you.
        </p>
        <p>
          Live Life to Its Fullest Honest Connections <br />
          allow you to focus on what is important to you, without settling.
        </p>
        <Link
          href="/request"
          className="inline-block bg-red-500 text-white p-4 rounded-md w-fit"
        >
          Send A Request
        </Link>
      </div>
      {/* evolution */}
      <HeroCard
        imgUrl="https://www.givitation.com/img/paris-drawn-to-life.4ca0282f.png"
        title="Affection Arcade Evolution"
        p1="Authenticity and open communication have always been the core principles guiding what Affection Arcade has to offer. Affection Arcade began as Cupid Arrangement, where established and attractive Sugar Daddies/Mamas could share their expectations for a Sugar baby upfront. Countless harmonious connections have been made since the website was created in 2012."
        p2="As the world and the concept of Sugar Babies continue to evolve, so does Affection Arcade. We are still committed to helping Sugar Daddies/Mamas find Sugar babies based on open communication, but we are much more than that. Affection Arcade is about identifying what drives us and how we can live our best lives with someone by our side."
        p3="Life is too short to settle. That is why we want our members to find Connections that align with their personal goals and dreams. These Connections begin with Affection Arcade."
      />
    </div>
  );
}

const HeroCard = ({ imgUrl, title, p1, p2, p3, p4 }: any) => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 place-items-start-center my-16">
      <img src={imgUrl} alt="oicture" />
      <div className="text-center space-y-4 p-4">
        <h4 className="text-2xl lg:text-3xl text-red-600">{title}</h4>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
        <Link
          href="/request"
          className="inline-block bg-red-500 text-white p-4 rounded-md w-fit"
        >
          Send A Request
        </Link>
      </div>
    </div>
  );
};

const Community = ({ title, about }: any) => {
  return (
    <div className="text-center space-y-2">
      <h4 className="text-2xl text-red-600">{title}</h4>
      <p>{about}</p>
    </div>
  );
};
