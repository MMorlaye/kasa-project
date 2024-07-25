import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/banner';
import '../../Components/Banner/banner.scss';
import '../../Components/Card/card.scss'
import propertiesData from '../../Data/data.json';
import Card from '../../Components/Card/card';


const Home = () => {
    const [properties, setProperties] = useState([])
    useEffect(() => {
        setProperties(propertiesData);
      }, []);

  return (
    <div>
        <Banner text="Chez vous, partout et ailleurs" />
        <div className="cards-container">
            {properties.map((property, index) => (
            <Card
                key={index}
                cover={property.cover}
                title={property.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

