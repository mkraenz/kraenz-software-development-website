import { Provider } from "@/components/ui/provider";
import { content } from "@/content";
import { Grid } from "@chakra-ui/react";
import type { Metadata } from "next";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: content.htmlMeta.title,
  description: content.htmlMeta.description,
  keywords: content.htmlMeta.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang={"en"}>
      <body>
        <Provider>
          <Grid
            templateRows={"var(--navbar-height) 1fr min-content"}
            pb={4}
            minH={"100svh"}
          >
            <Navbar />
            {children}
            <Footer />
          </Grid>
        </Provider>
      </body>
    </html>
  );
}
