import React, { useState } from 'react'; 
import Layout from "@/components/Layout";
import styles from './projects.module.css'
import Modal from '@/components/ProjectModal';
import projectsData from '../public/projectsData';

interface Project {
    id: number,
    title: string,
    shortSummary: string,
    summary: string, 
    stack: string[],
    thumbnail:string,
    image: string,
    purpose: string,
    problems: string,
    lessonsLearned: string,
}

export default function Projects() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project>({
        id: 0,
        title: '',
        shortSummary: '',
        summary: '',
        stack: [''],
        thumbnail: "",
        image: '',
        purpose: '',
        problems: '',
        lessonsLearned: ''
      });

    const onRequestClose = () => {
        setShowModal(false)
    }

    const handleClick = (project: Project) => {
        setSelectedProject(project);
        setShowModal(true);
    }


    return (
    <Layout>
        <h1>My Projects</h1>
        <div className={styles.container}>
            {projectsData.map((project) => (
                   <div className={styles.box}>
                   <div className={styles.imgBox}>
                       <img src={project.thumbnail}/>
                   </div>
                   <div className={styles.content}>
                       <h2>{project.title}</h2>
                       <p>{project.shortSummary}</p>
                       <a className={styles.readMore} onClick={() => handleClick(project)}>Read More</a>
                       <a className={styles.repository} href="https://github.com/bdomingu/Weather-Site">Repository</a>
                  </div>
               </div>
            ))}
        </div>
        <Modal showModal={showModal} onRequestClose={onRequestClose} selectedProject={selectedProject}/>
    </Layout>
    )
  }