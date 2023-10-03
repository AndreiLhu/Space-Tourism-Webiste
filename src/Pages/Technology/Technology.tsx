import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './technology.css';
import data from '../../data/technology.json';
import TechnologyInfo from '../../Components/TechnologyInfo/TechnologyInfo';

const Technology: React.FC = () => {
  const { technology } = data;
  const [technologyId, setTechnologyId] = React.useState<number>(0);

  const onChangeTechnology = React.useCallback((index: number) => {
    setTechnologyId(index);
  }, []);
  return (
    <>
      <div className="technologyBackground">
        <Navbar />
        <div className="mainContentCrewDiv">
          <h1 className="mainTitle">
            <span className="numberTitle">02</span> MEET YOUR CREW
          </h1>
        </div>
        <TechnologyInfo
          name={technology[technologyId].name}
          description={technology[technologyId].description}
          images={technology[technologyId].images.portrait}
        />

        <ul>
          {technology.map((technologyInfo, index) => (
            <button
              key={index}
              onClick={() => onChangeTechnology(index)}
              className="technologyButton"
            >
              {index + 1}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Technology;
