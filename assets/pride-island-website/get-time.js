console.log("hi")
fetch("https://play-pride-island.glitch.me/returnLastUpdated", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const element = document.getElementById("date");
    const date = new Date(data.time);
    const localTime = date.toLocaleString();
    console.log(localTIme)

    element.textContent = "Last updated: " + localTime;
  });
