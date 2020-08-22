import Head from 'next/head';
import Link from 'next/link';
import { ReactComponent as Noodle } from '../images/noodle.svg';
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

        <Link href="/test">
          <a className={styles.link}>Go to svg as img src example</a>
        </Link>
      </main>
    </div>
  );
}
