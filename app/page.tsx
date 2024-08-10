import Link from "next/link";
import cx from "classnames";
import Image from "next/image";
import {
  ArrowTR,
  Chevron,
  Exp1,
  Exp2,
  Exp3,
  Separator,
  SeparatorWh,
  SocialsEmail,
  SocialsFB,
  SocialsIG,
} from "@/components/svg";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="max-w-[1096px] mx-auto">{children}</div>
);

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
      <section className="flex flex-col items-center justify-center pt-[82px] h-[674px] text-center text-default-wh bg-header-bg bg-cover bg-center px-4 sm:text-left sm:items-start sm:justify-end sm:pb-32">
        <Container>
          <h1 className="font-the-signature text-[86px] text-tan leading-[0.3]">
            Premium Travel
          </h1>
          <p className="font-unbounded font-bold text-2xl">
            Beyond Expectation
          </p>
          <p>
            Experience the finest that Indonesia has to offer with our curated
            selection of premium trips, ensuring comfort every step of the way
          </p>
          <button className="btn mt-6">Take Me There</button>
        </Container>
      </section>
      {/*  */}
      <section className="px-4">
        <Container>
          <div className="text-center">
            <h1 className="font-the-signature text-aqua text-[54px] leading-[0.4] mt-10">
              Beyond Premium
            </h1>
            <p className="font-unbounded font-bold text-dark text-xl mb-8">
              ELEVATE YOUR EXPERIENCE
            </p>
            <div className="sm:flex gap-6">
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
          </div>
          {/*  */}
          <div className="text-center sm:flex sm:text-left my-14">
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
              <button className="btn btn-dark w-full sm:w-auto">
                Customize Your Trip
              </button>
            </div>
          </div>
        </Container>
      </section>
      {/*  */}
      <div className="flex justify-center">
        <Separator />
      </div>
      {/*  */}
      <section className="px-4 py-10">
        <Container>
          <h1 className="font-unbounded font-bold text-dark text-xl mb-2">
            Destinations
          </h1>
          <LinkExplore>EXPLORE MORE</LinkExplore>

          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className={cx([
                "flex flex-col sm:flex-row gap-4 my-16",
                { "sm:flex-row-reverse": idx % 2 === 1 },
              ])}
            >
              <div className="flex-1 relative aspect-[398/256]">
                <Image
                  src="https://picsum.photos/500/500"
                  fill
                  className="object-cover object-center"
                  alt="image"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <span className="text-dark text-xs">7 DAYS 6 NIGHTS</span>
                <h1 className="font-unbounded font-bold text-aqua">
                  Paradise Gateway: Labuan Bajo
                </h1>
                <div className="flex flex-col gap-1 sm:flex-col-reverse">
                  <p className="text-dark text-xs">
                    Labuan Bajo is a tropical paradise nestled in the
                    westernmost part of Flores Island, Indonesia. With its
                    stunning landscapes, crystal-clear waters, and vibrant
                    marine life, it's a gateway to explore the mesmerizing
                    Komodo National Park.
                  </p>
                  <span className="font-bold text-dark text-xs">
                    Organized by Pandooin
                  </span>
                </div>
                <div className="flex justify-between items-end mt-6">
                  <div className="flex flex-col">
                    <span className="text-xs">Start from</span>
                    <span className="hidden sm:block font-unbounded font-medium line-through text-muted">
                      IDR 9,999,999
                    </span>
                    <span className="text-[18px] text-aqua sm:text-xl font-medium font-unbounded">
                      IDR 7,500,000
                    </span>
                  </div>
                  <button className="btn btn-dark-outline">See Details</button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex gap-6 mt-10 overflow-x-auto md:overflow-x-clip">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col flex-1 min-w-[256px] md:min-w-0"
              >
                <div className="relative aspect-square">
                  <Image
                    src="https://picsum.photos/500/500"
                    fill
                    className="object-cover object-center"
                    alt="image"
                  />
                </div>
                <div className="my-4">
                  <span className="text-xs text-dark">7 DAYS 6 NIGHTS</span>
                  <h2 className="font-unbounded font-bold text-aqua">
                    Paradise Gateway: Labuan Bajo
                  </h2>
                  <span className="text-xs text-dark font-bold">
                    Organized by Pandooin
                  </span>
                </div>
                <div className="flex flex-col">
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

          <div className="flex justify-center sm:justify-end mt-16">
            <LinkExplore>EXPLORE MORE</LinkExplore>
          </div>
        </Container>
      </section>
      {/*  */}
      <section className="bg-tan py-8 px-4">
        <Container>
          <h1 className="font-the-signature text-[54px] text-dark">
            Luxury Footages
          </h1>
          <div className="flex gap-6 overflow-x-auto">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div className="flex-1 aspect-[358/256] sm:aspect-square min-w-full sm:min-w-0 relative">
                <Image
                  src="https://picsum.photos/500/500"
                  fill
                  className="object-cover object-center"
                  alt="image"
                />
              </div>
            ))}
          </div>
          <div className="hidden sm:block">
            <div className="flex justify-center">
              <SeparatorWh />
            </div>
            <div className="flex gap-6">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div className="flex-1 aspect-[358/256] sm:aspect-square min-w-full sm:min-w-0 relative">
                  <Image
                    src="https://picsum.photos/500/500"
                    fill
                    className="object-cover object-center"
                    alt="image"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {/*  */}
      <section className="py-10 px-4">
        <Container>
          <div className="bg-view-bg bg-cover bg-center">
            <div className="flex flex-col sm:flex-row items-center justify-between text-center p-6">
              <Image
                src="/images/Logo Zamrood-12 3.png"
                width={135}
                height={50}
                alt="Zamrood"
              />
              <div>
                <p className="text-default-wh text-sm">
                  Want to see other destinations?
                  <br className="sm:hidden" />
                  Check us out at our website
                </p>
                <div className="flex items-center justify-center sm:justify-end gap-2">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className={cx([
                  "aspect-[4/3] relative",
                  {
                    "lg:row-span-2 lg:col-span-2 h-full": idx === 0,
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi fugit repellendus dicta
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/*  */}
      <section className="bg-dark p-4">
        <Container>
          <div className="flex flex-col sm:flex-row sm: justify-between items-center text-default-wh gap-2">
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
        </Container>
      </section>
    </div>
  );
}
