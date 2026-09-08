import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "./components/Header";

const GA_MEASUREMENT_ID = "G-81YNQHXKT4";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tire Town Distributors Ltd. — Authorized CEAT Semi-Truck & Trailer Tires",
  description: "Sole authorized CEAT dealer in Canada. Premium semi-truck & trailer tires for long haul, drive & all-wheel applications. Fast quotes, expert support, Canadian shipping.",
  keywords: ["CEAT tires", "semi-truck tires", "trailer tires", "commercial tires", "truck tires Canada", "long haul tires", "CEAT dealer"],
  authors: [{ name: "Tire Town Distributors Ltd." }],
  openGraph: {
    title: "Tire Town Distributors Ltd. — Authorized CEAT Semi-Truck & Trailer Tires",
    description: "Sole authorized CEAT dealer in Canada. Premium semi-truck & trailer tires for long haul, drive & all-wheel applications.",
    url: "https://tiretown.ca/",
    siteName: "Tire Town Distributors",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tire Town Distributors Ltd. — Authorized CEAT Semi-Truck & Trailer Tires",
    description: "Sole authorized CEAT dealer in Canada. Premium semi-truck & trailer tires for long haul, drive & all-wheel applications.",
  },
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://tiretown.ca/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yf5owwnlxy");
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Tire Town Distributors Ltd.",
              "image": "https://tiretown.ca/images/logo.png",
              "description": "Sole authorized CEAT dealer in Canada. Premium semi-truck & trailer tires for long haul, drive & all-wheel applications.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA"
              },
              "telephone": "+1-403-969-3600",
              "email": "info@tiretown.ca",
              "url": "https://tiretown.ca/",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 08:00-17:00",
              "areaServed": {
                "@type": "Country",
                "name": "Canada"
              }
            })
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
