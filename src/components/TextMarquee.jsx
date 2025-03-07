'use client';
import { motion } from 'framer-motion';

export default function ScrollBaseAnimation({ children, baseVelocity = 2, clasname }) {
    return (
      <div className="relative overflow-hidden flex flex-nowrap">
        <motion.div
          className="flex whitespace-nowrap gap-10 flex-nowrap"
          animate={{ x: ['0%', '-100%'] }}  // Adjust to scroll from left to right seamlessly
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 100, // Adjust the speed of the scroll here
              ease: 'linear',
            },
            
          }}
         
        >
          <span className={clasname}>{children}</span>
          <span className={clasname}>{children}</span>
          <span className={clasname}>{children}</span>
          <span className={clasname}>{children}</span>
        </motion.div>
      </div>
    );
  }
  