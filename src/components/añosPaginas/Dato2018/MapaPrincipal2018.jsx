import React, { useEffect } from 'react';

function MapaPrincipal2018() {
    
    useEffect(() => {
        const divElement = document.getElementById('viz1692115089188');
        const vizElement = divElement.getElementsByTagName('object')[0];

        vizElement.style.width = '100%';
        vizElement.style.height = `${divElement.offsetWidth * 0.75}px`;

        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }, []);

    return (
        <div className='tableauPlaceholder' id='viz1692115089188' style={{ position: 'relative' }}>
            <noscript>
                <a href='#'>
                    <img
                        alt='2018'
                        src='https://public.tableau.com/static/images/Ma/MapaMZD2018-2019/2018/1_rss.png'
                        style={{ border: 'none' }}
                    />
                </a>
            </noscript>
            <object
                className='tableauViz'
                style={{ display: 'none' }}
                data-host_url='https%3A%2F%2Fpublic.tableau.com%2F'
                data-embed_code_version='3'
                data-site_root=''
                data-name='MapaMZD2018-2019/2018'
                data-tabs='no'
                data-toolbar='yes'
                data-static_image='https://public.tableau.com/static/images/Ma/MapaMZD2018-2019/2018/1.png'
                data-animate_transition='yes'
                data-display_static_image='yes'
                data-display_spinner='yes'
                data-display_overlay='yes'
                data-display_count='yes'
                data-language='es-ES'
            />
        </div>
    );
}

export default MapaPrincipal2018;