import Introduce from "@/components/Landing/Introduce";
import { Reviews } from "@/components/Landing/Reviews";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import Components from "@/components/Landing/Source/Components";
import Templates from "@/components/Landing/Source/Templates";
import Skills from "@/components/Landing/Skills";
import Certificates from "@/components/Landing/Certificates";
import CTA from "@/components/Landing/CTA";
import Writing from "@/components/Landing/Writing";
import { FAQ } from "@/components/Landing/FAQ";
import ProjectsSection from "@/components/Landing/Projects/ProjectsSection";
export default function Home() {
  return (
    <div>
      <div className="w-full h-auto border-t bg-neutral-50 dark:bg-neutral-950 px-2 flex flex-col items-center mx-auto pt-4">
        <div className="max-w-7xl mx-auto w-full h-auto border-l border-r border-neutral-300 dark:border-neutral-800 mt-4">
            <div className="mt-14 relative">
              <Introduce/>
            </div>
              <div className="relative">
                <ProjectsSection />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div className="py-4">
                <Reviews />
              </div>
              <div className="mt-20">
                <Skills />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div className="p-2">
                <Components />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div className="p-2">
                <Templates />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div className="relative">
                <Certificates />
              </div>
              <div className="relative">
                <Writing />
              </div>
               <div>
                <FAQ />
              </div>
              <div className="mt-2 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
                <StripedPattern/>
              </div>
              <div>
                <CTA /> 
              </div>
            </div>
      </div>
    </div>
  );
}
