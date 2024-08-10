import Container from "@/components/container";
import { SeparatorWh } from "@/components/svg";
import Image from "next/image";
import React from "react";

const SectionFootages = () => {
  return (
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
  );
};

export default SectionFootages;
