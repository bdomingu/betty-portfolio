import Layout from '@/components/layout';
import styles from './index.module.css';
import Link from 'next/link';
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
      <title>About Page</title>
      <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link 
        href="https://fonts.googleapis.com/css2?family=Courgette&family=Rubik:ital,wght@0,400;0,600;1,600&display=swap" 
        rel="stylesheet"
        />
        
    </Head>
    
  <Layout>
  <div className={styles.container}>
    <img src="/images/homeImage.png" alt='home' className={styles.homeImage} />
    <h1>
      "The beautiful thing about learning is no one can take it away from you" -B.B King
      </h1>
    <ul>
      <li>
        <Link href='/about'>About Me</Link>
      </li>
      <li>
        <Link href='/projects'>Projects</Link>
      </li>
      <li>
        <Link href='/resume'>Resume</Link>
      </li>
    </ul>
  </div>
  </Layout>
  </>
  )
}
