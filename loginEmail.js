function loginEmail(username, password) {
    let correctEmail, correctPassword, userEmail, userPassword;
    correctEmail = "johnza007@gmail.com"
    correctPassword = "johnlovecoding555"
    if (username == correctEmail && password == correctPassword) {
        return "ยินดีต้อนรับ"+username+"เข้าสู่ระบบ ✨";
    }
    else{
        return "กรุณาตรวจสอบ Email:"+username+" หรือ Password ใหม่อีกครั้ง ❌";
    }
}
module.exports = loginEmail;