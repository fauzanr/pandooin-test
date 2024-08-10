"use client";

import React from "react";
import Image from "next/image";
import cx from "classnames";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/queries";

const Articles = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  const articles = data?.data || [];

  return (
    <>
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
              "aspect-[4/3] relative",
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
    </>
  );
};

export default Articles;
