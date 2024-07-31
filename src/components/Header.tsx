import Image from "next/image";

// Images
import Logo from "@/assets/logo.svg";
import IconUser from "@/assets/icon-user.svg";

// Components
import Container from "./Container";
import ItemMenu from "./ItemMenu";
import Search from "./Search";

export default function Header() {
  return (
    <header className="relative w-100 h-20 bg-primary-orange flex items-center">
      <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full"></div>
      {/* Container */}
      <Container>
        <div className="flex flex-1 items-center justify-between">
          {/* Logo + nav */}
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Para você" />
              </li>
              <li>
                <ItemMenu name="Para empresas" />
              </li>
              <li>
                <ItemMenu name="Serviços" />
              </li>
              <li>
                <ItemMenu name="Ajuda" />
              </li>
            </ul>
          </div>
          {/* Search */}
          <Search />
        </div>
        {/* Botão */}
        <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10">
          <Image src={IconUser} alt="Icon user" />
          <span className="text-white font-bold">Acessar conta</span>
        </button>
      </Container>
    </header>
  );
}
