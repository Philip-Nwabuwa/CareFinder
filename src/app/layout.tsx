"use client";

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import "./globals.css";
import { Inter } from "next/font/google";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "CareFinder",
//   description: "Find the best care for you and your family.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  return (
    <html lang="en">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <body className={inter.className}>{children}</body>
        </MantineProvider>
      </ColorSchemeProvider>
    </html>
  );
}
