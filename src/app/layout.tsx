import "./globals.css";
import { Providers } from "./GlobalRedux/provider";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareFinder",
  description: "Find the best care for you and your family.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
