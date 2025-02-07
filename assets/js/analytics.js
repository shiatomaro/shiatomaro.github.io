fetch('/secrets.json')
    .then(response => response.json())
    .then(data => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', data.GA_TRACKING_ID);
    });
