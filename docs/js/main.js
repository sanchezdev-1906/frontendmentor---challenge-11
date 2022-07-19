const options = document.getElementById("options");
const cards = document.getElementById("cards");
let selectedOption = options.children[1];

const getData = async () => 
{
  const json = await fetch("../data/data.json")
  .then(res => res.json())
  .then(res => res)
  return await json;
}

options.addEventListener("click", (e)=>
{
  if (e.target.classList.contains("dashboard-time__item"))
  {
    selectedOption.classList.remove("active")
    selectedOption = e.target
    selectedOption.classList.add("active")
    changeData(e.target.dataset.opt)
    console.log("Done");
  }
})

const changeData = async (time = "weekly") =>
{
  const data = await getData()
  let timeText = "Week";
  time === "weekly"? timeText = "Week" : time === "daily"? timeText = "Day": timeText = "Month";

  for (let i = 0; i < cards.children.length; i++) {
    const card = cards.children[i];
    let dataItem = data[i];

    card.querySelector(".hours").textContent = dataItem.timeframes[time].current + "hrs";
    card.querySelector(".last").textContent = `Last ${timeText} - ${dataItem.timeframes[time].previous}hrs`;
  }

  
}

changeData();