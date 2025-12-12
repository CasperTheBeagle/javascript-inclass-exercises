function checkUserName(inputUsername) {
    let username = "nook";
    if (username == inputUsername) {
        return "สวัสดี, "+inputUsername+"! 👋";
    }
    else {
        return inputUsername+"ไม่มีผู้ใช้งานนี้ , โปรดระบุชื่อผู้ใช้งาน ❌";
    }
}
module.exports = checkUserName;

