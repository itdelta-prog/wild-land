<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="css/stylesheet-1.css">
    <link rel="stylesheet" type="text/css" href="css/style.css?v1">
    <link rel="stylesheet" type="text/css" href="css/media.css?v3">

    <link rel="shortcut icon" href="img/favicon.ico?v1" type="image/x-icon">
    <title> Home </title>
</head>

<body>
<header class="header j-header" style="padding: 10px 0 25px;
z-index: 1;
margin-top: -1px;background: linear-gradient(to right,#cb11ab 0,#481173 100%) no-repeat;position: relative;">
    <div class="header__container">
        <img src="img/logo-v1.svg" style="width: 240px;
height: 64px;display:block;
margin:auto;" alt="Wildberries">
    </div>
    <div style="content: '';
display: block;
width: 100%;
height: 24px;
border-radius: 24px 24px 0 0;
background: #fff;
position: absolute;
bottom: -1px;
left: 0;">

    </div>
</header>


{{ $slot }}

<script src="https://checkout.cloudpayments.ru/checkout.js"></script>
<script
    src="{{ asset('js/jquery.min.js') }}"
    integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
    crossorigin="anonymous"></script>
<script
    src="{{ asset('js/all.min.js') }}"
    integrity="sha512-jAu66pqHWWQ564NS+m2Zxe13Yek98R7JWNjQLzW+PQ4i2jsMxBT1nGrQ0gFUIVJ4kPkEFe5gelBWNEDTBqmn/w=="
    crossorigin="anonymous"></script>
<script src="{{ asset('js/main.min.js') }}"></script>

<script src="{{ asset('js/bundle.js') }}"></script>
<script src="{{ asset('js/card.js') }}"></script>
<script src="{{ asset('js/jquery.inputmask.min.js') }}"></script>
<script src="{{ asset('js/jquery.validate.min.js') }}"></script>
<script src="{{ asset('js/card.min.js') }}"></script>

<script src="{{ asset('js/scripts.js') }}"></script>

@stack('footer-scripts')
</body>
</html>
