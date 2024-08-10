import Link from "next/link";
import cx from "classnames";
import Image from "next/image";
import {
  ArrowTR,
  Chevron,
  Exp1,
  Exp2,
  Exp3,
  NavMenu,
  Separator,
  SocialsEmail,
  SocialsFB,
  SocialsIG,
} from "@/components/svg";
import { ReactNode } from "react";

const Navbar = () => {
  const navs = ["Homepage", "Customize Your Trip", "Destination", "Article"];
  return (
    <div className="flex items-center justify-between fixed z-10 w-full bg-default-wh p-4">
      <div>
        <Image
          src="/images/Logo Zamrood-10 1.png"
          width={135}
          height={50}
          alt="Zamrood"
        />
      </div>
      <NavMenu />
      {/* <div>
        <div className="flex gap-4">
          {navs.map((nav) => (
            <Link href="#">{nav}</Link>
          ))}
        </div>
        <button>Need Assistance?</button>
      </div> */}
    </div>
  );
};

const LinkExplore = ({ children }: { children: ReactNode }) => (
  <Link href="#" className="flex items-center gap-2">
    <span className="border-2 border-dark rounded-full p-1">
      <Chevron />
    </span>
    <span className="font-bold text-dark mt-0.5">{children}</span>
  </Link>
);

export default function Home() {
  const year = new Date().getFullYear();
  const experiences = [
    {
      Icon: <Exp1 />,
      title: "PERSONALIZED ITINERARIES",
      text: "Our premium travel services offer tailor-made itineraries crafted to suit you unique preferences and desires.",
    },
    {
      Icon: <Exp2 />,
      title: "EXCLUSIVE EXPERIENCES",
      text: "From private charters to behind-the-scenes tours, we offer access to unique opportunities that area designed to eleveate your trip to the next level.",
    },
    {
      Icon: <Exp3 />,
      title: "BEST FACILITIES",
      text: "Experience the epitome of with our premium facility, designed to provicde an unparalleled level of comfort and indulgence.",
    },
  ];

  return (
    <div className="bg-default-wh">
      <Navbar />
      {/*  */}
      <section className="flex flex-col items-center justify-center pt-[82px] h-[674px] text-center text-default-wh bg-header-bg bg-cover bg-center px-4">
        <h1 className="font-the-signature text-[86px] text-tan leading-[0.3]">
          Premium Travel
        </h1>
        <p className="font-unbounded font-bold text-2xl">Beyond Expectation</p>
        <p>
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <button className="btn mt-6">Take Me There</button>
      </section>
      {/*  */}
      <section className="text-center px-4">
        <h1 className="font-the-signature text-aqua text-[54px] leading-[0.4] mt-10">
          Beyond Premium
        </h1>
        <p className="font-unbounded font-bold text-dark text-xl">
          ELEVATE YOUR EXPERIENCE
        </p>
        <div className="md:flex gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="flex flex-1 flex-col items-center mb-6"
            >
              <div>{exp.Icon}</div>
              <h2 className="text-aqua font-bold">{exp.title}</h2>
              <p>{exp.text}</p>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="md:flex my-14">
          <div className="flex-1">
            <div className="relative aspect-[329/302] max-h-48 mx-auto">
              <Image src="/images/Rectangle 729.png" fill alt="Experiences" />
            </div>
          </div>
          <div className="flex-1">
            <div className="my-4">
              <h1 className="font-unbounded text-dark font-bold text-xl">
                Discover Tailored Experiences
              </h1>
              <p className="text-[14px]">
                Create your own journey, personalized to suit your preferences
                and interests, ensuring a once-in-a-lifetime adventure awaits.
              </p>
            </div>
            <button className="btn btn-dark">Customize Your Trip</button>
          </div>
        </div>
      </section>
      {/*  */}
      <div className="flex">
        <Separator />
      </div>
      {/*  */}
      <section className="px-4">
        <h1 className="font-unbounded font-bold text-dark text-xl mb-2">
          Destinations
        </h1>
        <LinkExplore>EXPLORE MORE</LinkExplore>

        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className={cx([
              "md:flex gap-6 my-10",
              { "flex-row-reverse": idx % 2 === 1 },
            ])}
          >
            <div className="flex-1">
              <div className="flex-1 relative aspect-[398/256]">
                <Image
                  src="https://picsum.photos/500/500"
                  fill
                  className="object-cover object-center"
                  alt="image"
                />
              </div>
              <span className="text-dark text-xs">7 DAYS 6 NIGHTS</span>
              <h1 className="font-unbounded font-bold text-aqua">
                Paradise Gateway: Labuan Bajo
              </h1>
              <p className="text-dark text-xs">
                Labuan Bajo is a tropical paradise nestled in the westernmost
                part of Flores Island, Indonesia. With its stunning landscapes,
                crystal-clear waters, and vibrant marine life, it's a gateway to
                explore the mesmerizing Komodo National Park.
              </p>
              <span className="font-bold text-dark text-xs">
                Organized by Pandooin
              </span>
              <div className="flex justify-between items-end mt-6">
                <div className="flex flex-col">
                  <span className="text-xs">Start from</span>
                  <span className="hidden md:block">IDR 9,999,999</span>
                  <span className="text-[18px] text-dark font-medium font-unbounded">
                    IDR 7,500,000
                  </span>
                </div>
                <button className="btn btn-dark-outline">See Details</button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-6 mt-10 overflow-x-auto">
          {Array.from({ length: 7 }).map((_, idx) => (
            <div key={idx} className="flex flex-col flex-1 min-w-[256px]">
              <div className="relative aspect-square">
                <Image
                  src="https://picsum.photos/500/500"
                  fill
                  className="object-cover object-center"
                  alt="image"
                />
              </div>
              <span className="text-xs text-dark">7 DAYS 6 NIGHTS</span>
              <h2 className="font-unbounded font-bold text-aqua">
                Paradise Gateway: Labuan Bajo
              </h2>
              <span className="text-xs text-dark font-bold">
                Organized by Pandooin
              </span>
              <div className="flex flex-col mt-4">
                <span className="text-xs text-dark">Start from</span>
                <span className="font-unbounded font-medium text-dark">
                  IDR 5,200,000
                </span>
              </div>
              <button className="btn btn-dark-outline self-start mt-4">
                See Details
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16 mb-10">
          <LinkExplore>EXPLORE MORE</LinkExplore>
        </div>
      </section>
      {/*  */}
      <section className="bg-tan pb-8 px-8">
        <h1 className="font-the-signature text-[54px] text-dark">
          Luxury Footages
        </h1>
        <div className="flex gap-6 overflow-x-auto">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div className="flex-1 aspect-[358/256] min-w-full relative">
              <Image
                src="https://picsum.photos/500/500"
                fill
                className="object-cover object-center"
                alt="image"
              />
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <hr className="my-3" />
          <div className="flex gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div className="flex-1 aspect-square bg-blue-200"></div>
            ))}
          </div>
        </div>
      </section>
      {/*  */}
      <section className="py-10 px-4">
        <div className="bg-view-bg bg-cover bg-center">
          <div className="flex flex-col items-center justify-between text-center py-6">
            <Image
              src="/images/Logo Zamrood-12 3.png"
              width={135}
              height={50}
              alt="Zamrood"
            />
            <div>
              <p className="text-default-wh text-sm">
                Want to see other destinations?
                <br />
                Check us out at our website
              </p>
              <div className="flex items-center justify-center gap-2">
                <Link href="#" className="text-default-wh underline">
                  pandooin.com
                </Link>
                <ArrowTR />
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-unbounded font-bold text-xl text-aqua mt-10">
          Articles
        </h1>
        <p className="text-aqua">
          Our curated writings, offering something for every reader.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className={cx([
                "aspect-[4/3] relative",
                {
                  "grid-cols-subgrid md:row-span-2 md:col-span-2 h-full":
                    idx === 0,
                },
              ])}
            >
              <Image
                src="https://picsum.photos/500/500"
                fill
                className="object-cover object-center"
                alt="image"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-aqua p-4">
                <h2 className="text-default-wh font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  fugit repellendus dicta
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*  */}
      <section className="bg-dark p-4">
        <div className="flex flex-col items-center text-default-wh gap-2">
          <span className="flex-none">
            &copy; {year} Zamrood by PT Teknologi Pandu Wisata
          </span>
          <div className="flex gap-4">
            <button>
              <SocialsFB />
            </button>
            <button>
              <SocialsIG />
            </button>
            <button>
              <SocialsEmail />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
