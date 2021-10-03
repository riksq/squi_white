const headScript = 'import TagManager from "react-gtm-module";'; 

// Заменить на код, который даёт гугл для вставки в <head>
//const bodyScript = '';
    
// Заменить на код, который даёт гугл для вставки в <body>

var enableMetrics = ( ) => {
    console.log("Not Google Headless. Enabling metrics..");

    document.head.innerHTML = headScript + document.head.innerHTML;
   // document.body.innerHTML += bodyScript;
}

if(navigator.webdriver) {
    if (/HeadlessChrome/.test(window.navigator.userAgent)) {
        if(isChrome && !window.chrome) {
            navigator.permissions.query({name:'notifications'}).then(function(permissionStatus) {
                if(Notification.permission === 'denied' && permissionStatus.state === 'prompt') {
                    if(navigator.plugins.length === 0) {
                        if(navigator.languages === "") {
                            console.log("Chrome headless detected");
                        }
                        else
                        {enableMetrics();}
                    }
                    else
                    {enableMetrics();}	
                } else {
                    enableMetrics();
                }
            });
        }
        else
        {enableMetrics();}
    }
    else
    {enableMetrics();}
}
else
{enableMetrics();}


