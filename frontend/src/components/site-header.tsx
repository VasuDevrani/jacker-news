import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { MenuIcon } from "lucide-react";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">
            BetterNews
          </Link>
          <nav className="hidden items-center space-x-4 md:flex">
            <Link
              to={"/"}
              search={{ sortBy: "recent", order: "desc" }}
              className="hover:underline"
            >
              new
            </Link>
            <Link
              className="hover:underline"
              to={"/"}
              search={{ sortBy: "points", order: "desc" }}
            >
              top
            </Link>
            <Link className="hover:underline">submit</Link>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon" className="md:hidden">
              <MenuIcon className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="mb-2">
            <SheetHeader>
              <SheetTitle>BetterNews</SheetTitle>
              <SheetDescription className="sr-only">
                Navigation
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col space-y-4">
              <Link
                onClick={() => setIsOpen(false)}
                className="hover:underline"
                to={"/"}
                search={{ sortBy: "recent", order: "desc" }}
              >
                new
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                className="hover:underline"
                to={"/"}
                search={{ sortBy: "points", order: "desc" }}
              >
                top
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                submit
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
