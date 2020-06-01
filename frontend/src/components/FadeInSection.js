import React, { useState } from 'react';
import './fadeInSection.css';

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const myVar = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(myVar);
    return () => observer.unobserve(myVar);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}