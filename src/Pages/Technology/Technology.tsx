import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './technology.css';
import data from '../../data/technology.json';
import TechnologyInfo from '../../Components/TechnologyInfo/TechnologyInfo';
import MobileNavbar from '../../Components/MobileNavbar/MobileNavbar';

const Technology: React.FC = () => {
  const { technology } = data;
  const [technologyId, setTechnologyId] = React.useState<number>(0);

  const onChangeTechnology = React.useCallback((index: number) => {
    setTechnologyId(index);
  }, []);
  return (
    <>
      <div className="technology-background">
        <Navbar />
        <MobileNavbar />
        <h1 className="main-technology-title">
          <span className="number-technology-title">03</span> SPACE LAUNCH 101
        </h1>
        <div className="main-content-technology-div">
          <ul className="technology-button-container">
            {technology.map((technologyInfo, index) => (
              <button
                key={index}
                onClick={() => onChangeTechnology(index)}
                className="technology-button"
              >
                {index + 1}
                <div className="technology-info-hiding">
                  {technologyInfo.description}
                </div>
              </button>
            ))}
          </ul>

          <TechnologyInfo
            name={technology[technologyId].name}
            description={technology[technologyId].description}
            images={technology[technologyId].images.portrait}
          />
        </div>
      </div>
    </>
  );
};
export default Technology;
