import { Domine, Albert_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Recipes",
  description: "Easy recipes for your daily routine",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${albertSans.variable} ${domine.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
