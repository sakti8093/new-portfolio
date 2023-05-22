import React, { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js'

type prop = {
  progress : number,
  color : string
}

const CircularProgressBar:React.FC<prop> = ({ progress,color }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<any>(null);

  useEffect(() => {
    const progressBar = new ProgressBar.Circle(containerRef.current, {
      strokeWidth: 7,
      color: color || '#fff',
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2400,
      text: {
        autoStyleContainer: false,
      },
    });

    progressBar.setText(`${progress}%`);
    progressBar.animate(progress / 100);

    progressBarRef.current = progressBar;

    return () => {
      if(progressBarRef){
        progressBarRef.current.destroy();
      }
    };
  }, [progress]);

  return <div className='relative' ref={containerRef}></div>;
};

export default CircularProgressBar;
