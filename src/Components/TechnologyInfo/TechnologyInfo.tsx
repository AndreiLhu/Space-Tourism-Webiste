interface TechnologyInfoContainerProps {
  name: string;
  description: string;
  images: string;
}

const TechnologyInfo = ({
  name,
  description,
  images,
}: TechnologyInfoContainerProps) => {
  return (
    <div className="mainCrewContainer">
      <div>
        <h2 className="mainCrewName">{name}</h2>
        <p className="crewDescription">{description}</p>
        <img
          alt={`image of the ${name}`}
          src={images}
          className="mainTechnologyPicture"
        />
      </div>
    </div>
  );
};
export default TechnologyInfo;
