import "../styles/globals.css";
import Header from "../src/Components/Header";
import { API_ASTRONOMY_DAY } from "../src/api";
import React from "react";
import Footer from "../src/Components/Footer";
import useFetch from "../src/Hooks/useFetch";
function MyApp({ Component, pageProps }) {
  const { request, dataFetch, loadingFetch, error } = useFetch();
  React.useEffect(() => {
    async function requestAstronomyDay() {
      await request(API_ASTRONOMY_DAY);
    }
    requestAstronomyDay();
  }, []);
  return (
    <>
      <Header />
      <Component
        data_Astronomy_day={dataFetch}
        loading_Astronomy_day={loadingFetch}
        error_Astronomy_dat={error}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
