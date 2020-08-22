import Head from 'next/head';
import Link from 'next/link';
import src from '../images/noodle2.svg';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test | Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src={src} alt="" className={styles.noodle} />

        <Link href="/">
          <a className={styles.link}>Go back</a>
        </Link>
      </main>
    </div>
  );
}
