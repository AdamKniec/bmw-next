import Link from "next/link";
import { siteConfig } from "../../config/site";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link href={siteConfig.routes.blog}>
              <div className={cn(buttonVariants({ variant: "ghost" }))}>
                blog
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
