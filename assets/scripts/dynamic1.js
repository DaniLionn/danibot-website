let parse
let size
fetch('https://danilionn.github.io/danis-bot-website/index.html')
    .then(function (response) {
        /* when the page is loaded convert it to plain text */
        return response.text()
    })
    .then(function (html) {
        
        const file = new File([html], "temp.html", {
            type: "text/html",
        });
        
        size = prettyBytes(file.size)
  
        document.getElementsByClassName("size")[0].innerHTML = `The size of this HTML file is ${size}!`;
        
    })
    .catch(function (error) {
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
        ((num < 0 ? -num : num) / 1000 ** exponent)
        .toPrecision(precision)
    );
    return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};


let visits

// fetch('https://featherapi.dani-lionn.repl.co/UpdateVisits')

// fetch('https://featherapi.dani-lionn.repl.co/GetVisits', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//     .then(response => response.json())
//     .then((response) => {
        
//         let obj = JSON.parse(JSON.stringify(response))
        
//         console.log(obj.num)
        
//         visits = obj.num
        
//         document.getElementsByClassName("visits")[0].innerHTML = `This website was visited ${visits} times!`;
        
//     })
