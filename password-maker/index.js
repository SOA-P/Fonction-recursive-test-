const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é(§è!)-_^$ù,;:=";
const rangeValue = document.getElementById('password-length')
const passwordOutput = document.getElementById('password-output')


function generatePassword() {
    let data = [];
    let password ="";
    if (lowercase.checked) data.push(...dataLowercase); //spread operator 
    if (uppercase.checked) data.push(...dataUppercase);
    if (number.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("veuillez sélectionner des critère")
        return; 
    }

    for (i = 0; i < rangeValue.value; i++) {
        password += (data[Math.floor(Math.random() * data.length)]);
            ;
    }
    passwordOutput.value = password; 

    passwordOutput.select();
    document.execCommand('copy');
    generateButton.textContent = "copié !";

    setTimeout(() => {
        generateButton.textContent = " générer mot de passe"
    }, 2000);
}

generateButton.addEventListener('click', generatePassword);