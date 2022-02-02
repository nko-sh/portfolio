import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Noah Kolossa</title>
                <meta name="description" content="Noah Kolossa" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Maintenance
                </h1>
            </main>
        </div>
    );
};

export default Home;
