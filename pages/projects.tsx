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
                    <p>Simple Weather App created with React and WeatherStack API.</p>
                    <a className={styles.readMore} href="#">Read More</a>
                    <a className={styles.repository} href="https://github.com/bdomingu/Weather-Site">Repository</a>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img src="/images/task.png"/>
                </div>
                <div className={styles.content}>
                    <h2>Todo App</h2>
                    <p>Full stack Todo App created with React, Express, Node and MongoDB.</p>
                    <a className={styles.readMore} href="#">Read More</a>
                    <a className={styles.repository} href="https://github.com/bdomingu/TodoApp-MongoDB">Repository</a>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img src="/images/movie.png"/>
                </div>
                <div className={styles.content}>
                    <h2>Movie Search Engine</h2>
                    <p>Movie search engine created with React and Movie DB API</p>
                    <a className={styles.readMore} href="#">Read More</a>
                    <a className={styles.repository} href="https://github.com/bdomingu/Movie-Search-Engine">Repository</a>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img src="/images/grades.png"/>
                </div>
                <div className={styles.content}>
                    <h2>Teacher Portal</h2>
                    <p>Full stack application created with React, Express, Node, and MySQL.</p>
                    <a className={styles.readMore} href="#">Read More</a>
                    <a className={styles.repository} href="https://github.com/bdomingu/Teacher-Portal">Repository</a>
                </div>
            </div>
        </div>
    </Layout>
    )
  }