import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './destination.css';
import data from '../../data/destinations.json';
import Picture from '../../Components/Picture';
import DestinationsInfo from '../../Components/DestinationsInfo';

const Destination: React.FC = () => {
  const { destinations } = data;
  const [planetId, setPlanetId] = React.useState<number>(0);

  const onChangePlanet = React.useCallback((index: number) => {
    setPlanetId(index);
  }, []);

  return (
    <div className="destinationBackground">
      <Navbar />
      <h1 className="mainTitle">01 Pick your destination</h1>
      <ul>
        {destinations.map((planetInfo, index) => (
          <button key={index} onClick={() => onChangePlanet(index)}>
            {planetInfo.name}
          </button>
        ))}
      </ul>

      <div>
        <Picture
          alt={destinations[planetId].name}
          pngPicture={destinations[planetId].images.png}
          webpPicture={destinations[planetId].images.webp}
        />
        <div className="destinationInfoContainer">
          <DestinationsInfo
            name={destinations[planetId].name}
            description={destinations[planetId].description}
            distance={destinations[planetId].distance}
            travelTime={destinations[planetId].travel}
          />
        </div>
      </div>
    </div>
  );
};
export default Destination;
