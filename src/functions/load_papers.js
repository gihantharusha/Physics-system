import load_chart_data from "./load_chart_data";

const load_papers = async (uid) => {
  const data = await load_chart_data(uid);

  const paper_no = data.paper_no_array;

  const common_link_part = "https://drive.google.com/file/d/1OgNcsB2avOpyqmoXcyImsyzCwNZb_Ntb/view?usp=drive_link"
};

export default load_papers;
