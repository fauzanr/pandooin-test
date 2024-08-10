import Link from "next/link";
import Image from "next/image";
import {
  ArrowTR,
  Exp1,
  Exp2,
  Exp3,
  Separator,
  SeparatorWh,
  SocialsEmail,
  SocialsFB,
  SocialsIG,
} from "@/components/svg";
import Navbar from "@/components/navbar";
import SectionArticles from "./section-articles";
import Container from "@/components/container";
import SectionDestinations from "./section-destinations";

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
      <SectionDestinations />
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
                  src={`https://picsum.photos/seed/${idx + 1}/350/350`}
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
                    src={`https://picsum.photos/seed/${idx + 4}/350/350`}
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
          <SectionArticles />
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
