import { useState, useEffect } from 'react';
import ReactFlipCard from 'reactjs-flip-card';

import { LETTER_STATUS } from 'constants/types';

import './styles.css';
import LetterInput from '../LetterInput';

const styles = {
  container: { height: '50px', width: '50px' },
  correct: { backgroundColor: LETTER_STATUS.correct.color },
  incorrect: { backgroundColor: LETTER_STATUS.incorrect.color },
  misplaced: { backgroundColor: LETTER_STATUS.misplaced.color },
};

const loadingWords = [
  {
    back: 'L',
    front: 'M',
    backStyle: styles.correct,
    frontStyle: styles.correct,
  },
  {
    back: 'O',
    front: 'A',
    backStyle: styles.incorrect,
    frontStyle: styles.correct,
  },
  {
    back: 'A',
    front: 'N',
    backStyle: styles.misplaced,
    frontStyle: styles.correct,
  },
  {
    back: 'D',
    front: 'U',
    backStyle: styles.correct,
    frontStyle: styles.correct,
  },
  {
    back: 'I',
    front: 'F',
    backStyle: styles.incorrect,
    frontStyle: styles.correct,
  },
  {
    back: 'N',
    front: 'A',
    backStyle: styles.misplaced,
    frontStyle: styles.correct,
  },
  {
    back: 'G',
    front: 'C',
    backStyle: styles.correct,
    frontStyle: styles.correct,
  },
  {
    back: '.',
    front: 'T',
    backStyle: styles.incorrect,
    frontStyle: styles.correct,
  },
  {
    back: '.',
    front: 'U',
    backStyle: styles.misplaced,
    frontStyle: styles.correct,
  },
  {
    back: '.',
    front: 'R',
    backStyle: styles.correct,
    frontStyle: styles.correct,
  },
  {
    back: '.',
    front: 'A',
    backStyle: styles.incorrect,
    frontStyle: styles.correct,
  },
];

const Loading = () => {
  const [flipped, setFlipped] = useState(Array(loadingWords.length).fill(false));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeoutRef, setTimeoutRef] = useState(null);

  useEffect(() => {
    if (!timeoutRef) {
      const newTimeoutRef = setTimeout(() => {
        const newFlipped = [...flipped];
        newFlipped[currentIndex] = !newFlipped[currentIndex];
        setFlipped(newFlipped);
        setCurrentIndex(prevValue => (prevValue < loadingWords.length - 1 ? prevValue + 1 : 0));
        setTimeoutRef(null);
      }, 100);
      setTimeoutRef(newTimeoutRef);
    }
    return () => clearTimeout(timeoutRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeoutRef]);

  return (
    <div className="loading-container">
      {loadingWords.map(({ front, back, frontStyle, backStyle }, index) => (
        <ReactFlipCard
          key={`${front}-${back}-${index}`}
          containerStyle={styles.container}
          flipTrigger="disabled"
          flipByProp={flipped[index]}
          frontComponent={<LetterInput value={front} disabled style={frontStyle} />}
          backComponent={<LetterInput value={back} disabled style={backStyle} />}
        />
      ))}
    </div>
  );
};

export default Loading;
