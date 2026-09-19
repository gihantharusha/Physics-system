import PersonIcon from "../Assets/Icons/person.svg";
import StarIcon from "../Assets/Icons/star.svg";

const PersonCard = ({ place, top_place, name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 130,
        height: 230,
        border: "1px solid var(--glass-effect)",
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-between",
        boxShadow: place === 1 ? "0 0 20px var(--yellow-color)" : "none",
      }}
    >
      <div
        style={{
          alignSelf: "start",
          justifySelf: "top",
          backgroundColor: "var(--primary-color)",
          padding: 8,
          width: 30,
          height: 40,
          borderRadius: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {place}
      </div>

      <div
        style={{
          backgroundColor: "var(--background-color)",
          width: 80,
          borderRadius: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <img src={PersonIcon} alt="person icon" style={{ width: 70 }} />
      </div>
      <h1
        className="mobile-title"
        style={{ alignSelf: "center", textAlign: "center" }}
      >
        {name}
      </h1>
      {top_place ? (
        <div style={{ display: "flex", gap: 10 }}>
          <img src={StarIcon} alt="star icon" style={{ width: 30 }} />
          <img src={StarIcon} alt="star icon" style={{ width: 30 }} />
          <img src={StarIcon} alt="star icon" style={{ width: 30 }} />
        </div>
      ) :   (
        <img src={StarIcon} alt="star icon" style={{ width: 30 }} />
      )}
    </div>
  );
};

export default PersonCard;
