import { get_marks_from_uid } from "../services/firestore";

const load_chart_data = async (uid) => {
  const result = await get_marks_from_uid(uid);
  const paper_array = result.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // set_marks(marks_array)

  const marks_array = paper_array.map((paper) => paper.marks);

  const paper_no_array = paper_array.map(paper=>paper.paper_no)

  const avg_array = paper_array.map(paper=>paper.avg)

  const rank_array = paper_array.map(paper=>paper.rank)

  const paper_type = paper_array.map(paper=>paper.paper_type)

  return {
    marks_array,
    paper_no_array,
    avg_array,
    rank_array,
    paper_type
  }
};

export default load_chart_data;
