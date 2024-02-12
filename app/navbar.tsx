'use client';
import React from "react";
import { usePathname } from 'next/navigation';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { UserProfileButton } from './profile_button';


export default function HomeNavBar(): JSX.Element {
  const currentRoute = usePathname();

  // Highlight the active link in the Navbar
  type aboutHighlightedType = 'foreground' | 'secondary';
  type careerHighlightedType = 'foreground' | 'secondary';
  let aboutHighlighted = 'foreground' as aboutHighlightedType;
  let careerHighlighted = 'foreground' as careerHighlightedType;
  if (currentRoute === "/about") {
    aboutHighlighted = 'secondary';
    careerHighlighted = 'foreground';
  }
  else if (currentRoute === "/mycareer") {
    aboutHighlighted = 'foreground';
    careerHighlighted = 'secondary';
  }

  return (
    <Navbar maxWidth="full">
    <NavbarBrand>
      <p className="font-bold">Resume Tailor</p>
    </NavbarBrand>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color={aboutHighlighted} href="/about">
          About
        </Link>
      </NavbarItem>
      <NavbarItem  >
        <Link color={careerHighlighted} href="/mycareer">
          My Career
        </Link>
      </NavbarItem>
    </NavbarContent>

    <NavbarContent as="div" justify="end">
      <NavbarItem>
        <UserProfileButton />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  );
  }