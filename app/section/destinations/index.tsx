"use client";

import React from "react";
import Container from "@/components/container";
import LinkExplore from "@/components/link-explore";
import { getDestination, getDestinationHighlight } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import DestinationHighlightItem from "./destination-highlight-item";
import DestinationItem from "./destination-item";

const SectionDestinations = () => {
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
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <h1 className="font-unbounded font-bold text-dark text-xl">
            Destinations
          </h1>
          <LinkExplore>EXPLORE MORE</LinkExplore>
        </div>

        {destinationsHighlight.map((item, idx) => (
          <DestinationHighlightItem
            destination={item}
            idx={idx}
            key={item.itinerary_id}
          />
        ))}
        {/*  */}
        <div className="flex gap-6 mt-10 overflow-x-auto">
          {destinations.map((item) => (
            <DestinationItem destination={item} key={item.itinerary_id} />
          ))}
        </div>

        <div className="flex justify-center sm:justify-end mt-16">
          <LinkExplore>EXPLORE MORE</LinkExplore>
        </div>
      </Container>
    </section>
  );
};

export default SectionDestinations;
