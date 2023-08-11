import React, { useState } from 'react';
import './TimeLine.css';
import Modal from './modal'; // Ajusta la ruta según tu estructura

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
                        {/* Aquí puedes colocar el contenido de tu icono */}
                        <i className="fas fa-calendar"></i>
                    </div>
                    <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('2017', 'Visual Art & Design', 'Descripción del año 2013')}>
                        <div className="date-outer">
                            <span className="date">
                                <span className="month">2017 y 2018</span>
                                <span className="year">Info </span>
                            </span>
                        </div>
                    </div>
                    <div className="timeline-content">
                        <h5 className="title">Años 2017 y 2018</h5>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat
                            volutpat. Aenean interdum finibus efficitur. Praesent dapibus
                            dolor felis, eu ultrices elit molestie.
                        </p>
                    </div>
                </div>

                <div class="timeline">
                    <div class="icon"></div>
                    <div class="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('2013', 'Visual Art & Design', 'Descripción del año 2013')}>
                        <div class="date-outer">
                            <span class="date">
                                <span class="month">1 Years</span>
                                <span class="year">2015</span>
                            </span>
                        </div>
                    </div>
                    <div class="timeline-content">
                        <h5 class="title">Product Designer</h5>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                        </p>
                    </div>
                </div>

                <div class="timeline">
                    <div class="icon"></div>
                    <div class="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('2013', 'Visual Art & Design', 'Descripción del año 2013')}>
                        <div class="date-outer">
                            <span class="date">
                                <span class="month">2 Years</span>
                                <span class="year">2016</span>
                            </span>
                        </div>
                    </div>
                    <div class="timeline-content">
                        <h5 class="title">Web Designer</h5>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                        </p>
                    </div>
                </div>

                <div class="timeline">
                    <div class="icon"></div>
                    <div class="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('2013', 'Visual Art & Design', 'Descripción del año 2013')}>
                        <div class="date-outer">
                            <span class="date">
                                <span class="month">2 Years</span>
                                <span class="year">2018</span>
                            </span>
                        </div>
                    </div>
                    <div class="timeline-content">
                        <h5 class="title">Graphic Designer</h5>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                        </p>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                year={selectedYear}
                title={selectedTitle}
                description={selectedDescription}
            />
        </div>
    );
};
export default LineaDeTiempo; 