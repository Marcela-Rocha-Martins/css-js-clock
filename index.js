const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const secondHand1 = document.querySelector(".second-hand1");
const minHand1 = document.querySelector(".min-hand1");
const hourHand1 = document.querySelector(".hour-hand1");

function setBerlinTime() {
  // Configuração do fuso horário da Alemanha (Central European Time, CET)
  const germanyTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Berlin",
  });

  const timeParts = germanyTime.split(/[/ :]/);

  const hours = parseInt(timeParts[3]);
  const minutes = parseInt(timeParts[4]);
  const seconds = parseInt(timeParts[5]);

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function setSPTime() {
  const saoPauloTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Sao_Paulo",
  });
  const timeParts = saoPauloTime.split(/[/ :]/);

  const hours = parseInt(timeParts[3]);
  const minutes = parseInt(timeParts[4]);
  const seconds = parseInt(timeParts[5]);

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand1.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand1.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand1.style.transform = `rotate(${hoursDegrees}deg)`;

}

function updateClocks() {
  setBerlinTime();
  setSPTime();
}

updateClocks();

setInterval(updateClocks, 1000);
