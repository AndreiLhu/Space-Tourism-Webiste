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
    <div className="mainTechnologyContainer">
      <div>
        <h2 className="mainTechnologyName">{name}</h2>
        <p className="descriptionInfo">{description}</p>
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
