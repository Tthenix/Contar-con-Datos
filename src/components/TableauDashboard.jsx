import React, { useEffect } from 'react';

const TableauDashboard2017y2018 = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1691716587005');
    const vizElement = divElement.getElementsByTagName('object')[0];

    vizElement.style.width = '100%';
    vizElement.style.height = `${divElement.offsetWidth * 0.8}px`;

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    return () => {
      // Clean up
      vizElement.parentNode.removeChild(scriptElement);
    };
  }, []);

  return (
    <div className='tableauPlaceholder' id='viz1691716587005' style={{ position: 'relative' }}>
      <noscript>
        <a href='#'>
          <img
            alt='2017'
            src='https://public.tableau.com/static/images/Ma/MapaMZD2017-2018/2017/1_rss.png'
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object
        className='tableauViz'
        style={{ display: 'none' }}
        data-testid='tableauObject'
      >
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='MapaMZD2017-2018/2017' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param
          name='static_image'
          value='https://public.tableau.com/static/images/Ma/MapaMZD2017-2018/2017/1.png'
        />
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

export default TableauDashboard2017y2018;

