"use client";

import Container from "@/components/container";
import { SeparatorWh } from "@/components/svg";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

const imageLength = 6;

const SectionFootages = () => {
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

  const Images = useMemo(
    () =>
      Array.from({ length: imageLength }).map((_, idx) => (
        <div className="flex-1 aspect-square min-w-0 relative" key={idx}>
          <Image
            src={`https://picsum.photos/seed/${idx + 1}/350/350`}
            fill
            className="object-cover object-center"
            alt="image"
          />
        </div>
      )),
    []
  );

  const AutoPreviewImage = Images[currentImageIdx];

  return (
    <section className="bg-tan py-8 px-4">
      <Container>
        <h1 className="font-the-signature text-[54px] text-dark">
          Luxury Footages
        </h1>
        <div className="sm:hidden">{AutoPreviewImage}</div>
        <div className="hidden sm:block">
          <div className="flex gap-6 overflow-x-auto">
            {Array.from({ length: imageLength / 2 }).map(
              (_, idx) => Images[idx]
            )}
          </div>
          <div className="flex justify-center">
            <SeparatorWh />
          </div>
          <div className="flex gap-6">
            {Array.from({ length: imageLength / 2 }).map(
              (_, idx) => Images[idx + imageLength / 2]
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionFootages;
