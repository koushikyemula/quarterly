import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopLoader from "@/components/top-loader";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quarterly",
  description: "Simplr app for tracking quarterly goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopLoader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
