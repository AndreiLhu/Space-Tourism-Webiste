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
          <h1 className="mainTitle">
            <span className="numberTitle">02</span> MEET YOUR CREW
          </h1>
        </div>
        <CrewInfo
          name={crew[crewId].name}
          role={crew[crewId].role}
          bio={crew[crewId].bio}
        />
        <Picture
          className="mainCrewPicture"
          alt={crew[crewId].name}
          pngPicture={crew[crewId].images.png}
          webpPicture={crew[crewId].images.webp}
        />
        <ul>
          {crew.map((crewInfo, index) => (
            <button
              key={index}
              onClick={() => onChangeCrew(index)}
              className="crewButton"
            >
              0
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Crew;
