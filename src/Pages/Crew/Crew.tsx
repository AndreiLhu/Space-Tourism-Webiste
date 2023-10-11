import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './crew.css';
import data from '../../data/crew.json';
import Picture from '../../Components/Picture/Picture';
import './crew.css';
import CrewInfo from '../../Components/CrewInfo/CrewInfo';
const Crew: React.FC = () => {
  const { crew } = data;
  const [crewId, setCrewId] = React.useState<number>(0);

  const onChangeCrew = React.useCallback((index: number) => {
    setCrewId(index);
  }, []);

  return (
    <>
      <div className="crewBackground">
        <Navbar />
        <div className="mainContentCrewDiv">
          <div className="crewInfoContainer">
            <h1 className="mainTitle crewTitle">
              <span className="numberTitle">02</span> MEET YOUR CREW
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
                  className="crewButton"
                >
                  <div className="crewButtonCircle"></div>
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
