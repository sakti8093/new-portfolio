import  React, { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';

type prop = {
  progress : number,
  color : string
}

const LineProgressBar:React.FC<prop>  = ({ progress,color }) => {
  const containerRef = useRef<any>(null);
  const progressBarRef = useRef<any>(null);

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
    });
    
    progressBar.setText(`${progress}%`);
    progressBar.animate(progress / 100);
   if(progressBarRef.current){
    progressBarRef.current = progressBar;
   }

    return () => {
      progressBarRef.current.destroy();
    };
  }, [progress]);

  return <div className='line' ref={containerRef}></div>;
};

export default LineProgressBar;
