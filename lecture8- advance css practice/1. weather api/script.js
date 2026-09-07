//`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c333cd44b96f1ff34701d5f8bc140a64`

// function weather(city){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c333cd44b96f1ff34701d5f8bc140a64`)
//     .then((row)=> row.json())
//     .then((result)=>{
//         console.log(result);
//     });
// }
// weather("London");
let cityTemp;

let input = document.querySelector("#city");
let p = document.querySelector("p");
async function weather(city) {
  try {
    let raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c333cd44b96f1ff34701d5f8bc140a64`,
    );
    if (!raw.ok) {
      throw new Error("City not found, try something else.");
    }

    let data = await raw.json();
    console.log(data);
    cityTemp = `Temperature ${data.main.temp}°C`;
    console.log(`Temperature ${data.main.temp}°C`);
    if (data.main.temp > 45) {
      throw new Error("High Temperature");
    } else if (data.main.temp < 0) {
      throw new Error("Low Temperature");
    }

  } catch (err) {
    console.error(err.message); // catch have throw message
    cityTemp = err.message;
  }
  p.innerHTML = cityTemp;
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    weather(input.value);
  }
});