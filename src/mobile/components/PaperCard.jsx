import "./paperCard.css";

const PaperCard = ({paper_number, paper_type, link, date}) => {
  return <div className="paper-card">
    <section>
        <p className="mobile-subTitle">{paper_type} {paper_number}</p>
        <p className="date">{date}</p>
    </section>
    <a className="button" href={link} target="blank" style={{textDecoration: "none"}} >View Paper</a>
  </div>;
};

export default PaperCard;
