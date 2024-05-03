import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "normalize.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "杨炜帆 - 前端工程师",
  description:
    "一名致力于编写可维护、高质量的代码，构建用户体验流畅的产品的前端工程师。",
};

// export async function generateStaticParams() {
//   return data;
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
