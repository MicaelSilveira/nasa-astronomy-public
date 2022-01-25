import "../styles/globals.css";
import Header from "../src/Components/Header";
import { API_ASTRONOMY_DAY } from "../src/api";
import React from "react";
import Footer from "../src/Components/Footer";
function MyApp({ Component, pageProps }) {
  const [data_Astronomy_day, setAstronomy_day] = React.useState(null);
  React.useEffect(() => {
    async function request() {
      const response = await fetch(API_ASTRONOMY_DAY);
      const data = await response.json();
      setAstronomy_day(data);
    }
    request();
  }, []);
  return (
    <>
      <Header />
      <Component data_Astronomy_day={data_Astronomy_day} {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
