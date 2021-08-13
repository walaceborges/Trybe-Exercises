function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// Exercício 1:

function createDaysOfTheMonth (){
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let days = document.getElementById("days");

for (let index = 0; index < dezDaysList.length; index++) {
    const daysListActual = dezDaysList[index];
    const listItem = document.createElement('li');
    
    if (daysListActual === 24 || daysListActual === 31){
      listItem.className = "day holiday";
      listItem.innerHTML = daysListActual;
      days.appendChild(listItem);
    } else if (daysListActual === 4 || daysListActual === 11 || daysListActual === 18){
       listItem.className = "day friday";
       listItem.innerHTML = daysListActual;
       days.appendChild(listItem);
    } else if (daysListActual === 25){
      listItem.className = "day holiday friday"
      listItem.innerHTML = daysListActual;
      days.appendChild(listItem);
    } else {
      listItem.className = "day"
      listItem.innerHTML = daysListActual;
      days.appendChild(listItem);
    }
}
}
createDaysOfTheMonth();