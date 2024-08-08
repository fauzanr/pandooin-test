import Link from "next/link";
import cx from "classnames";

const Navbar = () => {
  const navs = ["Homepage", "Customize Your Trip", "Destination", "Article"];
  return (
    <div className="flex">
      <div>LOGO</div>
      <div>
        {navs.map((nav) => (
          <Link href="#">{nav}</Link>
        ))}
      </div>
      <button>Need Assistance?</button>
    </div>
  );
};

export default function Home() {
  const year = new Date().getFullYear();
  const experiences = [
    {
      Icon: <>Icon</>,
      title: "PERSONALIZED ITINERARIES",
      text: "Our premium travel services offer tailor-made itineraries crafted to suit you unique preferences and desires.",
    },
    {
      Icon: <>Icon</>,
      title: "EXCLUSIVE EXPERIENCES",
      text: "From private charters to behind-the-scenes tours, we offer access to unique opportunities that area designed to eleveate your trip to the next level.",
    },
    {
      Icon: <>Icon</>,
      title: "BEST FACILITIES",
      text: "Experience the epitome of with our premium facility, designed to provicde an unparalleled level of comfort and indulgence.",
    },
  ];

  return (
    <>
      <Navbar />
      {/*  */}
      <section>
        <h1>Premium Travel</h1>
        <p>Beyond Expectation</p>
        <p>
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <button>Take Me There</button>
      </section>
      {/*  */}
      <section>
        <h1>Beyond Premium</h1>
        <p>ELEVATE YOUR EXPERIENCE</p>
        <div className="flex">
          {experiences.map((exp) => (
            <div key={exp.title} className="flex flex-1 flex-col items-center">
              <div className="bg-orange-200 w-32 aspect-square">{exp.Icon}</div>
              <h2>{exp.title}</h2>
              <p>{exp.text}</p>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="flex">
          <div className="flex-1">SVG</div>
          <div className="flex-1">
            <h1>Discover Tailored Experiences</h1>
            <p>
              Create your own journey, personalized to suit your preferences and
              interests, ensuring a once-in-a-lifetime adventure awaits.
            </p>
            <button>Customize Your Trip</button>
          </div>
        </div>
        {/*  */}
        <hr />
        {/*  */}
        <div className="flex">
          <h1>Destinations</h1>
          <button>EXPLORE MORE</button>
        </div>
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className={cx([
              "flex gap-6",
              { "flex-row-reverse": idx % 2 === 1 },
            ])}
          >
            <div className="flex-1">
              <span>7 DAYS 6 NIGHTS</span>
              <h1>Paradise Gateway: Labuan Bajo</h1>
              <span>Organized by Pandooin</span>
              <p>
                Labuan Bajo is a tropical paradise nestled in the westernmost
                part of Flores Island, Indonesia. With its stunning landscapes,
                crystal-clear waters, and vibrant marine life, it's a gateway to
                explore the mesmerizing Komodo National Park.
              </p>
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span>Start from</span>
                  <span>IDR 9,999,999</span>
                  <span>IDR 7,500,000</span>
                </div>
                <button>See Details</button>
              </div>
            </div>
            <div className="flex-1 bg-blue-200">*Photo*</div>
          </div>
        ))}
        <div className="flex gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="flex flex-col flex-1">
              <div className="bg-blue-200 aspect-square">*image*</div>
              <span>7 DAYS 6 NIGHTS</span>
              <h2>Paradise Gateway: Labuan Bajo</h2>
              <span>Organized by Pandooin</span>
              <div>
                <span>Start from</span>
                <span>IDR 5,200,000</span>
              </div>
              <button>See Details</button>
            </div>
          ))}
        </div>
        <button>EXPLORE MORE</button>
      </section>
      {/*  */}
      <section>
        <h1>Luxury Footages</h1>
        <div className="flex gap-6">
          <div className="flex-1 aspect-square bg-blue-200"></div>
          <div className="flex-1 aspect-square bg-blue-200"></div>
          <div className="flex-1 aspect-square bg-blue-200"></div>
        </div>
        <hr className="my-3" />
        <div className="flex gap-6">
          <div className="flex-1 aspect-square bg-blue-200"></div>
          <div className="flex-1 aspect-square bg-blue-200"></div>
          <div className="flex-1 aspect-square bg-blue-200"></div>
        </div>
      </section>
      {/*  */}
      <section>
        <div className="flex justify-between">
          <div>*logo*</div>
          <div>
            <p>Want to see other destinations? Check us out at our website</p>
            <Link href="#">Panddoin.com</Link>
          </div>
        </div>
        <h1>Articles</h1>
        <p>Our curated writings, offering something for every reader.</p>
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className={cx([
                "bg-blue-200 aspect-[4/3]",
                {
                  "grid-cols-subgrid row-span-2 col-span-2 h-full": idx === 0,
                },
              ])}
            >
              *image*
            </div>
          ))}
        </div>
      </section>
      {/*  */}
      <section>
        <div className="flex justify-between">
          <span>&copy; {year} Zamrood by PT Teknologi Pandu Wisata</span>
          <div className="flex gap-4">
            <span>Icon</span>
            <span>Icon</span>
            <span>Icon</span>
          </div>
        </div>
      </section>
    </>
  );
}
