"use client";

import React from "react";
import Image from "next/image";
import cx from "classnames";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/queries";
import Container from "@/components/container";
import Link from "next/link";
import { ArrowTR } from "@/components/svg";

const SectionArticles = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  const articles = data?.data || [];

  return (
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

        {/*  */}

        <div>
          <h1 className="font-unbounded font-bold text-xl text-aqua mt-10">
            Articles
          </h1>
          <p className="text-aqua mb-4">
            Our curated writings, offering something for every reader.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading && !articles?.length && "..."}
            {error && "Cannot retrieve articles"}
            {articles.map((item, idx) => (
              <div
                key={item.id}
                className={cx([
                  "aspect-[4/3] lg:aspect-[256/347] relative",
                  {
                    "lg:row-span-2 lg:col-span-2 h-full": idx === 0,
                  },
                ])}
              >
                <Image
                  src={item.featured_image}
                  fill
                  className="object-cover object-center"
                  alt="image"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-aqua p-4">
                  <h2 className="text-default-wh font-bold">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionArticles;
