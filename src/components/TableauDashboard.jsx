import React, { useEffect } from 'react';

const TableauDashboard = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1691677385654');
    const vizElement = divElement.getElementsByTagName('object')[0];

    // No es necesario el ajuste de tamaño para modo escritorio

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    return () => {
      // Elimina el controlador de eventos y otros en el cleanup si es necesario
    };
  }, []);
  

  return (
    <div className="tableauPlaceholder" id="viz1691677385654" style={{ position: 'relative' }}>
      <noscript>
        <a href="#">
          <img
            alt="Dashboard 1"
            src="https://public.tableau.com/static/images/Ma/MapaMDZ2017/Dashboard1/1_rss.png"
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: 'none', width: '100%', height: '727px' }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="MapaMDZ2017/Dashboard1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value="https://public.tableau.com/static/images/Ma/MapaMDZ2017/Dashboard1/1.png" />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="es-ES" />
      </object>
    </div>
  );
};

export default TableauDashboard;
