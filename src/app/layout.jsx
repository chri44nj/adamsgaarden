/** Next/React **/
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

/** NPM **/

/** Project Imports **/
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contexts from "./components/Contexts";

export const metadata = {
  title: "Adamsgården",
  description: "Besøg vores hyggelige gårdbutik på Adamsgården, i den idylliske udkant af Jyderup.",
  image: "/pics/linkImage.png",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Contexts>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content={metadata.image} />
          <meta property="og:url" content={typeof window !== "undefined" && window.location.href} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="da_DK" />
          <meta property="og:site_name" content="Adamsgården" />
        </Head>
        <html lang="da">
          <body>
            <Header></Header>
            {children}
            <Analytics />
            <Footer></Footer>
          </body>
        </html>
      </Contexts>
    </>
  );
}
