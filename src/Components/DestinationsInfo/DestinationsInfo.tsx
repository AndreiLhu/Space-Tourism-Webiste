import './destinationsInfo.css';

interface PlanetInfoContainerProps {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
}

const DestinationsInfo = ({
  name,
  description,
  distance,
  travelTime,
}: PlanetInfoContainerProps) => {
  return (
    <div className="mainContainer">
      <div>
        <h2 className="mainPlanetName">{name}</h2>
        <p className="planetDescription">{description}</p>

        <div>
          <div className="descriptionLine"></div>
          <div className="distanceContainer">
            <div>
              <h4 className="distanceSubtitle">AVG. DISTANCE</h4>
              <p className="distanceValue">{distance.toLocaleUpperCase()}</p>
            </div>

            <div>
              <h4 className="distanceSubtitle">EST. TRAVEL TIME</h4>
              <p className="distanceValue">{travelTime.toLocaleUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationsInfo;
