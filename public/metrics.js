const headScript = '<!-- HEAD METRIC SCRIPT -->'; // Заменить на код, который даёт гугл для вставки в <head>
const bodyScript = '<!-- BODY METRIC SCRIPT -->'; // Заменить на код, который даёт гугл для вставки в <body>


if(navigator.webdriver) {
    console.log("Chrome headless detected. Metrics will not be enabled");
}
else
{
    console.log("Not Google Headless. Enabling metrics..");

    document.head.innerHTML = headScript + document.head.innerHTML;
    document.body.innerHTML += bodyScript;
}