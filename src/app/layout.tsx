import { Provider } from "@/components/ui/provider";
import { content } from "@/content";
import type { Metadata } from "next";
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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
