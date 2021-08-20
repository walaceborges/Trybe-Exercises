const date = document.getElementById("data-inicio");

function createState() {
  let states = document.getElementById("state");
  let optionStates = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
    "Distrito Federal",
  ];

  for (let index = 0; index < optionStates.length; index += 1) {
    let createOptionState = document.createElement("option");
    states.appendChild(createOptionState).innerText = optionStates[index];
    states.appendChild(createOptionState).value = optionStates[index];
  }
}
createState();

function init() {
  date.DatePickerX.init({
    format: "dd/mm/yyyy",
    maxDate: new Date(),
    weekDayLabels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
  });
}

window.onload = init;

const clearButton = document.querySelector(".clear-button");
function clearFields() {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = "";
    textArea.value = "";
  }
}
clearButton.addEventListener("click", clearFields);

new JustValidate(".form-horizontal", {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
    },
    city: {
      required: true,
      maxLength: 28,
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000,
    },
    position: {
      required: true,
      maxLength: 40,
    },
    description: {
      required: true,
      maxLength: 500,
    },
    date: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "O campo de nome é obrigatório.",
      maxLength: "O limite é de 40 caracteres.",
    },
    email: {
      required: "O campo de email é obrigatório.",
      email: "O email digitado não é válido.",
      maxLength: "O limite é de 50 caracteres.",
    },
    cpf: {
      required: "O campo de CPF é obrigatório.",
      maxLength: "O limite é de 11 caracteres.",
    },
    address: {
      required: "O campo endereço é obrigatório.",
      maxLength: "O limite é de 200 caracteres.",
    },
    city: {
      required: "O campo cidade é obrigatório.",
      maxLength: "O limite é de 28 caracteres.",
    },
    state: {
      required: "O campo estado é obrigatório.",
    },
    radio: {
      required: "A escolha de um item é obrigatória.",
    },
    text: {
      required: "Este campo é obrigatório.",
      maxLength: "O limite é de 1000 caracteres.",
    },
    position: {
      required: "Este campo é obrigatório.",
      maxLength: "O limite é de 40 caracteres.",
    },
    description: {
      required: "Este campo é obrigatório.",
      maxLength: "O limite é de 500 caracteres.",
    },
    date: {
      required: "Este campo é obrigatório.",
    },
  },
});
