import React from "react";
import { Times } from "../svg";
import { navs } from ".";

const MobileMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  return (
    <div className="fixed z-10 inset-0 backdrop-brightness-50">
      <div className="bg-default-wh ml-16 p-4 h-full">
        <div className="flex flex-col items-end gap-8">
          <button className="mb-10" onClick={onClose}>
            <Times />
          </button>
          {navs.map((nav) => (
            <button key={nav} className="text-aqua font-bold p-2">
              {nav}
            </button>
          ))}
          <button className="btn btn-dark-outline self-end">
            Need Assistance?
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
