import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import propertiesData from '../../Data/data.json';
import Card from '../../Components/Card/card';
import Banner from '../../Components/Banner/banner';
import '../../Components/Banner/banner.scss';
import '../../Components/Card/card.scss';



const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" />
      <div className="cards-container">
        {properties.map((property, index) => (
          <Link key={index} to={`/logement/${property.id}`}>
            <Card
              cover={property.cover}
              title={property.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
