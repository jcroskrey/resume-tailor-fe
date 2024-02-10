'use client';
import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import { Button, Link, Avatar} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";



export function UserProfileButton(): JSX.Element {
    const { user, error, isLoading } = useUser();
    console.log(user);

    if (isLoading) return (<div>Loading...</div>);
    else if (error || !user) return(
        <Button as={Link} 
            color="secondary" 
            href="/api/auth/login" 
            variant="flat">
            Sign In
        </Button>);
    else if (user) {
        return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name={user.name!}
                    size="sm"
                    // src="/document_icon.svg"
                    >
                </Avatar>                
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownItem 
                    key="logout" 
                    color="danger" 
                    href="/api/auth/logout">
                    Logout
                </DropdownItem>
            </DropdownMenu>

        </Dropdown>
            
        );
    }

    else {
        return (
        <Button as={Link} 
            color="secondary" 
            href="/api/auth/login" 
            variant="flat">
            Sign In
        </Button>
        );
    }
}