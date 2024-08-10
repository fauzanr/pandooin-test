import Container from "@/components/container";
import { SocialsEmail, SocialsFB, SocialsIG } from "@/components/svg";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className="bg-dark p-4">
      <Container>
        <div className="flex flex-col sm:flex-row sm: justify-between items-center text-default-wh gap-2">
          <span className="flex-none">
            &copy; {year} Zamrood by PT Teknologi Pandu Wisata
          </span>
          <div className="flex gap-4">
            <button>
              <SocialsFB />
            </button>
            <button>
              <SocialsIG />
            </button>
            <button>
              <SocialsEmail />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
