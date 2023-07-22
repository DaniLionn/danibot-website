let parse

fetch('https://danilionn.github.io/danis-bot-website/').then(function(response) {
    /* when the page is loaded convert it to plain text */
    return response.text()
}).then(function(html) {
    /* initialize the DOM parser */
    var initParser = new DOMParser();
    /* parse the text */
     parse = initParser.parseFromString(html, 'text/html');
    /* you can now even select part of that html as you would in the regular DOM */ 
    /* example */

}).catch(function(error) {  
    console.log('Error fetch page: ', error);  
});

const prettyBytes = (num, precision = 3, addSpace = true) => {
    const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
    const exponent = Math.min(
      Math.floor(Math.log10(num < 0 ? -num : num) / 3),
      UNITS.length - 1
    );
    const n = Number(
      ((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision)
    );
    return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
  };

const file = new File([parse], "temp.html", {
    type: "text/html",
  });
  
let size = prettyBytes(file.size)
console.log("size")

let visits

fetch('https://featherapi.dani-lionn.repl.co/UpdateVisits')

fetch('https://featherapi.dani-lionn.repl.co/GetVisits').then(function(res) {
  visits = res.text()
  console.log(visits)
})

document.getElementsByClassName("size").innerHTML = `The size of this HTML file is ${size}!`;
document.getElementsByClassName("visits").innerHTML = `This website was visited ${visits} times!`;