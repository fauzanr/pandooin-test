"use client";

import React from "react";
import Container from "@/components/container";
import LinkExplore from "@/components/link-explore";
import Image from "next/image";
import cx from "classnames";
import { getDestination, getDestinationHighlight } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import { formatCurrency } from "@/helpers";

const Destinations = () => {
  const { data: dataH } = useQuery({
    queryKey: ["destinations-highlight"],
    queryFn: getDestinationHighlight,
  });

  const { data } = useQuery({
    queryKey: ["destinations"],
    queryFn: getDestination,
  });

  const destinationsHighlight = dataH?.data || [];
  const destinations = data?.data || [];

  return (
    <section className="px-4 py-10">
      <Container>
        <h1 className="font-unbounded font-bold text-dark text-xl mb-2">
          Destinations
        </h1>
        <LinkExplore>EXPLORE MORE</LinkExplore>

        {destinationsHighlight.map((item, idx) => (
          <div
            key={item.itinerary_id}
            className={cx([
              "flex flex-col sm:flex-row gap-4 my-16",
              { "sm:flex-row-reverse": idx % 2 === 1 },
            ])}
          >
            <div className="flex-1 relative aspect-[398/256]">
              <Image
                src={item.related_galleries?.[0]?.src}
                fill
                className="object-cover object-center"
                alt={item.related_galleries?.[0]?.gallery_alt_text}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-dark text-xs">
                {item.itinerary_day} DAYS {item.itinerary_day - 1} NIGHTS
              </span>
              <h1 className="font-unbounded font-bold text-aqua">
                {item.itinerary_name}
              </h1>
              <div className="flex flex-col gap-1 sm:flex-col-reverse">
                <p className="text-dark text-xs">
                  {item.itinerary_short_description}
                </p>
                <span className="font-bold text-dark text-xs">
                  Organized by {item.partner_name}
                </span>
              </div>
              <div className="flex justify-between items-end mt-6">
                <div className="flex flex-col">
                  <span className="text-xs">Start from</span>
                  {item.related_variant.itinerary_variant_disc_price != "0" && (
                    <span className="hidden sm:block font-unbounded font-medium line-through text-muted">
                      IDR{" "}
                      {formatCurrency(
                        item.related_variant.itinerary_variant_disc_price
                      )}
                    </span>
                  )}
                  <span className="text-[18px] text-aqua sm:text-xl font-medium font-unbounded">
                    IDR{" "}
                    {formatCurrency(
                      item.related_variant.itinerary_variant_pub_price
                    )}
                  </span>
                </div>
                <button className="btn btn-dark-outline">See Details</button>
              </div>
            </div>
          </div>
        ))}
        {/*  */}
        <div className="flex gap-6 mt-10 overflow-x-auto">
          {destinations.map((item) => (
            <div
              key={item.itinerary_id}
              className="flex flex-col flex-1 min-w-[256px] md:max-w-[350px]"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.related_galleries?.[0]?.src}
                  fill
                  className="object-cover object-center"
                  alt={item.related_galleries?.[0]?.gallery_alt_text}
                />
              </div>
              <div className="my-4">
                <span className="text-xs text-dark">
                  {item.itinerary_day} DAYS {item.itinerary_day - 1} NIGHTS
                </span>
                <h2 className="font-unbounded font-bold text-aqua">
                  {item.itinerary_name}
                </h2>
                <span className="text-xs text-dark font-bold">
                  Organized by {item.partner_name}
                </span>
              </div>
              <div className="flex flex-col mt-auto">
                <span className="text-xs text-dark">Start from</span>
                <span className="font-unbounded font-medium text-dark">
                  IDR{" "}
                  {formatCurrency(
                    item.related_variant.itinerary_variant_pub_price
                  )}
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
  );
};

export default Destinations;
