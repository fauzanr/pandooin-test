import Container from "@/components/container";
import React from "react";

const SectionHeader = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-[82px] h-[674px] text-center text-default-wh bg-header-bg bg-cover bg-center px-4 sm:text-left sm:items-start sm:justify-end sm:pb-32">
      <Container>
        <h1 className="font-the-signature text-[86px] text-tan leading-[0.3]">
          Premium Travel
        </h1>
        <p className="font-unbounded font-bold text-2xl">Beyond Expectation</p>
        <p>
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <button className="btn mt-6">Take Me There</button>
      </Container>
    </section>
  );
};

export default SectionHeader;
