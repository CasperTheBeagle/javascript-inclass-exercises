function checkTemperature(temp) {
    if (temp > 30 ) {
        return temp+":ร้อนชิบหาย ! 🤬";
    }
    else if (temp <= 30 && temp >= 20) {
        return temp+":อุ่นๆ กำลังดีเลยวันนี้ 🥵";
    }
    else if (temp < 20) {
        return temp+":วันนี้อากาศหนาวแหะ 🥶";
    }
}
module.exports = checkTemperature;