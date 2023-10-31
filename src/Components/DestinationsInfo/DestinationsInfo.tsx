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
    <div className="main-container">
      <div>
        <h2 className="main-planet-name">{name}</h2>
        <p className="planet-description">{description}</p>

        <div>
          <div className="description-line"></div>
          <div className="distance-container">
            <div>
              <h4 className="distance-subtitle">AVG. DISTANCE</h4>
              <p className="distance-value">{distance.toLocaleUpperCase()}</p>
            </div>

            <div className="travel-time-div">
              <h4 className="distance-subtitle">EST. TRAVEL TIME</h4>
              <p className="distance-value">{travelTime.toLocaleUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationsInfo;
