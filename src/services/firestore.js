// import { doc, setDoc, collection } from "firebase/firestore"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../Firebase.js";

const register_user = async (user, uid) => {
  const student_collection = collection(db, "Student");
  const student_doc_ref = doc(student_collection, uid);
  console.log(user);
  return await setDoc(student_doc_ref, user)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

const get_user_data_from_uid = async (uid) => {
  return await getDoc(doc(db, "Student", uid))
    .then((res) => {
      return res.data();
    })
    .catch((e) => {
      return e.message;
    });
};

const check_doc_exist = async (doc_id, collection) => {
  const docSnap = await getDoc(doc(db, collection, doc_id));

  if (docSnap.exists()) {
    return 1;
  } else {
    return 0;
  }
};

const update_user_data = async (doc_id, updated_data) => {
  return await updateDoc(doc(db, "Student", doc_id), updated_data)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

const get_marks_from_uid = async (uid) => {
  const user = await get_user_data_from_uid(uid);

  if (!user || !user.reg_no) {
    return { docs: [] };
  }

  const snapshot = await getDocs(
    query(collection(db, "Mark"), where("reg_no", "==", user.reg_no)),
  );


  const docs = [...snapshot.docs].sort((a, b) => {
    const aPaperNo = Number(a.data().paper_no);
    const bPaperNo = Number(b.data().paper_no);

    if (!Number.isNaN(aPaperNo) && !Number.isNaN(bPaperNo)) {
      return aPaperNo - bPaperNo;
    }

    return String(a.data().paper_no ?? "").localeCompare(
      String(b.data().paper_no ?? ""),
      undefined,
      { numeric: true },
    );
  });

  return { ...snapshot, docs };
};


const load_papers_links = async(uid)=>{

  const user = await get_user_data_from_uid(uid)

  const snapshot = await getDocs(query(collection(db, "PaperLinks"), where("reg_no", "==", user.reg_no)))

  return snapshot.docs

}

export {
  register_user,
  get_user_data_from_uid,
  check_doc_exist,
  update_user_data,
  get_marks_from_uid,
  load_papers_links
};
