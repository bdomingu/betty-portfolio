import { useEffect, useState } from "react";
import styles from './AlphabetSoup.module.css';



const AlphabetSoup = () => {
  const [scattered, setScattered] = useState(false);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  useEffect(() => {
    const letters = document.querySelectorAll('.' + styles.letter ) as NodeListOf<HTMLElement>;
    letters.forEach((letter) => {
      const x = Math.random() * window.innerWidth * .5;
      const y = Math.random() * window.innerHeight * .5;
      letter.style.transform = `translate(${x}px, ${y}px)`;
     
    });

   
    setTimeout(() => {
    letters.forEach((letter) => {
      letter.style.transform = `translate(0, 0)`;
    });
  }, 500);

  setTimeout(() => {
    letters.forEach(letter => {
      letter.style.display = 'inline-block';
    });
  }, 1000);
 
  }, []);

  const scatterLetters = () => {
    const letters = document.querySelectorAll('.' + styles.letter ) as NodeListOf<HTMLElement>;
    letters.forEach((letter) => {
      letter.style.setProperty('--random-x', '0');
      letter.style.setProperty('--random-y', '0');
      const x = Math.random() * window.innerWidth * 1;
      const y = Math.random() * window.innerHeight * 1;
      letter.style.setProperty('--random-x', `${x / window.innerWidth - 0.5}`);
      letter.style.setProperty('--random-y', `${y / window.innerHeight - 0.5}`);
      letter.classList.add(styles.letterScattered);
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
 
  const resetLetters = () => {
    const letters = document.querySelectorAll('.' + styles.letter);

    letters.forEach((letter) => {
      letter.classList.remove(styles.letterScattered);
    })
    console.log('bye')
  }
  return (
    <div>
      <ul className={styles.letterList}>
        {letters.map(letter => (
          <li key={`letter-${letter}`} className={`${styles.letter} ${styles.letterHidden}`}>{letter}</li>
        ))}
      </ul>
      {/* <button onClick={scattered ? resetLetters : scatterLetters}>
          {scattered ? 'Reset' : 'Scatter'}
      </button> */}
    </div>
 
  );

};



export default AlphabetSoup;
