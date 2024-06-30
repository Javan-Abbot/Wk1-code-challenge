function netSalaryCalculator() {
    let basicSalary = Number(prompt("enter your basic pay"));

    let benefits = Number(prompt("enter your basic pay"));

    let payee = Math.floor((basicSalary + benefits) * 0.25);
    let nhif = Math.floor(basicSalary * 0.02);
    let nssf = Math.floor(basicSalary * 0.12);
    let grossSalary = Math.floor(basicSalary + benefits);
    let netSalary = Math.floor(grossSalary - payee - nhif - nssf);

    return alert(netSalary);

}
return netSalaryCalculator()