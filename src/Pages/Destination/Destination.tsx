import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './destination.css';
import data from '../../data/destinations.json';
import Picture from '../../Components/Picture/Picture';
import DestinationsInfo from '../../Components/DestinationsInfo/DestinationsInfo';
import MobileNavbar from '../../Components/MobileNavbar/MobileNavbar';

const Destination: React.FC = () => {
  const { destinations } = data;
  const [planetId, setPlanetId] = React.useState<number>(0);

  const onChangePlanet = React.useCallback((index: number) => {
    setPlanetId(index);
  }, []);

  return (
    <div className="destination-background">
      <Navbar />
      <MobileNavbar />
      <div className="main-content-div">
        <div className="first-div-container">
          <h1 className="main-title">
            <span className="number-title">01</span> PICK YOUR DESTINATION
          </h1>

          <Picture
            className="main-destination-picture"
            alt={destinations[planetId].name}
            pngPicture={destinations[planetId].images.png}
            webpPicture={destinations[planetId].images.webp}
          />
        </div>
        <div className="destination-info-container">
          <ul className="planets-name-buttons-container">
            {destinations.map((planetInfo, index) => (
              <button
                key={index}
                onClick={() => onChangePlanet(index)}
                className="planets-name-button"
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
