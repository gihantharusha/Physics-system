import "./paperCard.css";

const PaperCard = ({number_of_paper, paper_type, link, date}) => {
  return (
    <div className="paper-card-desktop">
      <section>
        <p className="mobile-subTitle">{paper_type} {number_of_paper}</p>
        <p className="date">{date}</p>
      </section>
      <a className="button" style={{textDecoration: "none"}} href={link} target="blank" >View Paper</a>
    </div>
  );
};

export default PaperCard;
