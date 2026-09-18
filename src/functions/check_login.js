
const check_login_user = async()=>{
    const uid = sessionStorage.getItem("uid")
    if(uid === null){
        return false
    }else{
        return true
    }
}


export default check_login_user