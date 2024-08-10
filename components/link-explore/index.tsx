import React, { ReactNode } from "react";
import Link from "next/link";
import { Chevron } from "../svg";

const LinkExplore = ({ children }: { children: ReactNode }) => (
  <Link href="#" className="flex items-center gap-2">
    <span className="border-2 border-dark rounded-full p-1">
      <Chevron />
    </span>
    <span className="font-bold text-dark mt-0.5">{children}</span>
  </Link>
);

export default LinkExplore;
