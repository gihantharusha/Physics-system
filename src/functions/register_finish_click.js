import {  sign_in_with_google } from "../services/firebase_auth";
import { check_doc_exist, register_user } from "../services/firestore";

const register_finish_click = async (user, password, password_again) => {
  const isStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
    password,
  );

  console.log(user);

  if (password === "" || password_again === "") {
    return {
      showAlert: true,
      alert: "Please fill the fields",
    };
  } else if (!isStrong) {
    return {
      showAlert: true,
      alert: "Please enter the strong password",
    };
  } else if (password != password_again) {
    return {
      showAlert: true,
      alert:
        "The passwords do not match. Please make sure both passwords are the same.",
    };
  } else if (user === undefined) {
    return {
      showAlert: true,
      alert: "Something went wrong",
    };
  } else {
    const uid = await sign_in_with_google();

    const data = {
      f_name: user.basic.f_name,
      l_name: user.basic.l_name,
      mobile: user.basic.mobile,
      address: user.advance.address,
      class: user.advance.what_class,
      school: user.advance.school,
      nic: user.advance.nic,
      uid: uid,
      password: password,
    };

    if (uid != false) {
      const is_exist_user = await check_doc_exist(uid, "Student");
      if (is_exist_user === 1) {
        return {
          showAlert: true,
          alert: "Already you have a account",
        };
      } else {
        const response = await register_user(data, uid);
        if (response) {
          return {
            showAlert: false,
          };
        } else {
          return { showAlert: true, alert: "Something went wrong!" };
        }
      }
    }
  }
};

export { register_finish_click };
