"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { ChevronDown } from "lucide-react";
import { MagnifyingGlassIcon, BellAlertIcon } from '@heroicons/react/16/solid';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface HeaderLegacyProps {
  logoVariant?: "actablSymbol" | "alSymbol" | "heSymbol" | "psSymbol" | "trSymbol";
}

const HeaderLegacy = ({ logoVariant = "actablSymbol" }: HeaderLegacyProps) => {
  return (
    <header className="bg-indigo-800 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">

    <nav className="w-full h-14 flex items-center justify-between px-4 relative">
      <div
        id="gradientBar"
        className="absolute top-0 left-0 h-full w-1.5"
        style={{
          background: "linear-gradient(180deg, rgba(250, 147, 149, 1.00) 0%, rgba(93, 115, 222, 1.00) 50.999999046325684%, rgba(23, 27, 112, 1.00) 100%)",
        }}
      ></div>
      <div className="w-full h-13 pl-2 flex items-center justify-start gap-2">
        <Logo variant={logoVariant} className="text-white w-10" />
        <div className="flex items-center gap-2">
          <div className="h-8 w-px"></div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="default"
                size="md"
                className="bg-transparent hover:bg-indigo-700/98 cursor-pointer"
                endIcon={<ChevronDown />}
              >
                Hotel Name
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="start">
              <DropdownMenuItem>Hotel 1</DropdownMenuItem>
              <DropdownMenuItem>Hotel 2</DropdownMenuItem>
              <DropdownMenuItem>Hotel 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <Input
            data-sidebar="input"
            id="search"
            placeholder="Search..."
            className="pl-10 h-8 w-64 bg-white text-gray-700 rounded-lg focus-visible:border-ring focus-visible:ring-primary/30 focus-visible:ring-2"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-4" />
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-primary/80"
            startIcon={<BellAlertIcon />}
          ></Button>

          <span className="absolute top-0 right-0 bg-destructive text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://avatar.iran.liara.run/public/41"
                  alt="AB"
                />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default HeaderLegacy;