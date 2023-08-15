import React, { useEffect } from 'react';

const Datos2019 = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1692064479063');
    const vizElement = divElement.getElementsByClassName('tableauViz')[0];

    vizElement.style.width = '42%';
    vizElement.style.height = `${divElement.offsetWidth * 0.40}px`;

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';

    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div 
    className='tableauPlaceholder' 
    id='viz1692064479063' 
    style={{ 
      position: 'relative',
      display: 'flex',
      justifyContent: 'center', // Centrar horizontalmente
      alignItems: 'center', // Centrar verticalmente
      minHeight: 'calc(100vh - 20px)',
    }}>

      <noscript>
        <a href='#'>
          <img alt='2019 ' src='https://public.tableau.com/static/images/Ma/MapaMZD2019-2020/2019/1_rss.png' style={{ border: 'none' }} />
        </a>
      </noscript>
      <object className='tableauViz' style={{ display: 'none' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='MapaMZD2019-2020/2019' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/Ma/MapaMZD2019-2020/2019/1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='es-ES' />
        <param name='filter' value='publish=yes' />
      </object>
    </div>
  );
};

export default Datos2019;
