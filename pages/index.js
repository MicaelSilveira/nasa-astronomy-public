import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Feed from "../src/Components/Feed";
import Loading from "../src/Loading";
const Home = ({
  data_Astronomy_day,
  loading_Astronomy_day,
  error_Astronomy_dat,
}) => {
  return (
    <>
      <div>
        <Head>
          <title>Nasa | Home</title>
        </Head>
        <div>
          <Link href="/infor-today/Astronomy-day">
            <a className={styles.today}>
              <h3>Today</h3>
            </a>
          </Link>
        </div>
        {loading_Astronomy_day && <Loading />}
        {error_Astronomy_dat && <h2>{error_Astronomy_dat}</h2>}
        {data_Astronomy_day && (
          <Feed
            data={data_Astronomy_day}
            img={data_Astronomy_day.url}
            descri={
              "For more information about today's post click on Astronomy of the Day"
            }
            dataPost={false}
          />
        )}
      </div>
    </>
  );
};
export default Home;
