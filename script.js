const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const ageInput = document.querySelector("#age")
const emailInput = document.querySelector("#email")
const cityInput = document.querySelector("#city")
const roleSelect = document.querySelector("#role")
const placeSelect = document.querySelector("#place")
const foodSelect = document.querySelector("#food")
const misterioTextarea = document.querySelector("#misterio")
const experienciaTextarea = document.querySelector("#experiencia")
const apelidoInput = document.querySelector("#apelido")

// evita que a página dê refresh no form
form.addEventListener("submit", (event) => {
    event.preventDefault();
 
    // Validação

    if (nameInput.value === "") { 
        alert("Por favor, preencha seu nome.");
        return;
    } 

    else if (ageInput.value === "") { 
        alert("Por favor, preencha sua idade.");
        return;
    } 
    else if (emailInput.value === "") { 
        alert("Por favor, preencha seu email.");
        return;
    } 
    else if (cityInput.value === "") { 
        alert("Por favor, preencha sua cidade.");
        return;
    } 
    else if (roleSelect.value === "") {
        alert("Por favor, selecione seu papel na equipe.");
        return;
    } 
    else if (placeSelect.value === "") {
        alert("Por favor, selecione o lugar mais assustador.");
        return;
    } 
    else if (foodSelect.value === "") {
        alert("Por favor, selecione sua comida favorita.");
        return;
    } 
    else if (misterioTextarea.value === "") {
        alert("Por favor, descreva o mistério mais assustador que já viu.");
        return;
    } 
    else if (experienciaTextarea.value === "") {
        alert("Por favor, descreva sua experiência investigando.");
        return;
    } 
    else if (apelidoInput.value === "") {
        alert("Por favor, informe seu apelido de detetive.");
        return;
    }

    // Se passou por todas as validações
    alert("Formulário enviado com sucesso!");
    form.reset();
    
})


