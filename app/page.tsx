import Header from "@/components/Landing/Header";
import Introduce from "@/components/Landing/Introduce";
import { Reviews } from "@/components/Landing/Reviews";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import ProductsShowcaseBento from "@/components/Landing/ProductsShowcaseBento";
import TechRoles from "@/components/Landing/TechRoles";
import Components from "@/components/Landing/Source/Components";
import Templates from "@/components/Landing/Source/Templates";
import Designs from "@/components/Landing/Source/Designs";
import Skills from "@/components/Landing/Skills";
import Experience from "@/components/Landing/Experience";
import Footer from "@/components/Landing/Footer";
import Certificates from "@/components/Landing/Certificates";
export default function Home() {
  return (
    <div>
      <div className="w-full h-auto border-t bg-neutral-50 dark:bg-neutral-950 px-2 flex flex-col items-center mx-auto pt-4">
        <div className="md:container lg:w-7xl w-full h-auto border-l border-r border-neutral-300 dark:border-neutral-800 mt-4">
            <Header/>
            <div className="mt-14 relative">
              <Introduce/>
            </div>
              <div className="py-4">
                <Reviews />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div className="relative">
                <ProductsShowcaseBento />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div className="mt-20">
                <Skills />
              </div>

              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div className="relative">
                <Experience />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div className="relative">
                <Certificates />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div>
                <Components />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div>
                <Templates />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div>
                <Designs />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
            </div>
      </div>
        <Footer/>
    </div>
  );
}
