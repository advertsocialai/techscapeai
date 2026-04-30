import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Smooth spring physics for the cursor movement
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Define which tags should trigger the large circle (Headings and Paragraphs)
      const isTextTag = /^(H[1-6]|P)$/.test(target.tagName);
      
      // Ensure it is NOT inside a button, anchor, or nav element to meet your condition
      const isInteractive = target.closest('a') || target.closest('button') || target.closest('nav');

      if (isTextTag && !isInteractive) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center transition-all duration-300 ease-out"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        mixBlendMode: 'difference', 
        backgroundColor: isHovering ? 'white' : 'transparent',
        border: '1px solid white',
        // The circle only expands if isHovering is true (Headings/Paragraphs only)
        width: isHovering ? 80 : 20,
        height: isHovering ? 80 : 20,
      }}
    />
  );
}