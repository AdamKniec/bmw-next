import Link from "next/link";
import { siteConfig } from "../../config/site";
import Image from "next/image";

import { Button } from "./ui/button";
import logo from "../../public/mind-charge-svgrepo-com.svg";

export const Header = () => {
  return (
    <header>
      <nav className="flex justify-between  w-full max-w-6xl my-0 m-auto py-4">
        <Link href={siteConfig.routes.root}>
          <div className="w-10">
            <Image priority src={logo} alt="Boli Mnie Web" />
          </div>
        </Link>
        <Link href={siteConfig.routes.blog}>
          <Button variant={"ghost"}>blog</Button>
        </Link>
      </nav>
    </header>
  );
};
