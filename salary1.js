let basicSalo;
let benefits;
let payee;
let nhif;
let tier;
let contribution;

function payeecalculator() {
    basicSalo = Number(prompt('enter salo here'));
    benefits = Number(prompt("enter your benefits pay"));

    if (benefits < 0 || !benefits || benefits === null && basicSalo < 0 || !basicSalo || basicSalo === null) {
        return alert("invalid input")
    } else {
        if ((basicSalo + benefits) <= 24000) {
            payee = (basicSalo + benefits) * 0.1;
            return alert(`payee: , ${payee}`)
        } else if ((basicSalo + benefits) >= 24001 && basicSalo <= 32333) {
            payee = (basicSalo + benefits) * 0.25;
            return alert(`payee: , ${payee}`)
        } else if ((basicSalo + benefits) > 32333) {
            payee = (basicSalo + benefits) * 0.3;
            return alert(`payee: , ${payee}`)
        }
    }

    return alert(`payee: , ${payee}`)
}
payeecalculator();

function nhifCalculator() {
    if (benefits < 0 || !benefits || benefits === null && basicSalo < 0 || !basicSalo || basicSalo === null) {
        return alert("invalid input")
    } else {
        if ((basicSalo + benefits) <= 5999) {
            nhif = 150;
            return alert(`nhif deductions: ${nhif}`)
        } else if ((basicSalo + benefits) > 5999 && (basicSalo + benefits) < 7998) {
            nhif = 300;
            return alert(`nhif deductions: ${nhif}`)
        } else if ((basicSalo + benefits) > 7999 && (basicSalo + benefits) < 11998) {
            nhif = 400;
            return alert(`nhif deductions: ${nhif}`)
        } else if ((basicSalo + benefits) > 11999 && (basicSalo + benefits) < 14998) {
            nhif = 500;
            return alert(`nhif deductions: ${nhif}`)
        } else if ((basicSalo + benefits) > 14999 && (basicSalo + benefits) < 44998) {
            nhif = 700;
            return alert(`nhif deductions: ${nhif}`)
        } else {
            nhif = 1500;
            return alert(`nhif deductions: ${nhif}`)
        }
    }
    return nhif;
}
nhifCalculator();

function nssfCalculator() {
    tier = Number(prompt('enter TIER LEVEL here'));
    if (tier < 1 || !tier || tier > 1) {
        return alert("invalid input, refresh and input a valid tier level")
    } else {
        if (tier === 1) {
            contribution = 7000 * 0.06;
            return alert(`nssf contribution is: ${contribution}`)
        } else if (tier === 2) {
            contribution = 36000 * 0.06;
            return alert(`nssf contribution is: ${contribution}`)
        } else {
            return alert("invalido inputo")
        }
    }

    return contribution;
}
nssfCalculator();
const reliefFund=2500;
const grossSalary = (basicSalo + benefits);
const netPay = (grossSalary + reliefFund - payee - nhif - contribution);

function getNetPay() {
    return alert(`your net PAY is:  ${netPay}`);
}
getNetPay();