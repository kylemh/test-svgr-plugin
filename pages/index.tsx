import Head from 'next/head';
import Noodle from '../images/noodle.svg';
// import { Noodle2 } from '../images/noodle2.svg';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Noodle className={styles.noodle} />
        {/* <img src={Noodle2 as string} alt="" className={styles.noodle} /> */}
      </main>
    </div>
  );
}
