const ErrorAlert = ({ alert }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--red-color)",
        height: "fit-content",
        padding: 8,
        borderRadius: 10
      }}
    >
      <p>{alert}</p>
    </div>
  );
};

export default ErrorAlert;
