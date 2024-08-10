import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="max-w-[1096px] mx-auto">{children}</div>
);

export default Container;
