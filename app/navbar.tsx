'use client';
import React from "react";
import { usePathname } from 'next/navigation';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

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
        <p className="font-bold text-inherit">Resume Tailor</p>
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
            <Button as={Link} color="secondary" href="/api/auth/login" variant="flat">
              Sign In/Create Account
            </Button>
          </NavbarItem>
      </NavbarContent>
    </Navbar>
    );
  }