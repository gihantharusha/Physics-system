import VerifiedIcon from "../Assets/Icons/verified.svg"

const VerifiedBadge = () => {
  return (
    <div style={{
        backgroundColor: "var(--green-color)",
        borderRadius: 10,
        display: "flex",
        padding: 2,
        border: "none",
        gap: 2,
        alignItems: "center"
    }} >
        <img src={VerifiedIcon} alt="verified icon" style={{width: 30}}/>
        <p>Verified</p>
    </div>
  )
}

export default VerifiedBadge