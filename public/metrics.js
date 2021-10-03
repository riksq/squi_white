const headScript = '<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KB8CSW8');</script>
<!-- End Google Tag Manager -->
'; 

// Заменить на код, который даёт гугл для вставки в <head>
const bodyScript = '<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KB8CSW8"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    ';
    
// Заменить на код, который даёт гугл для вставки в <body>

var enableMetrics = ( ) => {
    console.log("Not Google Headless. Enabling metrics..");

    document.head.innerHTML = headScript + document.head.innerHTML;
    document.body.innerHTML += bodyScript;
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


