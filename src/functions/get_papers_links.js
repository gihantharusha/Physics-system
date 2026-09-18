import { load_papers_links } from "../services/firestore"

const get_papers_links = async(uid)=>{

    const res = await load_papers_links(uid)
    console.log(res)
    const links = res.map(e=>({
        link: e.data().link,
        paper_no: e.data().paper_no,
        paper_type: e.data().paper_type,
        date: e.data().date
    }))

    console.log(links)
    
    return links
}

export default get_papers_links