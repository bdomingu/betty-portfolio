import Layout from "@/components/Layout";
import styles from './projects.module.css'

export default function Projects() {
    return (
    <Layout>
        <h1>My Projects</h1>
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img src="/images/weather.jpg"/>
                </div>
                <div className={styles.content}>
                    <h2>Forecast with Betty</h2>
                    <p>Simple Weather App created with React</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img src="/images/weather.jpg"/>
                </div>
                <div className={styles.content}>
                    <h2>Forecast with Betty</h2>
                    <p>Simple Weather App created with React</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img src="/images/weather.jpg"/>
                </div>
                <div className={styles.content}>
                    <h2>Forecast with Betty</h2>
                    <p>Simple Weather App created with React</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img src="/images/weather.jpg"/>
                </div>
                <div className={styles.content}>
                    <h2>Forecast with Betty</h2>
                    <p>Simple Weather App created with React</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </Layout>
    )
  }