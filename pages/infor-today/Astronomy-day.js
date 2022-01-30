import React from "react";
import Feed from "../../src/Components/Feed";
import Head from "next/head";

const AstronomyDay = ({ data_Astronomy_day }) => {
  return (
    <>
      <div>
        <Head>
          <title>Nasa | Today</title>
        </Head>
        {data_Astronomy_day && (
          <Feed
            data={data_Astronomy_day}
            img={data_Astronomy_day.url}
            descri={data_Astronomy_day.explanation}
            dataPost={data_Astronomy_day.date}
          />
        )}
      </div>
    </>
  );
};

export default AstronomyDay;
