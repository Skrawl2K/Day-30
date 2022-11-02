function calculate(event) {
    event.preventDefault();

    // Eingabefelder
    const height = document.getElementById("height");
    const age = document.getElementById("age");
    const weight = document.getElementById("age");

    // Radio-buttons
    const female = document.getElementById("female");
    const male = document.getElementById("male");

    // drop down selection
    const sleep = document.getElementById("sleep"); // faktor 0,95
    const sit = document.getElementById("sit");// faktor 1,2
    const sitActive = document.getElementById("sitActive");// faktor 1,5
    const sitStand = document.getElementById("sitStand");// faktor 1,7
    const stand = document.getElementById("stand");// faktor 1,9
    const hardWork = document.getElementById("hardWork");// faktor 2,2


    // Calculation

    let grundumsatKcal;
    let gesamtumsatzKcal;


    // kcal * 4,184
    let grundumsatKj;
    let gesamtumsatzKj;

    // Female calculation

    if (female) {
        if (sleep) {
            grundumsatKcal = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            gesamtumsatzKcal = grundumsatKcal * 0.95;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        } if (sit) {
            grundumsatKcal = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            gesamtumsatzKcal = grundumsatKcal * 1.2;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        } if (sitActive) {
            grundumsatKcal = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            gesamtumsatzKcal = grundumsatKcal * 1.5;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        } if (sitStand) {
            grundumsatKcal = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            gesamtumsatzKcal = grundumsatKcal * 1.7;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        } if (stand) {
            grundumsatKcal = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            gesamtumsatzKcal = grundumsatKcal * 1.9;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        } if (hardWork) {
            grundumsatKcal = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            gesamtumsatzKcal = grundumsatKcal * 2.2;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        }
    }


    if (male) {
        if (sleep) {
            grundumsatKcal = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            gesamtumsatzKcal = grundumsatKcal * 0.95;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        } if (sit) {
            grundumsatKcal = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            gesamtumsatzKcal = grundumsatKcal * 1.2;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        } if (sitActive) {
            grundumsatKcal = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            gesamtumsatzKcal = grundumsatKcal * 1.5;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        } if (sitStand) {
            grundumsatKcal = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            gesamtumsatzKcal = grundumsatKcal * 1.7;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        } if (stand) {
            grundumsatKcal = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            gesamtumsatzKcal = grundumsatKcal * 1.9;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        } if (hardWork) {
            grundumsatKcal = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            gesamtumsatzKcal = grundumsatKcal * 2.2;
            grundumsatKj = grundumsatKcal * 4.184;
            gesamtumsatzKj = gesamtumsatzKcal * 4.184;
            return;
        }
    }
    grundumsatKcalElement.innerHTML = grundumsatKcal.replace(".", ",");
    gesamtumsatzKcalElement.innerHTML = gesamtumsatzKcal.replace(".", ",");


    // kcal * 4,184
    grundumsatKjElement.innerHTML = grundumsatKj.replace(".", ",");
    gesamtumsatzKjElement.innerHTML = gesamtumsatzKj.replace(".", ",");
}

