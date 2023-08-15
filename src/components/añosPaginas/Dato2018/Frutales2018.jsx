import React, { useRef, useEffect } from 'react';
import tableau from 'tableau-api';

const Frutales2018 = () => {
  const vizContainerRef = useRef(null);

  useEffect(() => {
    const vizUrl = 'https://public.tableau.com/views/Frutales2018/Frutales1';
    const vizOptions = {
      hideTabs: true,
      hideToolbar: false,
    };

    const initViz = () => {
      const containerDiv = vizContainerRef.current;
      const viz = new tableau.Viz(containerDiv, vizUrl, vizOptions);
    };

    const resizeViz = () => {
      const containerDiv = vizContainerRef.current;
      const viz = containerDiv.querySelector('iframe');

      if (viz) {
        const aspectRatio = 0.75;
        const width = containerDiv.offsetWidth;
        const height = width * aspectRatio;
        viz.style.width = width + 'px';
        viz.style.height = height + 'px';
      }
    };

    initViz();
    resizeViz();

    window.addEventListener('resize', resizeViz);

    return () => {
      window.removeEventListener('resize', resizeViz);
    };
  }, []);

  return (
    <div ref={vizContainerRef} className="tableauPlaceholder" style={{ position: 'relative' }}>
      {/* Fallback content */}
      <noscript>
        <a href="#">
          <img
            alt="Frutales"
            src="https://public.tableau.com/static/images/Fr/Frutales2018/Frutales1/1_rss.png"
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
    </div>
  );
};
export default Frutales2018;