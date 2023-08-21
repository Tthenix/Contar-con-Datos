import React, { useEffect } from 'react';

const MapaPrincipal2017 = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1692062799122');
    const vizElement = divElement.getElementsByTagName('object')[0];

    vizElement.style.width = '27rem';
    vizElement.style.height = '35rem';

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';

    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div
      className='tableauPlaceholder '
      id='viz1692062799122'
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center', // Centrar horizontalmente
        alignItems: 'center', // Centrar verticalmente

      }}>
      <noscript>
        <a>
          <img alt='2017' src='https://public.tableau.com/static/images/Ma/MapaMZD2017-2019/2017/1_rss.png' style={{ border: 'none' }} />
        </a>
      </noscript>
      <object className='tableauViz' style={{ display: 'none' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='MapaMZD2017-2019/2017' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/Ma/MapaMZD2017-2019/2017/1.png' />
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

export default MapaPrincipal2017;
