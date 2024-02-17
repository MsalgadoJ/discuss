import Link from "next/link";
import { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import HeaderAuth from "@/components/header-auth";
import SearchInput from "@/components/search-input";
import Logo from "./common/logo";
import ClientAnimation from "./common/client-animation";

export default function Header() {
  return (
    <ClientAnimation type="fadeIn">
      <Navbar className="w-full shadow mb-6">
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-3 font-bold">
            <Logo />
            <h1 className="hidden sm:flex text-2xl font-extrabold text-purple">
              Discuss
            </h1>
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <Suspense>
              <SearchInput />
            </Suspense>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <HeaderAuth />
        </NavbarContent>
      </Navbar>
    </ClientAnimation>
  );
}
