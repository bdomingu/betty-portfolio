import ReactModal from "react-modal";
import styles from './ProjectModal.module.css';

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

ReactModal.setAppElement('#__next');

interface ModalProps {
    showModal: boolean;
    onRequestClose: () => void;
    selectedProject: Project;
}

export default function ProjectModal({showModal, onRequestClose, selectedProject}: ModalProps) {

    return (
     <ReactModal
      className={styles.modal} 
      isOpen={showModal}
      overlayClassName={styles.overlay}
      >
        <a className={styles.closeButton} onClick={onRequestClose}>
            <span className="material-symbols-outlined">close</span>
        </a>
         <div className={styles.container}>
            <div className={styles.title}>
                <h1>{selectedProject.title}</h1>
                <p>{selectedProject.summary}</p>
            </div>
            <div className={styles.stack}>
                <h3 >Stack</h3>
                {selectedProject?.stack.map((item) => (
                <li>{item}</li>
                ))}
            </div>
            <div className={styles.image}>
                <img src={selectedProject.image} />
            </div>
             <div className={styles.purpose}>
                <h3>Project Purpose</h3>
                <p>{selectedProject.purpose}</p>
            </div>
            <div className={styles.problems}>
                <h3>Challenges</h3>
                <p>{selectedProject.problems}</p>
            </div>
            <div className={styles.lessons}>
                <h3>Lessons learned</h3>
                <p>{selectedProject.lessonsLearned}</p>
            </div>
        </div>
   </ReactModal>
    )
    
}