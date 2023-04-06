import Layout from '@/components/Layout';
import styles from './index.module.css';
import Link from 'next/link';
import AlphabetSoup from '@/components/AlphabetSoup';



export default function Home() {
  return (
    <>
  <Layout>
    <AlphabetSoup/>
  {/* <div className={styles.mainContainer}>
    <div className={styles.imageContainer}>
      <img src='/images/betty.jpg'/>
    </div>
    <div className={styles.textContainer}>
      <h4>Software Developer</h4>
      <h1>Beatriz Dominguez</h1>
      <p>Hey there! Welcome! My name is Beatriz and I am a Texas based Software Developer. Please feel free to explore and don't hesitate to reach out.</p>     
    </div>

  </div> */}
  </Layout>
  </>
  )
}
