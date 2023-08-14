import React, { useState } from 'react';
import './TimeLine.css';
import Modal from './modal';

const LineaDeTiempo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');

  const handleIconClick = (year, title, description) => {
    setSelectedYear(year);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setModalOpen(true);
  };

  return (
    <div className="container">
      <div className="main-timeline">
        <div className="timeline">
          <div className="icon">
            <i className="fas fa-calendar"></i>
          </div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('Daño de granizos a cultivos Mendocinos en el año 2017', 'Tecnolog. Inform. y Telecomunic. Mendoza - DACC - SEA', '')}>
            <div className="date-outer">
              <span className="date">
                <span className="month">Año</span>
                <span className="year">2017</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">GRANIZO - CAMPAÑA AGRICOLA 2017-2018</h5>
            <p className="description">
              La información manifestada en el mapa interactivo presentado, cita los datos extraídos de una fuente oficial y se encuentra medida en hectáreas. La tonalidad de los colores demuestra las distintas graduaciones del daño acontecido, según su gravedad.
            </p>
          </div>
        </div>

        <div class="timeline">
                    <div class="icon"></div>
                    <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('Daño de granizos a cultivos Mendocinos en el año 2018', 'Tecnolog. Inform. y Telecomunic. Mendoza - DACC - SEA', '.')}>
                        <div class="date-outer">
                            <span class="date">
                                <span class="month">Año</span>
                                <span class="year">2018</span>
                            </span>
                        </div>
                    </div>
                    <div class="timeline-content">
                        <h5 class="title">GRANIZO - CAMPAÑA AGRICOLA 2018-2019</h5>
                        <p class="description">
                        La información manifestada en el mapa interactivo presentado, cita los datos extraídos de una fuente oficial y se encuentra medida en hectáreas. La tonalidad de los colores demuestra las distintas graduaciones del daño acontecido, según su gravedad.
                        </p>
                    </div>
        </div>

        <div class="timeline">
                    <div class="icon"></div>
                    <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('Daño de granizos a cultivos Mendocinos en el año 2019', 'Tecnolog. Inform. y Telecomunic. Mendoza - DACC - SEA', '.')}>
                        <div class="date-outer">
                            <span class="date">
                                <span class="month">Año</span>
                                <span class="year">2019</span>
                            </span>
                        </div>
                    </div>
                    <div class="timeline-content">
                        <h5 class="title">GRANIZO - CAMPAÑA AGRICOLA 2019-2020</h5>
                        <p class="description">
                        La información manifestada en el mapa interactivo presentado, cita los datos extraídos de una fuente oficial y se encuentra medida en hectáreas. La tonalidad de los colores demuestra las distintas graduaciones del daño acontecido, según su gravedad.
                        </p>
                    </div>
        </div>

        <div class="timeline">
                    <div class="icon"></div>
                    <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('Daño de granizos a cultivos Mendocinos en el año 2020', 'Tecnolog. Inform. y Telecomunic. Mendoza - DACC - SEA', '.')}>
                        <div class="date-outer">
                            <span class="date">
                                <span class="month">Año</span>
                                <span class="year">2020</span>
                            </span>
                        </div>
                    </div>
                    <div class="timeline-content">
                        <h5 class="title">GRANIZO - CAMPAÑA AGRICOLA 2020-2021</h5>
                        <p class="description">
                        La información manifestada en el mapa interactivo presentado, cita los datos extraídos de una fuente oficial y se encuentra medida en hectáreas. La tonalidad de los colores demuestra las distintas graduaciones del daño acontecido, según su gravedad.
                        </p>
                    </div>
        </div>

        <div class="timeline">
                    <div class="icon"></div>
                    <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('Daño de granizos a cultivos Mendocinos en el año 2021', 'Tecnolog. Inform. y Telecomunic. Mendoza - DACC - SEA', '.')}>
                        <div class="date-outer">
                            <span class="date">
                                <span class="month">Año</span>
                                <span class="year">2021</span>
                            </span>
                        </div>
                    </div>
                    <div class="timeline-content">
                        <h5 class="title">GRANIZO - CAMPAÑA AGRICOLA 2021-2022</h5>
                        <p class="description">
                        La información manifestada en el mapa interactivo presentado, cita los datos extraídos de una fuente oficial y se encuentra medida en hectáreas. La tonalidad de los colores demuestra las distintas graduaciones del daño acontecido, según su gravedad.
                        </p>
                    </div>
        </div>
        
        </div>
        <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        year={selectedYear}
        title={selectedTitle}
        description={selectedDescription}
      />
    </div>
  );
};

export default LineaDeTiempo;