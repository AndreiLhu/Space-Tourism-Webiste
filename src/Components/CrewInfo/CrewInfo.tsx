interface CrewInfoContainerProps {
  name: string;
  role: string;
  bio: string;
}

const CrewInfo = ({ name, role, bio }: CrewInfoContainerProps) => {
  return (
    <div className="mainCrewContainer">
      <div>
        <h2 className="mainCrewtName">{name}</h2>
        <p className="crewDescription">{role}</p>

        <div>
          <div>
            <p className="crewBio">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CrewInfo;
