interface PlanetInfoContainerProps {
  name: string;
  image?: string;
  description: string;
  distance: string;
  travelTime?: string;
}

const DestinationsInfo = ({
  name,
  // image,
  description,
  distance,
  travelTime,
}: PlanetInfoContainerProps) => {
  return (
    <div>
      {/* <img src={image} alt={name} /> */}

      <div>
        <h2>{name}</h2>
        <p>{description}</p>

        <div>
          <div>
            <h4>Avg. distance</h4>
            <p>{distance}</p>
          </div>

          <div>
            <h4>Est. travel time</h4>
            <p>{travelTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationsInfo;
