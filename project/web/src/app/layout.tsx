import type { Metadata } from "next";
import localFont from "next/font/local";
import Layout from "@/commons/layout";
import "./globals.css";
import "@/commons/styles/reset.css";
import ApolloSetting from "@/commons/settings/apollo-setting";
import DeviceSetting from "@/commons/settings/device-setting";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const suitVariable = localFont({
  src: "../../public/fonts/SUIT-Variable.woff2",
  variable: "--font-suit-variable",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className={`${suitVariable.variable} antialiased`}>
        <ApolloSetting>
          <DeviceSetting>
            <Layout>{children}</Layout>
          </DeviceSetting>
        </ApolloSetting>
      </body>
    </html>
  );
}
