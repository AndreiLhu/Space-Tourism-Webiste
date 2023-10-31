import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './crew.css';
import data from '../../data/crew.json';
import Picture from '../../Components/Picture/Picture';
import './crew.css';
import CrewInfo from '../../Components/CrewInfo/CrewInfo';
import MobileNavbar from '../../Components/MobileNavbar/MobileNavbar';
const Crew: React.FC = () => {
  const { crew } = data;
  const [crewId, setCrewId] = React.useState<number>(0);

  const onChangeCrew = React.useCallback((index: number) => {
    setCrewId(index);
  }, []);

  return (
    <>
      <div className="crew-background">
        <MobileNavbar />
        <Navbar />
        <div className="main-content-crew-div">
          <div className="crew-info-container">
            <h1 className="main-title crew-title">
              <span className="number-title">02</span> MEET YOUR CREW
            </h1>

            <CrewInfo
              role={crew[crewId].role.toLocaleUpperCase()}
              name={crew[crewId].name}
              bio={crew[crewId].bio}
            />
            <ul>
              {crew.map((crewInfo, index) => (
                <button
                  key={index}
                  onClick={() => onChangeCrew(index)}
                  className="crew-button"
                >
                  <div className="crew-button-circle">
                    <div className="crew-info-hiding">{crewInfo.bio}</div>
                  </div>
                </button>
              ))}
            </ul>
          </div>
          <div>
            <Picture
              className="mainCrewPicture"
              alt={crew[crewId].name}
              pngPicture={crew[crewId].images.png}
              webpPicture={crew[crewId].images.webp}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Crew;
