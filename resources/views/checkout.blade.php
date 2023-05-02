<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/favicon.ico">

    <title>Tebex Checkout</title>

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,900&display=swap" rel="stylesheet">

    <link href="{{ mix("css/checkout/all.css") }}" rel="stylesheet" type="text/css">
    <link href="{{ mix("css/checkout/animate.css") }}" rel="stylesheet">
    <link href="{{ mix("css/checkout/app.css") }}" rel="stylesheet">
</head>

<body class="border-top border-3 border-primary">
    <div id="app"></div>
</body>

<script>
    window.tebex = {
        store : {
            name : 'Test Store'
        }
    }
</script>

<script src="{{ mix("js/checkout.js") }}"></script>
</html>
