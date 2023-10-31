import './crewInfo.css';
interface CrewInfoContainerProps {
  name: string;
  role: string;
  bio: string;
}

const CrewInfo = ({ name, role, bio }: CrewInfoContainerProps) => {
  return (
    <div className="main-crew-container">
      <div>
        <p className="crew-role">{role}</p>
        <h2 className="main-crew-name">{name}</h2>

        <div>
          <p className="crew-bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};
export default CrewInfo;
