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
    <div className="main-technology-info-container">
      <div>
        <h4 className="terminology">THE TERMINOLOGY...</h4>
        <h2 className="main-technology-info-name">{name}</h2>
        <p className="description-info">{description}</p>
      </div>
      <img
        alt={`image of the ${name}`}
        src={images}
        className="main-technology-picture"
      />
    </div>
  );
};
export default TechnologyInfo;
