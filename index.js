function studentGradeGenerator() {
    const grade = Number(prompt("enter your grade, should be between 0 and 100"));
    if (grade < 0 || grade > 100 || ! grade || grade === null) {
        return alert("this input is invalid!");
        
    } else if (grade > 79) {
        return alert("A");
    } else if (grade >= 60 && grade <= 79) {
        return alert("B");
    }
    else if (grade >= 50 && grade <= 59) {
        return alert("C");
    }
    else if (grade >= 40 && grade <= 49) {
        return alert("D");
    }
    else
        return alert("E");
    return grade;
}
console.log(studentGradeGenerator());



