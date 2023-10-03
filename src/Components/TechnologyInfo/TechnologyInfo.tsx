import './technologyInfo.css';
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
    <div className="mainTechnologyInfoContainer">
      <div>
        <h4 className="terminology">THE TERMINOLOGY...</h4>
        <h2 className="mainTechnologyInfoName">{name}</h2>
        <p className="descriptionInfo">{description}</p>
      </div>
      <img
        alt={`image of the ${name}`}
        src={images}
        className="mainTechnologyPicture"
      />
    </div>
  );
};
export default TechnologyInfo;
