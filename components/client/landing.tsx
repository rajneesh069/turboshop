import Image from "next/image";
import bannerImage from "../../public/images/turboshop-hero-image.webp";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ClientLanding() {
  return (
    <div className="pt-4 flex justify-center flex-col gap-10 items-center">
      <section id="hero-banner-image">
        <Image
          priority={true}
          src={bannerImage}
          alt="hero banner image"
          className="h-[750px] rounded"
        />
      </section>

      <section id="nav-buttons" className="flex gap-3">
        <Link href={"/shop"}>
          <Button className="flex gap-1">
            <span>Shop Collection</span>
            <ArrowRight />
          </Button>
        </Link>
        <Link href={"/about"}>
          <Button>Learn More</Button>
        </Link>
      </section>

      <section id="featured-products " className="flex flex-col gap-2">
        <div>
          <h1 className="text-4xl text-center">Featured Products</h1>
          <p className="text-muted-foreground">
            Discover our most popular items loved by customers worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
