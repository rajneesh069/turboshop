import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Turboshop Admin",
  description: "Turboshop Admin Panel | E-commerce app  ",
  icons: {
    icon: "/logo.png",
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
