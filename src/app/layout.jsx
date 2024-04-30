/** Next/React **/
import Head from "next/head";

/** NPM **/

/** Project Imports **/
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contexts from "./components/Contexts";

export const metadata = {
  title: "Adamsgården",
  description: "Besøg vores hyggelige gårdbutik på Adamsgården, i den idylliske udkant af Jyderup.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Contexts>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <html lang="da">
          <body>
            <Header></Header>
            {children}
            <Footer></Footer>
          </body>
        </html>
      </Contexts>
    </>
  );
}
