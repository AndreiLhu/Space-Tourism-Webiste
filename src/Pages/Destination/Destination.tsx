import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './destination.css';
import data from '../../data/destinations.json';
import Picture from '../../Components/Picture/Picture';
import DestinationsInfo from '../../Components/DestinationsInfo/DestinationsInfo';

const Destination: React.FC = () => {
  const { destinations } = data;
  const [planetId, setPlanetId] = React.useState<number>(0);

  const onChangePlanet = React.useCallback((index: number) => {
    setPlanetId(index);
  }, []);

  return (
    <div className="destinationBackground">
      <Navbar />
      <div className="mainContentDiv">
        <div className="firstDivContainer">
          <h1 className="mainTitle">
            <span className="numberTitle">01</span> PICK YOUR DESTINATION
          </h1>

          <Picture
            className="mainDestinationPicture"
            alt={destinations[planetId].name}
            pngPicture={destinations[planetId].images.png}
            webpPicture={destinations[planetId].images.webp}
          />
        </div>
        <div className="destinationInfoContainer">
          <ul className="planetsNameButtonsContainer">
            {destinations.map((planetInfo, index) => (
              <button
                key={index}
                onClick={() => onChangePlanet(index)}
                className="planetsNameButton"
              >
                {planetInfo.name.toUpperCase()}
              </button>
            ))}
          </ul>
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
