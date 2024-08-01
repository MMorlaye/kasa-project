import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/data.json';
import Carrousel from '../../Components/Carrousel/Carrousel';
import Accordion from '../../Components/Accordion/Accordion';
import Host from '../Utils/Host/HostName/';
import '../LogementDetails/LogementDetails.scss';

const LogementDetails = () => {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);
  
    if (!logement) {
      return <div>Logement non trouvé</div>;
    }
  
    return (
      <div className="logement-details">
        <Carrousel pictures={logement.pictures} className="pictures"/>
        <div className="logement-info">
          <div className="left-column">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            
          </div>
          <div className="right-column">
            <div className="host-info">
              <div className='element'>
                  <Host fullName={logement.host.name} /> 
                  <img src={logement.host.picture} alt={logement.host.name} className="host-picture" /> 
              </div>            
              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < logement.rating ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
            </div>           
          </div>
        </div>
        <div className="accordion-container">
                <Accordion items={[{title: 'Description', content: logement.description}]} className="accordion"/>
                <Accordion items={[{title: 'Équipements', content: logement.equipments.join(', ')}]} className="accordion"/>
        </div> 
      </div>
    );
  };
  
  export default LogementDetails;