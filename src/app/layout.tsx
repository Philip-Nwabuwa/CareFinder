import "./globals.css";
import { Providers } from "./GlobalRedux/provider";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <Providers>
        <html lang="en" className={inter.className}>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <body>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
