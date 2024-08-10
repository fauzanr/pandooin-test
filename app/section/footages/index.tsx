"use client";

import Container from "@/components/container";
import { SeparatorWh } from "@/components/svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const imageLength = 6;

const AutoPreview = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const nextIdx = () => {
    setCurrentImageIdx((curr) => {
      return curr + 1 === imageLength ? 0 : curr + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextIdx, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex-1 aspect-[358/256] min-w-full sm:min-w-0 relative">
      <Image
        src={`https://picsum.photos/seed/${currentImageIdx}/580/400`}
        fill
        className="object-cover object-center"
        alt="image"
      />
    </div>
  );
};

const SectionFootages = () => {
  return (
    <section className="bg-tan py-8 px-4">
      <Container>
        <h1 className="font-the-signature text-[54px] text-dark">
          Luxury Footages
        </h1>
        <div className="sm:hidden">
          <AutoPreview />
        </div>
        <div className="hidden sm:block">
          <div className="flex gap-6 overflow-x-auto">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div className="flex-1 aspect-square min-w-0 relative" key={idx}>
                <Image
                  src={`https://picsum.photos/seed/${idx + 1}/350/350`}
                  fill
                  className="object-cover object-center"
                  alt="image"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <SeparatorWh />
          </div>
          <div className="flex gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div className="flex-1 aspect-square min-w-0 relative" key={idx}>
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
