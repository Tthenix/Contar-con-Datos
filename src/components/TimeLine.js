import React, { useState } from 'react';
import './TimeLine.css';
import Modal from './Modals/Modal';

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
  }

  return (
    <div className="container">
      <div className="main-timeline">
      <div class="timeline">
          <div className="icon">
            <i className="fas fa-calendar"></i>
          </div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('0',' Lic. Carmagnac Sophie; Lic. Pereyra Julieta; Dr. Cervigni Fernando; Dr. Yaciófano Pablo; Lic. Fontanella Carla.', 'Equipo de Cirugía y Rehabilitación de Miembro Superior del Hospital Privado Universitario de Córdoba.')}>
            <div className="date-outer">
              <span className="date">
                <span className="month">PDF</span>
                <span className="year">0</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title  text-white">TRIADA TERRIBLE DE CODO
BILATERAL.</h5>
            <p className="description  text-white">
            REPORTE DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div className="icon">
            <i className="fas fa-calendar"></i>
          </div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('3', 'DR. Andrés Ibarra Grisales; DRA. Marcela Nieva Guzmán; DRA. Laura Andrea Bedoya Garces.', 'Hospital Provincial General Manuel Belgrano')}>
            <div className="date-outer">
              <span className="date">
                <span className="month">PDF</span>
                <span className="year">3</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title  text-white">TUBERCULOSIS DEL CARPO SEGUIMIENTO A UN AÑO.</h5>
            <p className="description  text-white">
            REVISION DE LA LITERATURA, PRESENTACION DE CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('6', 'Sánchez Saba Javier E; Bronenberg Pedro; Abrego Mariano O; Boretto Jorge G. ', 'Hospital Italiano de Buenos Aires ; Instituto de Ortopedia y Traumatología “Carlos E. Ottolenghi”')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">6</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">PSEUDOANEURISMA DE ARTERIA DIGITAL.</h5>
            <p class="description text-white">
            REPORTE DE UN CASO Y REVISION DE BIBLIOGRAFIA.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('9','Bitar L; Paz ML; Rivera Bacile V; Allende C; Soutullo J; Paganini F; Gutiérrez Olivera N','Servicio de Traumatología y Ortopedia- Sanatorio Allende - Córdoba, Capital – Argentina, 2023 ')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">9</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">REDUCCION Y OSTEOSINTESIS CON CALVO ENDOMEDULAR DE UNA FRACTURA PROXIMAL DEL RADIO ASOCIADO A LUXACION LATERAL DE CABEZA RADIAL Y POSTERIOR DE CUBITO PROXIMAL.</h5>
            <p class="description text-white">
            REPORTE DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('10','Hussein Efrain Mahmoud; Paz María Luz; Rivera Bacile Valentin; Peñafort Felipe; Soutullo Jorge;Gutiérrez Olivera Natalia; Paganini Federico; Allende Christian Antonio','Servicio de Traumatología y Ortopedia- Sanatorio Allende - Córdoba, Capital – Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">10</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">ACCIDENTAL USO DEL NERVIO MEDIANO EN EL TRATAMIENTO QUIRURGICO DE LA RIZARTROSIS.</h5>
            <p class="description text-white">
            REPORTE DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('13','Dra. Amanda Quiroga; Dr. Luis Vivas; Dr. Leonardo Ortiz; Dr. Willian Barahona; Dr. Leandro Lasca; Dr. Rodrigo Sepúlveda; Dr. Pablo Di Giacomo; Dr. Enzo Amoroso; Dr. Luis Chavez; Dr. Jorge Comandatore; Dr. Luciano Cannata','NIVEL DE EVIDENCIA: IV')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">13</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">LESIONES TRAUMÁTICAS IFP.</h5>
            <p class="description text-white">
            CLASIFIACION Y OPCIONES TERAPEUTICAS. NUESTRA EXPERIENCIA.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('14', 'Dr. Luis Chavez; Dra. Julieth Vargas; Dr. Willian Barahona; Dr. Leandro Lasca; Dr. Pablo Di Giacomo; Dr. Enzo Amoroso; Dra. Amanda Quiroga; Dr. Jorge Comandatore; Dr. Luciano Cannata','NIVEL DE EVIDENCIA: IV')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">14</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">LUXACIÓN TRAUMÁTICA PURA DE HUESO SEMILUNAR.</h5>
            <p class="description text-white">
            A PROPOSITO DE CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('17','Ramiro Vaccaro M.D; Rellan Ignacio M.D; Agustín G Donndorff M.D.','Hospital Italiano de Buenos Aires.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">17</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">RUPTURA TENDINOSA MULTIPLE LUEGO DE TECNICA RASL PARA EL TRATAMIENTO DE LA DISOCIACION ESCAFO-LUNAR.</h5>
            <p class="description text-white">
          REPORTE DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('18','Magoia Valentina; Teijeiro Gonzalo','Sanatorio Allede - Cordoba - Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">18</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">OSTEOTOMÍAS MÍNIMAMENTE INVASIVAS DE METACARPIANOS FIJADAS CON TORNILLOS ENDOMEDULARES RETRÓGRADOS.</h5>
            <p class="description text-white">
            
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('19','Blazina Beretza; Villella Mariana','Hospital Provincial de Rosario - Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">19</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">LESIÓN DE LIGAMENTO COLATERAL RADIAL DEL PULGAR.</h5>
            <p class="description text-white">
            PRESENTACIÓN DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('20','Olguin María del Pilar; Fisser Juan Manuel; Hourcade Luciana; Pirez Silvina; Duarte Nicolas; Galassi Rodrigo; Schanzembach Mateo; Cuenca Kevin', 'Traumatologia del Comahue, Neuquen Capital.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">20</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">POROMA ECRINO EN CODO.</h5>
            <p class="description text-white">
            REPORTE DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('22','Quintero Alejandro; Vion Pablo; Flynn Guillermo','Sanatorio Anchorena San Martín.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">22</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">ARTROPLASTIA RADIOCUBITAL DISTAL CON PROTESIS PERSONALIZADA IMPRESA EN 3D.</h5>
            <p class="description text-white">
        
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('23','Peralta Javier; Figliuolo Gina; Galarza Pablo; Arrosagaray Rodrigo; Möhlinger Agustin; Alluchon Marcos; Martin Franco','Servicio de OYT - Higa San Felipe - San Nicolas de los Arroyos.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">23</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">LESION DE NERVIO MEDIANO EN PACIENTE PEDIATRICO.</h5>
            <p class="description text-white">
            REPORTE DE CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('24','Peralta Javier; Figliuolo Gina; Galarza Pablo; Arrosagaray Rodrigo; Möhlinger Agustin; Alluchon Marcos; Martin Franco','Servicio de OYT - Higa San Felipe - San Nicolas de los Arroyos.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">24</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">TRATAMIENTO QUIRURGICO DE PSEUDOARTROSIS DE HUMERO DISTAL EN PACIENTE PEDIATRICO.</h5>
            <p class="description text-white">
            A PROPOSITO DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('25','Dra Gibertti Mariana; Dra Kibysz M. Angela','Epsom Clínica Médica.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">25</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">TENDONES DE ARROZ.</h5>
            <p class="description text-white">
           
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('30','Lucena Maximiliano; Barrozo Germán; Castro Juan Manuel','Hospital Español de Mendoza.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">30</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">LESIÓN DE NERVIO INTERÓSEO POSTERIOR POR MORDEDURA DE PERRO.</h5>
            <p class="description text-white">
            PRESENTACIÓN DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('31','Riva Sofia N; Sánchez Bárbara E','Servicio de Ortopedia y Traumatología, Hospital Provincial Neuquén “Dr. Eduardo Castro Rendón”.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">31</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">RECONSTRUCCIÓN DE HERIDA GRAVE DE MANO POR GARLOPA, PRESCINDIENDO DEL USO DE MICROCIRUGIA.</h5>
            <p class="description text-white">
            A PROPÓSITO DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('32','Barrozo Germán; Castro Juan Manuel; Lucena Maximiliano','Hospital Español de Mendoza.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">32</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">LUXACIÓN AISLADA DE ESCAFOIDES.</h5>
            <p class="description text-white">
            REPORTE DE CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('33','Barrozo Germán; Castro Juan Manuel; Lucena Maximiliano','Hospital Español de Mendoza.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">33</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">ROTURA AGUDA DE FLEXOR CARPI RADIALIS COMO COMPLICACIÓN DE FRACTURA CERRADA DE RADIO DISTAL.</h5>
            <p class="description text-white">
            PRESENTACIÓN DE CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('34', 'Sebastian Trindade; Paola del Re; Diego Peralta; Marcela Nieva Guzman; Lenin Estrella; David Arciniegas; Jairo Cristancho; Andres Ibarra', 'Sanatorio Corporacion Medica General San Martin.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">34</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">RECONSTRUCCION DE CAPSULA SUPERIOR CON INJERTO AUTOLOGO DE FASCIA LATA.</h5>
            <p class="description text-white">
            NUESTRA EXPERIENCIA.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('36','Juan Manuel Pino Agudelo; Alberto Salinas; Silverio González Cacheiro; Jorge Agustín Sedano; Hector Marino','Clínica de fracturas y ortopedia. Centro Clínico Quirúrgico.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">36</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">JERSEY FINGER GRADO IV BILATERAL.</h5>
            <p class="description text-white">
            
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('37','Juan Manuel Ayarde; Juan Manuel Pino Agudelo; Alberto Salinas; Jorge Agustín Sedano; Lucas Quiroga','Clínica de fracturas y ortopedia. Centro Clínico Quirúrgico.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">37</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">FRACTURA AISLADA DE TROCLEA HUMERAL(FRACTURA DE LAUGIER).</h5>
            <p class="description text-white">
            REPORTE DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('38','Jorge Agustín Sedano; Alberto Salinas; Juan Manuel Pino Agudelo; Juan Manuel Ayarde; Silverio Gonzalez Cacheiro','Clínica de fracturas y ortopedia. Centro Clínico Quirúrgico.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">38</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">SECCION DEL NERVIO RADIAL ASOCIADA CONFRACTURA CERRADA DE LA DIAFISIS DEL HUMERO.</h5>
            <p class="description text-white">
            PRESENTACION DE CASO Y REVISION DE LA LITERATURA.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('39','Silverio Gonzalez Cacheiro; Alberto Salinas; Juan Manuel Pino Agudelo; Juan Manuel Ayarde; Jorge Agustín Sedano','Clínica de fracturas y ortopedia. Centro Clínico Quirúrgico')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">39</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">FRACTURA POR AVULSION DE LA ESPINA DEL OMOPLATO CON PARALISIS DEL INFRAESPINOSO.</h5>
            <p class="description text-white">
          
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('40','Dra Kibysz M. Angela; Dra Mariana Gibertti','Epson - Clínica Médica.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">40</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">10 AÑOS SIN SIMULAR.</h5>
            <p class="description text-white">
         
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('41','Muratore Álvaro; Chaves Andrea; Viollaz Gonzalo; Teruya Gustavo; Tedeschi Alejandro; Duran Rafael; Gómez Diego','Hospital Británico.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">41</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">OSTEOGENESIS POR DISTRACCION PARA TRATAMIENTO DE CIERRE FISARIO PREMATURO EN RADIO.</h5>
            <p class="description text-white">
            A PROPOSITO DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('44','Agustín Luque; Gabriel Caridi; Gonzalo Mateo; Ignacio Tripiana','Hospital Privado de Comunidad - Mar del Plata, Bs As - Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">44</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">NEUROTIZACIÓN NERVIO AXILAR PARA LESIÓN AISLADA POST LUXACIÓN GLENOHUMERAL ANTERIOR.</h5>
            <p class="description text-white">
            
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('47','Gabriel Caridi; Agustín Luque; Gonzalo Mateo; Ignacio Tripiana','Hospital Privado de Comunidad - Mar del Plata, Bs As - Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">47</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">FRACTURA HUMERAL PERIPROTÉSICA DE CODO:</h5>
            <p class="description text-white">
            TRATAMIENTO CON REVISIÓN DE IMPLANTE Y AUMENTO CON ALOINJERTO ESTRUCTURAL EN UN TIEMPO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('49','Cristaldo Javier; Prevosti Leonardo','Posadas Misiones Argentinas - Servicio de ortopedia y traumotología - Sanatorio integral.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">49</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">ESTABILIZACION DE COMPLICACION POST RESECCION EN CLAVICULA PROXIMAL POR CIRUGIA DE SINDROME DE OPERCULO TORACICO.</h5>
            <p class="description text-white">
            
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('53','Olguin María del Pilar; Fisser Juan Manuel; Hourcade Luciana; Pirez Silvina; Duarte Nicolas; Galassi Rodrigo; Schanzembach Mateo; Cuenca Kevin','Traumatologia del Comahue - Neuquen Capital.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">53</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">UTILIDAD DE LA ARTROSCOPIA EN EL DIAGNOSTICO DE LESIONES DE FIBROCARTILAGO EN COMPARACION CON RESONANCIA MAGNETICA.</h5>
            <p class="description text-white">
            
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('55',' Bustos L; Meléndez J; Suarez F; González L; Villamizar J; Bermúdez w; Asturizaga M; Riva M;Fiminela H; Bernal G','Centro Gallego de Buenos aires.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">55</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">LUXACION PERI LUNAR, LA IMPORTANCIA EN EL MANEJO AGUDO Y TRATAMIENTO DEFINITIVO.</h5>
            <p class="description text-white">
            A PROPOSITO DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('58','Dr Alberto Pérez Castillo','Valdivia, Chile.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">58</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">TRATAMIENTO DE ENFERMEDAD DE PREISER CON OSTEOTOMIA DE ILLARRAMENDI.</h5>
            <p class="description text-white">
            INFORME PRELIMINAR DE UN CASO Y REVISION DE LA LITERATURA.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('59','Sebastian Trindade; Jairo Cristancho; Lenin Estrella; Marcela Nieva; Victor Martinez; David Arciniegas; Edward González; Marilyn Ceballos; Victor Quitora; Marlon Castro','Corporación Medica General San Martin.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">59</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">FRACTURA DE TERCIO MEDIO DE CLAVICULA CON LUXACION IPSILATERAL DE CLAVICULA.</h5>
            <p class="description text-white">
            REPORTE DE UN CASO Y REVISION DE LITERATURA.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('60','Sebastián Trindade; Jairo Cristancho; Lenin Estrella; Marcela Nieva; Víctor Martínez; David Arciniegas; Edward González; Marilyn Ceballos; Deymar Cussi; Gustavo Robalino','Corporación Medica General San Martin.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">60</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">COLGAJO DE GASTROCNEMIO LATERAL COMO COBERTURA DE DEFECTO EN RODILLA.</h5>
            <p class="description text-white">
            REPORTE DE CASO MAS REVISION DE LA LITERATURA.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('63','Oswaldo Bravo Fernández; Jorge Esteban López González; Jorge Sebastián Pacios; Joaquín Urpi; Jorge Elias Avendaño','SANATORIO DEL NORTE- TUCUMÁN.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">63</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">TROMBOSIS DE VENA SUBCLAVIA POR LUXACION ESTERNOCLAVICULAR POSTERIOR.</h5>
            <p class="description text-white">
           
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('66',' Sebastian Trindade; Marcela Nieva Guzman; Deymar Cussi Cruz; Edward Gonzalez Ramirez; Paola Del Re; Lenin Estrella; Jairo Cristancho; Victor Quitora','Sanatorio Corporacion Medica General San Martin.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">66</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">TRATAMIENTO DE PANDIAFISITIS Y PSEUDOARTROSIS INFECTADA DE RADIO CON ALOINJERTO CADAVERICO.</h5>
            <p class="description text-white">
            REPORTE DE CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('67','Rivera Bacile Valentin; Paz Maria Luz; Peñafort Felipe; Martinez Matías; Gutierrez Olivera Natalia; Allende Christian','Servicio de Traumatología y Ortopedia- Instituto Allende - Sanatorio Allende - Córdoba, Capital – Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">67</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">ANTIBIOTICO TOPICO LOCAL EN PSEUDOARTROSIS DE HUESOS LARGOS DE MIEMBRO SUPERIOR.</h5>
            <p class="description text-white">
            
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('68','Peñafort Felipe; Paz María Luz; Rivera Valentín; Martínez Matías; Gutiérrez Natalia; Allende Christian','Servicio de Traumatología y Ortopedia- Instituto Allende - Sanatorio Allende - Córdoba – Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">68</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">REIMPLANTE DE PULGAR EN NIÑA DE 22 MESES CON 27 HORAS DE ISQUEMIA.</h5>
            <p class="description text-white">
           
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('69','Rviera Bacile Valentin; Paz Maria Luz; Peñafort Felipe; Martinez Matías; Gutierrez Olivero Natalia; Allende Christian','Servicio de Traumatología y Ortopedia - Instituto Allende - Sanatorio Allende – Córdoba – Argentina')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">69</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">UTILIZACION DE ALOINJERTO OSEO EN PSEUDOARTROSIS DE HÚMERO.</h5>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('70','Martinez Matías; Rivera Bacile Valentin; Paz Maria Luz; Peñafort Felipe; Gutierrez Olivera Natalia; Allende Christian','Servicio de Traumatología y Ortopedia - Instituto Allende - Sanatorio Allende – Córdoba – Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">70</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">PSEUDOARTROSIS SEGMENTARIA DE HÚMERO.</h5>
            <p class="description text-white">
       
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('73','Fernández Ezequiel; Piedrafita Lucía; Fernández Emmanuel; Salinas Sebastián','HIGA San Martín de La Plata, Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">73</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">FRACTURA CONJUNTA DE HUESOS GRANDE Y PIRAMIDAL.</h5>
            <p class="description text-white">
            
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('74',' Vélez Manuel; Gardenal Martín; López Lucía; Lopérgolo Fernando; Savino Paola; Gómez Crespo José; Slullitel Miguel; Capomassi Miguel','Ortopedia y traumatología Intituto Dr. Jaime Slullitel - MSR Miembro Superior Rosario.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">74</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">OSTEOTOMIAS CORRECTIVAS EN CONSOLIDACION VICIOSA DE FALANGES.</h5>
            <p class="description text-white">
            ASISTIDO POR PLANIFICACION VIRTUAL Y GUIADO 3D ESPECIFICAS.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('77','Paz María Luz; Rivera Bacile Valentin; Peñaford Felipe; Martínez Matías; Gutiérrez Olivera Natalia; Allende Christian','Servicio de Traumatología y Ortopedia - Instituto Allende - Sanatorio Allende – Córdoba – Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">77</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">TRATAMIENTO QUIRURGICO VS ORTOPEDICO EN FRACTURAS METAFISARIAS EXTRAARTICULARES DEL TERCIO DISTAL DEL HUMERO.</h5>
            <p class="description text-white">
            
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('80','San Roque M; Morano G; Mazola M; Rey A','Climba - Centro de Traumatrología.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">80</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">ALTERNATIVA DE TRATATAMIENTO EN LA RECONSTRUCCION DE AMPUTACION DE PULGAR.</h5>
            <p class="description text-white">
            REPORTE DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('81','Dr Martín Zamora; Dr Matías Fracalossi','MANHO – Traumatología del hombro a la mano.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">81</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">EVALUACION DE LA LOCALIZACION Y ORIGEN DE QUISTES ARTROSINOVIALES DE MUÑECA MEDIANTE RESONANCIA MAGNETICA:</h5>
            <p class="description text-white">
            UN ESTUDIO RETROSPECTIVO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('82','Fracalossi NM; Zamora M','MANHO - Traumatología de Hombro a Mano.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">82</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">ETIOLOGIA INUSUAL DEL DOLOR CUBITAL DE MUÑECA:</h5>
            <p class="description text-white">
            TENDINITIS CALCIFICADA AGUDA DE CUBITAL ANTERIOR - REPORTE DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('83','Morano Gabriel; Ferraguti Solange; Rincón Felipe; Massun Nicolas; Pueyrredon Honorio; Melo Marcelo','Hospital de Clínicas “José de San Martin” UBA - Buenos Aires - Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">83</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">FRACTURA DE TRAPEZOIDE DERECHO.</h5>
            <p class="description text-white">
            REPORTE DE CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('85','Ávila S; Viollaz G; Muratore A; Teruya G; Gomez D; Tedeschi A; Duran R','Hospital Británico.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">85</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">SECCION IATROGENICA DEL NERVIO MEDIANO DURANTE LA LIBERACION DEL TUNEL CARPIANO.</h5>
            <p class="description text-white">
            REPORTE DE CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('91','Morano Gabriel; Belzino Mauro; Ferraguti Solange; Rincón Felipe; Massun Nicolas; Carrera Pereyra Pilar','Hospital de Clínicas “José de San Martin” UBA.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">91</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">TRANSFERENCIA TENDINOSA SECUNDARIA A LESION DE NERVIO RADIAL IZQUIERDO POSTERIOR A RESECCION ONCOLOGICA DE CONDROSARCOMA DE CONDILO HUMERAL.</h5>
            <p class="description text-white">
            REPORTE DE CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('93','Leandro Navarta; Pablo Asid; Romina P.Torre; Enrique Pereira; Santiago Argüelles; Eric Christophersen; Juan C. Cagnone; Lee Jao','FellowshipBA – Sanatorio Finochietto - BUENOS AIRES - ARGENTINA.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">93</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">LUXACIÓN ESTERNOCLAVICULAR POSTERIOR:</h5>
            <p class="description text-white">
            REPORTE DE 3 CASOS.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('95','Obaid Mariano Julián; Ramacciotti Alejandro','Servicio de Ortopedia y Traumatología. Hospital Privado de Rosario. Centro de Ortopedia y Traumatologia. Rosario. Santa Fe. Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">95</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">NEUROTUBULIZACION CON POLITETRAFLUOROETILENO EXPANDIDO (PTFE).</h5>
            <p class="description text-white">
       
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('96','Paz María Luz; Rivera Bacile Valentin; Peñaford Felipe; Martínez Matías; Gutiérrez Olivera Natalia; Allende Christian','Servicio de Traumatología y Ortopedia- Instituto Allende - Sanatorio Allende - Córdoba, Capital – Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">96</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">EXTENSIÓN DEL TALLO HUMERAL EN ARTROPLASTIA DE CODO UTILIZANDO CLAVOS DE KUNTSCHER.</h5>
            <p class="description text-white">
         
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('97','Autor: Obaid Mariano Julián - Coautor: Ramacciotti Alejandro','Hospital Privado de Rosario. Centro de Ortopedia y Traumatologia. Rosario. Santa Fe. Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">97</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">CODO TRAUMATICO GRAVE ESTRATEGIA PARA PROVEER RESTITUCION FUNCIONAL.</h5>
            <p class="description text-white">
            FRACTURA INTRAARTICULAR EXPUESTA CON DEFICIT DE STOCK OSEO E INESTABILIDAD MULTIDIRECCIONAL.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('100','Balderrama Handy; Warner Alan; Morano Gabriel; Ferraguti Solange; Carrera Pilar; Pueyrredon Honorio; Melo Marcelo','Hospital de Clínicas “José de San Martin” UBA.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">100</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">AUSENCIA DE EXTENSOR PROPIO DEDO INDICE DERECHO.</h5>
            <p class="description text-white">
            PRESENTACION DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('101','Dra. Fernandez Sofia; Dr. Caloia Martín; Dr. Chamorro Gerónimo; Dr. Ronconi Sergio; Dra. Muñoz Mariana; Dr. González Scotti Diego; Dr. Meritano Alejandro; Dra. Serur María Emilia; Dr. Caloia Hugo','Sector de Cirugía del Miembro Superior - Servicio de Ortopedia y Traumatología. Hospital Universitario Austral. Buenos Aires , Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">101</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">SPRING WIRE PARA FRACTURAS INESTABLES DE CLAVICULA DISTAL.</h5>
            <p class="description text-white">
            REPORTE DE NUEVA TECNICA QUIRURGICA -  A PROPOSITO DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('102','Bustos L; Suarez F; Meléndez J; González L; Villamizar J; Bermúdez W; Asturizaga M; Riva M; Fiminela H; Bernal G','Centro Gallego de Buenos aires.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">102</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">ARTRODESIS RADIOCARPIANA CON CLAVIJAS EN CASOS DE ARTROSIS DE MUÑECA ASOCIADO A UNA LUXACION PERILUNAR.</h5>
            <p class="description text-white">
            OPCIÓN DE TRATAMIENTO - REPORTE DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('104','Dr. Gorki Soria; Dr. Geovany Cuc; Dra. Lisette Tosini; Dr. Fernando Menvielle; Dr. Diego Garat; Dr. Sergio Daroda; Dr. Rodolfo Cosentino; Dr. Paul Pereira','Fellowship.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">104</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">MICROCIRUGÍA.</h5>
            <p class="description text-white">
            LA PRÁCTICA HACE AL MAESTRO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('105','Cuestas Nicolás; Douglas Price Ana L.; Oyhamburu María E.; Torre María C.; Urlacher Matías E.; Blanchetiere Hernán E.','Hospital General de Agudos Juan A. Fernández - Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">105</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">SINDROME DE KILOH-NEVIN.</h5>
            <p class="description text-white">
            A PROPOSITO DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('107','Urlacher Matías E.; Torre María C.; Cuestas Nicolás; Oyhamburu María E.; Douglas Price Ana L.; Blanchetiere Hernán E.','Hospital General de Agudos Juan A. Fernández - Argentina.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">107</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">SINOVIOSARCOMA DE HOMBRO.</h5>
            <p class="description text-white">
            A PROPOSITO DE UN CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('109','Dr Caloia Martin; Dr Ronconi Sergio Emanuel; Dr Casen Infante Franco Gabriel','Hospital Universitario Austral. Sanatorio Mater Dei - Argentina - Buenos Aires.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">109</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">ARTRITIS SÉPTICA DE MUÑECA POST REPARACIÓN DE FIBROCARTÍLAGO TRIANGULAR.</h5>
            <p class="description text-white">
            REPORTE DE CASO.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('112','Yenni Guerra Pavez; Felipe Pizarro Amigo; José Maldonado Escandón; José Cifras Vignolo; Hernán Jara Barril','Médico Residente Traumatología Universidad Católica del Maule, Chile - Docente Universidad Católica del Maule, Chile.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">112</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">SINDROME DE CAPUT ULNAE CON ROTURA CRONICA CERRADA DE LOS TENDONES EXTENSORES DEL CUARTO Y QUINTO RAYO.</h5>
            <p class="description text-white">
            TRANSFERENCIA TENDINOSA BAJO WALANT.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('113','Yaciófano Pablo; Cervigni Fernando; Carmagnac Sophie; Fontanella Carla; Pereyra Julieta','Equipo de Cirugía y Rehabilitación de Miembro Superior. Hospital Privado Universitario de Córdoba.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">113</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">COLGAJO EN HELICE DE ARTERIA PERFORANTE DORSAL EN LESION TRAUMATICA DE PULPEJO DIGITAL.</h5>
            <p class="description text-white">
           
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('114','Yenni Guerra Pavez; Felipe Pizarro Amigo; José Maldonado Escandón; José Cifras Vignolo; Hernán Jara Barril',' Médico Residente Traumatología Universidad Católica del Maule, Chile - Docente Universidad Católica del Maule, Chile.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">114</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">LESION PSEUDOTUMORAL DEL APARATO EXTENSOR DEL DEDO MEDIO.</h5>
            <p class="description text-white">
          
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div className="date-content" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleIconClick('115','Yenni Guerra Pavez; Felipe Pizarro Amigo; José Maldonado Escandón; José Cifras Vignolo; Hernán Jara Barril',' Médico Residente Traumatología Universidad Católica del Maule, Chile - Docente Universidad Católica del Maule, Chile.')}>
            <div class="date-outer">
              <span class="date">
                <span class="month">PDF</span>
                <span class="year">115</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title text-white">MANEJO DE ULCERA DIGITAL POR ESCLEROSIS SISTEMICA CUTANEA LOCALIZADA CON SIMPATECTOMIA DE ARTERIA RADIAL Y CUBITAL.</h5>
            <p class="description text-white">
            
            </p>
          </div>
        </div>


      </div>
      <Modal
        year={selectedYear}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedTitle}
        description={selectedDescription}
      />
    </div>
  );
};

export default LineaDeTiempo;