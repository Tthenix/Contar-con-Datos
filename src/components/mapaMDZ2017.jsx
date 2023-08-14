import React, { useEffect } from 'react';

const TableauEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='tableauPlaceholder' id='viz1691973356700' style={{ position: 'relative' }}>
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
        data-name='MapaMZD2017-2018/2017'
        data-tabs='no'
        data-toolbar='yes'
        data-static_image='https://public.tableau.com/static/images/Ma/MapaMZD2017-2018/2017/1.png'
        data-animate_transition='yes'
        data-display_static_image='yes'
        data-display_spinner='yes'
        data-display_overlay='yes'
        data-display_count='yes'
        data-language='es-ES'
      ></object>
    </div>
  );
};

export default TableauEmbed;
