const date = new Date();
const current = new Date();

function calculate() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    current.setFullYear(parseInt(year), parseInt(month) - 1, parseInt(day));
    document.getElementById("year").style.borderColor = "black";
    document.getElementById("labelYear").innerHTML = "";
    document.getElementById("labelMonth").innerHTML = "";
    document.getElementById("month").style.borderColor = "black";
    document.getElementById("labelDay").innerHTML = "";
    document.getElementById("day").style.borderColor = "black";
    if (date.getTime() >= current.getTime() && parseInt(month) <= 11 &&  parseInt(day)<= 30) {
        const answer = (date.getTime() - current.getTime()) / (1000 * 60 * 60 * 24);
        document.getElementById("outputYear").innerText = Math.floor(answer / 365).toString();
        document.getElementById("outputMonth").innerText = Math.floor(answer % 365 / 30).toString();
        document.getElementById("outputDay").innerText = Math.floor(answer % 365 % 30).toString();
    } else {
        if (date.getFullYear() < current.getFullYear()) {
            document.getElementById("labelYear").innerHTML = "Must introduce a valid year";
            document.getElementById("labelYear").style.color = "red";
            document.getElementById("year").style.borderColor = "red";
        }if (date.getMonth() < parseInt(month) && date.getTime() < current.getTime() || parseInt(month) > 11) {
            document.getElementById("labelMonth").innerHTML = "Must introduce a valid month";
            document.getElementById("labelMonth").style.color = "red";
            document.getElementById("month").style.borderColor = "red";
        }if (date.getDate() < parseInt(day) && date.getTime() < current.getTime() || parseInt(day) > 30) {
            document.getElementById("labelDay").innerHTML = ("Must introduce a valid day");
            document.getElementById("labelDay").style.color = "red";
            document.getElementById("day").style.borderColor = "red";
        }
    }
}