import { Header } from './components/Header';
import { Tip } from './components/Tips';
import { Letter } from './components/Letter';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { LettersUsed } from './components/LettersUsed';
import styles from './app.module.css';
import { WORDS } from './utils/words';
import type { Challenge } from './utils/words';
import { useState, useEffect } from 'react';
import type { LetterUsedProps } from './components/LettersUsed';
export default function App() {
  const [score, setScore] = useState(0);
  const [atempts, setAtempts] = useState(0);
  const [letter, setLetter] = useState('');
  const [lettersUsed, setLettersUsed] = useState<LetterUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  function handleOnRestartGame() {
    alert('Reiniciar o jogo');
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);

    setAtempts(0);
    setLetter('');
  }

  function handleConfirm() {
    if (!challenge) {
      return null;
    }
    if (!letter.trim()) {
      return alert('Digite uma letra');
    }

    const value = letter.toUpperCase();
    const exists = lettersUsed.find((used) => used.value.toUpperCase() === value);

    if (exists) {
      return alert(`Você já utilizou a letra ${value}`);
    }

    const hits = challenge.word
      .toUpperCase()
      .split('')
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setLettersUsed((prevState) => [...prevState, { value, correct }]);
    setScore(currentScore);
    setLetter('');
  }

  useEffect(() => {
    startGame();
  }, []);

  if (!challenge) {
    return null;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleOnRestartGame} />
        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split('').map(() => (
            <Letter value="" />
          ))}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}
