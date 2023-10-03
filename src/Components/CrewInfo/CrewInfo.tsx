import './crewInfo.css';
interface CrewInfoContainerProps {
  name: string;
  role: string;
  bio: string;
}

const CrewInfo = ({ name, role, bio }: CrewInfoContainerProps) => {
  return (
    <div className="mainCrewContainer">
      <div>
        <p className="crewRole">{role}</p>
        <h2 className="mainCrewName">{name}</h2>

        <div>
          <p className="crewBio">{bio}</p>
        </div>
      </div>
    </div>
  );
};
export default CrewInfo;
