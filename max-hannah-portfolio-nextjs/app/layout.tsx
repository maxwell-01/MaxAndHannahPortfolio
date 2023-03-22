import "./globals.scss";
import React from "react";

export const metadata = {
  title: "Max's layout",
  description: "Practice site",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
