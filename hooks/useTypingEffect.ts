import { useState, useEffect } from 'react';

export const useTypingEffect = (words: string[], typeSpeed = 100, deleteSpeed = 50, delay = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(currentText => 
        isDeleting 
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(currentLoopNum => currentLoopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, words, typeSpeed, deleteSpeed, delay]);

  return text;
};