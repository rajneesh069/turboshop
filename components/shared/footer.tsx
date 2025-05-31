import { footerLinks } from "@/constants/constants";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border border-t flex justify-between items-center p-3 rounded sticky bottom-0 left-0 z-50 backdrop-blur  bg-background/80 w-full">
      <div className="flex gap-2 items-center">
        <ShoppingBag className="h-6 w-6" />
        <span className="font-semibold">Turboshop</span>
      </div>

      <div className="flex gap-3">
        {footerLinks.map(({ href, name }) => (
          <Link
            key={name}
            className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
            href={href}
          >
            {name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
