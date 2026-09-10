import "./fullScreenAlert.css";

const FullScreenAlert = ({title, content, positiveButton, negitiveButton, positive_button_function, negative_button_function}) => {
  return (
    <div className="full-screen-alert">
      <div className="container" style={{width: 300, height: "fit-content", display: "flex", flexDirection: "column", gap: 8, padding: 8, borderRadius: 10}} >
        <h1 className="mobile-subTitle">{title}</h1>
        <p className="date">
          {content}
        </p>
        <section className="buttons" style={{display: "flex"}} >
          <button className="button" onClick={positive_button_function} >{positiveButton}</button>
          <button className="negative-button button" onClick={negative_button_function} >{negitiveButton}</button>
        </section>
      </div>
    </div>
  );
};

export default FullScreenAlert;
