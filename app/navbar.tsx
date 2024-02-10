'use client';
import React from "react";
import { usePathname } from 'next/navigation';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { UserProfileButton } from './profile_button';


export default function HomeNavBar(): JSX.Element {
  const currentRoute = usePathname();



  // Highlight the active link in the Navbar
  type aboutHighlightedType = 'foreground' | 'secondary';
  type createHighlightedType = 'foreground' | 'secondary';
  let aboutHighlighted = 'foreground' as aboutHighlightedType;
  let createHighlighted = 'foreground' as createHighlightedType;
  if (currentRoute === "/about") {
    aboutHighlighted = 'secondary';
    createHighlighted = 'foreground';
  }
  else if (currentRoute === "/create") {
    aboutHighlighted = 'foreground';
    createHighlighted = 'secondary';
  }

  return (
    <Navbar>
    <NavbarBrand>
      <p className="font-bold text-inherit text-blue-400">Resume Tailor</p>
    </NavbarBrand>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color={aboutHighlighted} href="/about">
          About
        </Link>
      </NavbarItem>
      <NavbarItem  >
        <Link color={createHighlighted} href="/create">
          Create Resume
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