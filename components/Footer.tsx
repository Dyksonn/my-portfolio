import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px]" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          E ai?, <span className="text-purple">Você</span> Gostou do meu perfil e das minhas experiências?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Entre em contato comigo hoje mesmo e vamos começar a trabalhar juntos
        </p>
        <a href="mailto:dykson.santos@gmail.com">
          <MagicButton
            title="Entrar em contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Dykson Santos
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              onClick={() => window.open(info.link, '_blank')}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
