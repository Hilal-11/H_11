import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import GoToTop from "@/components/MicroComponents/GotoTop";
import TopLoader from "@/components/MicroComponents/Loading";
import { FeedbackMobile } from "@/components/MicroComponents/Feedback";
import Header from "@/components/Landing/Header"
import Footer from "@/components/Landing/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Hilal_11",
  description: "Software engineer Hilal_11",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
            <Header/>
          <GoToTop />
          <FeedbackMobile />
          <TopLoader />
          
          {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
