const options = document.getElementById("options");
const cards = document.getElementById("cards");
let selectedOption = options.children[1];

// ! This method doesn't work in github pages
// const getData = async () => 
// {
//   const json = await fetch("../data/data.json")
//   .then(res => res.json())
//   .then(res => res)
//   return await json;
// }

const dataJSON = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

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
  const data = dataJSON
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