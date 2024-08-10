"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import cx from "classnames";
import { NavMenu } from "../svg";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Container from "../container";

export const navs = [
  "Homepage",
  "Customize Your Trip",
  "Destination",
  "Article",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 270);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={cx("fixed z-10 w-full bg-default-wh transition-colors p-4", {
          "lg:bg-default-wh": scrolled,
          "lg:bg-transparent": !scrolled,
        })}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Image
              src="/images/Logo Zamrood-10 1.png"
              width={135}
              height={50}
              alt="Zamrood"
              className={cx({ "lg:hidden": !scrolled, "lg:block": scrolled })}
            />
            <Image
              src="/images/Logo Zamrood-12 3.png"
              width={135}
              height={50}
              alt="Zamrood"
              className={cx("hidden", {
                "lg:hidden": scrolled,
                "lg:block": !scrolled,
              })}
            />
            <div className="lg:hidden">
              <button onClick={handleToggleMenu}>
                <NavMenu />
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="flex gap-4">
                {navs.map((nav) => (
                  <Link href="#">
                    <div
                      className={cx(
                        "py-2 px-4 font-bold hover:border-b-2 hover:border-default-wh",
                        {
                          "hover:border-dark": scrolled,
                          "text-dark": scrolled,
                          "text-default-wh": !scrolled,
                        }
                      )}
                    >
                      {nav}
                    </div>
                  </Link>
                ))}
                <button className={cx("btn", { "btn-dark-outline": scrolled })}>
                  Need Assistance?
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
