import type { NextPage } from "next";
import Head from "next/head";
import Paragraph from "../components/paragraph";
import Title from "../components/title";
import styles from "../styles/Home.module.css";

const PAGE_TITLE = "Phone Coop: Recyclez votre téléphone";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title level={1}>{PAGE_TITLE}</Title>
        <Paragraph>
          Le principe est simple, je rempli le formulaire, j&quot;obtiens un
          ticket que je peux utiliser pour déposer mon téléphone usage sur une
          borne de recyclage et obtenir un bon d&quot;achat pour un téléphone
          responsable (ex FairPhone).
        </Paragraph>
        <Title level={2}>Je complète le formulaire</Title>
      </main>
    </div>
  );
};

export default Home;
