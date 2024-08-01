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

const Accordion = ({ items }) => {
    const defaultItems = [
        { title: "Fiabilité", content: "Les annonces sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
        { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
        { title: "Services", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
        { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
    ];

    const accordionItems = items || defaultItems;

    return (
        <div className="accordion">
            {accordionItems.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;

