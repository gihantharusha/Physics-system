import "./paperCard.css";

const PaperCard = ({paper_number, date}) => {
  return <div className="paper-card">
    <section>
        <p className="mobile-subTitle">Paper number: {paper_number}</p>
        <p className="date">{date}</p>
    </section>
    <button className="button">View Paper</button>
  </div>;
};

export default PaperCard;
