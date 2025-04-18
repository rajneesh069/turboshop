import { headerLinks } from "@/constants/constants";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
export function Header() {
  return (
    <header className="hidden md:flex gap-2 justify-between items-center p-4 border border-b">
      <Link className="flex gap-2 justify-center items-center" href={"/"}>
        <ShoppingBag className="h-6 w-6" />
        <span className="text-xl font-bold">Turboshop</span>
      </Link>

      <div className="flex gap-3 items-center">
        {headerLinks.map(({ name, href }) => (
          <Link
            className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
            href={href}
            key={name}
          >
            {name}
          </Link>
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Button variant="outline" size="icon" className="hidden md:flex">
          <ShoppingBag className="h-4 w-4" />
          <span className="sr-only">Shopping cart</span>
        </Button>
        <Button>Shop Now</Button>
      </div>
    </header>
  );
}
