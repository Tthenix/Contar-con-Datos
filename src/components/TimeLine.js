import React, { useState } from 'react';
import './TimeLine.css';
import Modal from './modal'; // Asegúrate de que estas rutas sean correctas
import Modal1 from './modal1';

const LineaDeTiempo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [selectedModalType, setSelectedModalType] = useState(null);

  const handleIconClick = (year, title, description, modalType) => {
    setSelectedYear(year);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setSelectedModalType(modalType);
    setModalOpen(true);
  };


  return (
    <div className="container">
      <div className="main-timeline">
        <div class="timeline">
          <div className="icon">
            <i className="fas fa-calendar"></i>
          </div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('Daño de granizos a cultivos Mendocinos en el año 2017', 'Tecnolog. Inform. y Telecomunic. Mendoza - DACC - SEA')}>
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
        {selectedModalType === 'Modal' && (
        <Modal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
          year={selectedYear}
          title={selectedTitle}
          description={selectedDescription}
        />
      )}

        {selectedModalType === 'Modal' && (
        <Modal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
          year={selectedYear}
          title={selectedTitle}
          description={selectedDescription}
        />
      )}

        {selectedModalType === 'Modal1' && (
          <Modal1
            isOpen={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
            year1={selectedYear}
            title1={selectedTitle}
            description1={selectedDescription}
          />
        )}
      </div>
  );
};

export default LineaDeTiempo;