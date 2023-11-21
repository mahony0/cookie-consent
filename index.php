<!doctype html>
<html lang="<?= !empty($_GET['l']) ? strip_tags($_GET['l']) : 'tr' ?>"
    class="<?= !empty($_GET['m']) ? $_GET['m'] : 'cc--darkmode' ?>">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />

    <title>Çerez Yönetimi</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/iframemanager@1.2.5/dist/iframemanager.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.css" />
    <style>
        body {
            margin: 0;
            padding: 10px;
            max-width: 560px;
            margin: 0 auto;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        }
    </style>
</head>
<body>
    <div id="app">
        <h1>Çerez Yönetimi</h1>
        <button data-cc="show-preferencesModal" type="button">Çerez Yönetim Merkezi Popup Göster</button>
        <br><br>
        <div style="display: inline-block; width: 25%;">
            <ul>
                <li><a href="?l=tr">TR</a></li>
                <li><a href="?l=en">EN</a></li>
                <li><a href="?l=de">DE</a></li>
                <li><a href="?l=ar">AR</a></li>
                <li><a href="?l=es">ES</a></li>
                <li><a href="?l=fr">FR</a></li>
                <li><a href="?l=it">IT</a></li>
            </ul>
        </div>
        <div style="display: inline-block; width: 25%;">
            <ul>
                <li><a href="?m=cc--darkmode">DARK</a></li>
                <li><a href="?m=light">LIGHT</a></li>
            </ul>
        </div>
        <br><br>
        <div data-service="youtube" data-id="5b35haQV7tU" data-autoscale></div>
        <br>
        <div data-service="vimeo" data-id="776749483" data-title="Apple “Escape From The Office”" data-autoscale></div>
    </div>

    <script>
        var ccActiveLocale = "<?= !empty($_GET['l']) ? strip_tags($_GET['l']) : 'tr' ?>";
        var ccUrlGizlilik = "https://www.google.com/Gizlilik";
        var ccUrlKullanim = "https://www.google.com/Kullanim";
        var ccUrlIletisim = "https://www.google.com/Iletisim";
    </script>
    <script defer src="https://cdn.jsdelivr.net/gh/orestbida/iframemanager@1.2.5/dist/iframemanager.js"></script>
    <script defer src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js"></script>
    <script defer src="cookieconsent-config.js"></script>

    <script type="text/plain" data-category="functionality" data-service="Özel Script">
        console.log('Özel Script enabled!');
    </script>

    <script type="text/plain" data-category="analytics" data-service="Google Analytics">
        console.log('Google Analytics enabled!');
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');
    </script>

    <script type="text/plain" data-category="marketing" data-service="Facebook Dönüşüm">
        console.log('Facebook Çerezleri enabled!');
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('consent', 'revoke');
        fbq('init', 'PIXEL_ID');
        fbq('track', 'PageView');
    </script>
</body>
</html>
