function speedDetector() {
    let speed = Number(prompt("enter the speed"));
    let points = 0;
    if(speed < 0 || ! speed || speed === null){
        return alert("invalid input")
    }else if (speed >= 0 && speed <= 70) {
        return alert("Ok")
    }
    else if ((points = Math.floor((speed - 70) / 5)) > 12) {
        return alert("Licence suspended")
    }else 
    {
        return alert("Points: " + points)
    }
        
     return speed
}
speedDetector();
