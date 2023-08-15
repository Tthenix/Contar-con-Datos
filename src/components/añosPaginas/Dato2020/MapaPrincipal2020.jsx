import React, { useEffect } from 'react';

const MapaPrincipal2020 = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1692056584191');
    const vizElement = divElement.getElementsByTagName('object')[0];
    
    vizElement.style.width = '46%';
    vizElement.style.height = `${divElement.offsetWidth * 0.40}px`;

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div 
    className='tableauPlaceholder' 
    id='viz1692056584191' 
    style={{ 
      position: 'relative',
      display: 'flex',
      justifyContent: 'center', // Centrar horizontalmente
      alignItems: 'center', // Centrar verticalmente
      minHeight: 'calc(100vh - 20px)',
    }}>
      <noscript>
        <a href='#'>
          <img alt='2020' src='https://public.tableau.com/static/images/Ma/MapaMZD2020-2021/2020/1_rss.png' style={{ border: 'none' }} />
        </a>
      </noscript>
      <object className='tableauViz' style={{ display: 'none' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='MapaMZD2020-2021/2020' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/Ma/MapaMZD2020-2021/2020/1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='es-ES' />
      </object>
    </div>
  );
};

export default MapaPrincipal2020;

