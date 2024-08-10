import { Separator } from "@/components/svg";
import Navbar from "@/components/navbar";
import SectionArticles from "./section/articles";
import SectionDestinations from "./section/destinations";
import Footer from "./section/footer";
import SectionFootages from "./section/footages";
import SectionHeader from "./section/header";
import SectionExperience from "./section/experience";

export default function Home() {
  return (
    <div className="bg-default-wh">
      <Navbar />
      <SectionHeader />
      <SectionExperience />
      <div className="flex justify-center">
        <Separator />
      </div>
      <SectionDestinations />
      <SectionFootages />
      <SectionArticles />
      <Footer />
    </div>
  );
}
