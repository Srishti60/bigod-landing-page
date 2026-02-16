import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buy BIGOD | Gold-Backed RWA Token",
  description: " BIGOD secure gold-backed RWA token connecting physical gold with blockchain for simple and transparent digital investment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Google Tag Manager Script */}
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z9CLY22PFG"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z9CLY22PFG');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
