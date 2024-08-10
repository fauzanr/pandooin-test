import React, { useEffect, useState } from "react";
import { Destination } from "@/queries";
import cx from "classnames";
import Image from "next/image";
import { formatCurrency } from "@/helpers";

const DestinationHighlightItem = ({
  destination,
  idx,
}: {
  destination: Destination;
  idx: number;
}) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const nextIdx = () => {
    setCurrentImageIdx((curr) => {
      return curr + 1 === (destination.related_galleries?.length || 0)
        ? 0
        : curr + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextIdx, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      key={destination.itinerary_id}
      className={cx([
        "flex flex-col sm:flex-row gap-4 my-16",
        { "sm:flex-row-reverse": idx % 2 === 1 },
      ])}
    >
      <div className="flex-1 relative aspect-[398/256]">
        {destination.related_galleries?.map((gallery, idx) => (
          <Image
            key={gallery.gallery_id}
            src={gallery.src}
            fill
            className={cx(
              "object-cover object-center transition-opacity duration-300",
              {
                "opacity-0": idx !== currentImageIdx,
                "opacity-100": idx === currentImageIdx,
              }
            )}
            alt={destination.related_galleries?.[0]?.gallery_alt_text}
          />
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <span className="text-dark text-xs">
          {destination.itinerary_day} DAYS {destination.itinerary_day - 1}{" "}
          NIGHTS
        </span>
        <h1 className="font-unbounded font-bold text-aqua">
          {destination.itinerary_name}
        </h1>
        <div className="flex flex-col gap-1 sm:flex-col-reverse">
          <p className="text-dark text-xs">
            {destination.itinerary_short_description}
          </p>
          <span className="font-bold text-dark text-xs">
            Organized by {destination.partner_name}
          </span>
        </div>
        <div className="flex justify-between items-end mt-6">
          <div className="flex flex-col">
            <span className="text-xs">Start from</span>
            {destination.related_variant.itinerary_variant_disc_price !=
              "0" && (
              <span className="hidden sm:block font-unbounded font-medium line-through text-muted">
                IDR{" "}
                {formatCurrency(
                  destination.related_variant.itinerary_variant_disc_price
                )}
              </span>
            )}
            <span className="text-[18px] text-aqua sm:text-xl font-medium font-unbounded">
              IDR{" "}
              {formatCurrency(
                destination.related_variant.itinerary_variant_pub_price
              )}
            </span>
          </div>
          <button className="btn btn-dark-outline">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default DestinationHighlightItem;
