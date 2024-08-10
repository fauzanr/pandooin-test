import { formatCurrency } from "@/helpers";
import { Destination } from "@/queries";
import Image from "next/image";
import React from "react";

const DestinationItem = ({ destination }: { destination: Destination }) => {
  return (
    <div
      key={destination.itinerary_id}
      className="flex flex-col flex-1 min-w-[256px] md:max-w-[350px]"
    >
      <div className="relative aspect-square">
        <Image
          src={destination.related_galleries?.[0]?.src}
          fill
          className="object-cover object-center"
          alt={destination.related_galleries?.[0]?.gallery_alt_text}
        />
      </div>
      <div className="my-4">
        <span className="text-xs text-dark">
          {destination.itinerary_day} DAYS {destination.itinerary_day - 1}{" "}
          NIGHTS
        </span>
        <h2 className="font-unbounded font-bold text-aqua">
          {destination.itinerary_name}
        </h2>
        <span className="text-xs text-dark font-bold">
          Organized by {destination.partner_name}
        </span>
      </div>
      <div className="flex flex-col mt-auto">
        <span className="text-xs text-dark">Start from</span>
        <span className="font-unbounded font-medium text-dark">
          IDR{" "}
          {formatCurrency(
            destination.related_variant.itinerary_variant_pub_price
          )}
        </span>
      </div>
      <button className="btn btn-dark-outline self-start mt-4">
        See Details
      </button>
    </div>
  );
};

export default DestinationItem;
