import Container from "@/components/container";
import { experiences } from "@/constants";
import Image from "next/image";
import React from "react";

const SectionExperience = () => {
  return (
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
      </Container>

      <Container>
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
  );
};

export default SectionExperience;
