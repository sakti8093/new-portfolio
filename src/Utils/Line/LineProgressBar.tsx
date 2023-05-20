import React, { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';

const LineProgressBar = ({ progress,color }) => {
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = new ProgressBar.Line(containerRef.current, {
      strokeWidth: 1.20,
      color: color,
      easing: 'easeInOut',
      duration: 2800,
      text: {
        autoStyleContainer: false,
      },
      trailWidth: 1.72,
      svgStyle: {
        width: '100%',
        height: '100%',
        borderRadius:'20px',
        stroke :'#eee',
      },
      step: (_state, bar) => {
        bar.setText(progress + ' %');
      },
    });

    progressBar.animate(progress / 100);
    progressBarRef.current = progressBar;

    return () => {
      progressBarRef.current.destroy();
    };
  }, [progress]);

  return <div className='line' ref={containerRef}></div>;
};

export default LineProgressBar;
