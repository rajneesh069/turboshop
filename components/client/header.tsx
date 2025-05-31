import { headerLinks } from "@/constants/constants";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
export function Header() {
  return (
    <header className="hidden md:flex gap-2 justify-between items-center p-4 border border-b rounded sticky top-0 left-0 z-50 backdrop-blur  bg-background/80 w-full">
      <Link className="flex gap-2 justify-center items-center" href={"/"}>
        <ShoppingBag className="h-6 w-6" />
        <span className="text-xl font-bold">Turboshop</span>
      </Link>

      <div className="flex gap-3 items-center">
        {headerLinks.map(({ name, href }) => (
          <Link
            className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
            href={`/client/${href}`}
            key={name}
          >
            {name}
          </Link>
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Link href={"/client/cart"}>
          <Button variant="outline" size="icon">
            <ShoppingBag className="h-4 w-4" />
            <span className="sr-only">Shopping cart</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
