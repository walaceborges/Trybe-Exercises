function createState (){
    let states = document.getElementById('state');
    let optionStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
  
    for (let index = 0; index < optionStates.length; index += 1) {
      let createOptionState = document.createElement('option');
      states.appendChild(createOptionState).innerText = optionStates[index];
      states.appendChild(createOptionState).value = optionStates[index];
    }
  }
createState()