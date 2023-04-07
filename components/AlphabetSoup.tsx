import { useEffect, useState } from "react";
import styles from './AlphabetSoup.module.css';



const AlphabetSoup = () => {
  const [scattered, setScattered] = useState(false);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const message = ['Beatriz Dominguez', 'Software Developer', 'Welcome! Please feel free to explore and do not hesistate to reach out.'];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const generateNewMessage = () => {
    const quotes = [
      '"The beautiful thing about learning is nobody can take it away from you." -B.B King'
    ]
  }
  
  useEffect(() => {
    const elements = document.querySelectorAll('.' + styles.letter + ', .' + styles.message) as NodeListOf<HTMLElement>;
    const delay = 50;
    elements.forEach((element, index) => {
      const x = Math.random() * window.innerWidth * 1;
      const y = Math.random() * window.innerHeight * 1;
      element.style.transform = `translate(${x}px, ${y}px)`;
      setTimeout(() => {
        element.style.transition = `transform 0.5s ease-out`;
        element.style.transform = `translate(-50%, -50%)`;
      }, (index + 1) * delay);
    });

   

  setTimeout(() => {
    elements.forEach(element => {
      element.style.transform = '';
    });
  }, 500);
 
  }, []);

  const scatterLetters = () => {
    const elements = document.querySelectorAll('.' + styles.letter + ', .' + styles.message ) as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      element.style.setProperty('--random-x', '0');
      element.style.setProperty('--random-y', '0');
      const x = Math.random() * window.innerWidth * 1;
      const y = Math.random() * window.innerHeight * 1;
      element.style.setProperty('--random-x', `${x / window.innerWidth}`);
      element.style.setProperty('--random-y', `${y / window.innerHeight}`);
      element.classList.add(styles.letterScattered);
    });
  };

  useEffect(() => {
    scatterLetters();
  }, []);

  useEffect(() => {
    if (scattered) {
      scatterLetters();
    }
  }, [scattered]);
 
  // const resetLetters = () => {
  //   const letters = document.querySelectorAll('.' + styles.letter);

  //   letters.forEach((letter) => {
  //     letter.classList.remove(styles.letterScattered);
  //   })
  //   console.log('bye')
  // }
  return (
    <div className={styles.elementContainer}>
      <div className={`${styles.message}`}>
        <h2 className={styles.name}>{message[0]}</h2>
        <h2 className={styles.title}>{message[1]}</h2>
        <h2 className={styles.welcome}>{message[2]}</h2>
      </div>
      <ul className={styles.elementList}>
        {letters.map(letter => (
          <li key={`letter-${letter}`} className={`${styles.letter}`}>{letter}</li>
        ))}
      </ul>
      
      {/* <button onClick={scattered ? resetLetters : scatterLetters}>
          {scattered ? 'Reset' : 'Scatter'}
      </button> */}
    </div>
 
  );

};



export default AlphabetSoup;
