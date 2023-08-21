import React, { useEffect } from 'react';

const VID2018 = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1692127018944');
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '25rem';
    vizElement.style.height = '33rem';

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);


  }, []);

  return (
    <div className='tableauPlaceholder' id='viz1692127018944' style={{ position: 'relative' }}>
      <noscript>
        <a>
          <img
            alt='VID'
            src='https://public.tableau.com/static/images/VI/VID2018/VID1/1_rss.png'
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object
        className='tableauViz'
        style={{ display: 'none' }}
        data-testid='tableauViz'
      >
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='VID2018/VID1' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param
          name='static_image'
          value='https://public.tableau.com/static/images/VI/VID2018/VID1/1.png'
        />
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

export default VID2018;
