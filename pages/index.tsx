import Layout from '@/components/Layout';
import styles from './index.module.css';
import Link from 'next/link';
import AlphabetSoup from '@/components/AlphabetSoup';



export default function Home() {
  return (
    <>
  <Layout>
    <AlphabetSoup/>
 
  </Layout>
  </>
  )
}
