import { useEffect } from "react";
import "../styles/globals.css";
import Aos from "aos";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/css/bootstrap.min.css");
  }

  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);
  return <Component {...pageProps} />;
}
