import {  sign_in_with_google } from "../services/firebase_auth";
import { check_doc_exist, get_user_data_from_uid } from "../services/firestore";

const login_click = async (password, mobile) => {
  if (password === "" || mobile === "") {
    return {
      showAlert: true,
      alert: "plaese fill the fileds",
    };
  } else {
    const uid = await sign_in_with_google();
    sessionStorage.setItem("uid", uid)
    const check_doc_is_exits = await check_doc_exist(uid, "Student");
    if (check_doc_is_exits === 1) {
      const user_data = await get_user_data_from_uid(uid);
      if (user_data.mobile === mobile && user_data.password === password) {
        return {
          showAlert: false,
          status: 1,
        };
      } else {
        return {
          showAlert: true,
          alert: "please enter correct register number or password",
          status: 0,
        };
      }
    } else {
      return {
        showAlert: true,
        alert: "Please register now",
        status: 0,
      };
    }
  }
};

export { login_click };
