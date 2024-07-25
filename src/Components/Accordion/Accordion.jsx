import React, { useState, useEffect, useRef } from 'react';
import '../../Components/Accordion/Accordion.scss';
import Arrow from '../../assets/Vector.png';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : "0px";
        }
    }, [isOpen]);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <div className="accordion-item">
            <button onClick={handleToggle} className="accordion-visible">
                <span>{title}</span>
                <img className={isOpen ? "active" : ""} src={Arrow} alt="Toggle Arrow" />
            </button>
            
            <div
                className={`accordion-toggle ${isOpen ? "animated" : ""}`}
                ref={contentRef}
            >
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
};

const Accordion = () => {
    return (
        <div className="accordion">
            <AccordionItem title="Fiabilité" content="Les annonces sur kasa garantissent une fiablité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrements vérifiées par nos équipes." />
            <AccordionItem title="Respect" content="La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme" />
            <AccordionItem title="Services" content="La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />
            <AccordionItem title="Sécurité" content="La sécurité est la priorité de kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établies par nos services. En laissant une note aussi bien à l'hôte qu'à locataire, cela permet à nos équipes de vérifier ques les standards sont bien respectés. Nous organisons égalements des atéliers sur la sécurité domestiques de nos hôtes." />
        </div>
    );
};

export default Accordion;
