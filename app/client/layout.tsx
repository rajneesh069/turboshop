import type { Metadata } from "next";
import { Header } from "@/components/client/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Turboshop",
  description: "Turboshop | E-commerce app",
  icons: {
    icon: "/logo.png",
  },
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
