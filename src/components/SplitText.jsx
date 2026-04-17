import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ children, className }) => {
  const words = children.split(' ');

  return (
    <div className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.2em]">
          {word.split('').map((char, j) => (
            <motion.span
              key={j}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: (i * 0.1) + (j * 0.05),
                ease: [0.22, 1, 0.36, 1]
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
