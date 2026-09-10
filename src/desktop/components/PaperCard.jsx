import "./paperCard.css";

const PaperCard = ({number_of_paper, date}) => {
  return (
    <div className="paper-card-desktop">
      <section>
        <p className="mobile-subTitle">Paper number: {number_of_paper}</p>
        <p className="date">{date}</p>
      </section>
      <button className="button">View Paper</button>
    </div>
  );
};

export default PaperCard;
