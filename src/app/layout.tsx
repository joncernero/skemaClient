import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackwrendigital.com"),
  title: {
    template: "%s | Black Wren Digital",
    default: "Black Wren Digital",
  },
  description:
    "Black Wren Digital builds fast, modern websites, APIs, and custom web applications for businesses.",
  authors: [{ name: "Black Wren Digital" }],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Black Wren Digital",
    type: "website",
    url: "https://blackwrendigital.com",
    title: "Black Wren Digital",
    description:
      "Black Wren Digital builds fast, modern websites, APIs, and custom web applications for businesses.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded focus:bg-blue-500 focus:px-4 focus:py-2 focus:font-bold focus:text-white"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
