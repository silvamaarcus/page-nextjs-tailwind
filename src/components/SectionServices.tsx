import Image from "next/image";

import Container from "./Container";

import IconPhone from "@/assets/icon-phone.svg";
import IconSolutions from "@/assets/icon-solutions.svg";
import IconOptions from "@/assets/icon-options.svg";
import IconCard from "@/assets/icon-card.svg";
import Phone from "@/assets/phone.png";

export default function SectionServices() {
  return (
    <section className="relative w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="block uppercase text-primary-orange font-bold text-sm">
            Serviços exclusivos
          </span>
          <h2 className="text-primary-gray font-bold text-[56px] my-6 leading-tight">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[554px] text-second-gray">
            Veja como você pode cuidar de suas finanças pelo app Itaú de forma
            segura, rápida e o melhor, no conforto de sua casa.
          </p>
          <div className="flex flex-col gap-8 mt-8">
            <div className="flex items-center gap-10">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconPhone} alt="Icon phone" />
              </div>
              <span className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="flex items-center gap-10">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconSolutions} alt="Icon phone" />
              </div>
              <span className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="flex items-center gap-10">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconOptions} alt="Icon phone" />
              </div>
              <span className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="flex items-center gap-10">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconCard} alt="Icon phone" />
              </div>
              <span className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone">
          <Image src={Phone} alt="Phone" className=" translate-x-[-50%]" />
        </div>
      </Container>
    </section>
  );
}
