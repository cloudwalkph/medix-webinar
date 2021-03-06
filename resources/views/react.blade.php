<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Medix Webinar</title>
  <meta name="description" content="Medix Dental Webinar.">

  <link rel="icon" 
      type="image/png" 
      href="/img/iglobal-logo-150x150.png">

  <!-- Use minimum-scale=1 to enable GPU rasterization -->
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
  >
  <!--Import materialize.css-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
  <link rel="stylesheet" type="text/css" href="{{ asset('css/materialize.min.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

  <link href="http://vjs.zencdn.net/5.8.8/video-js.css" rel="stylesheet">

  <!-- If you'd like to support IE8 -->
  <script src="http://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
</head>

<body>
  <div id="root"></div>

  <!-- This script adds the Roboto font to our project. For more detail go to this site:  http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500 -->
  <script>
    var WebFontConfig = {
      google: { families: [ 'Roboto:400,300,500:latin' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  </script>

    <!--<script src="https://unpkg.com/react@15/dist/react.min.js"></script>-->
    <!--<script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>-->
    <!--<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>-->

  <!--Import jQuery before materialize.js-->
  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <!-- Compiled and minified JavaScript -->
  <script src="{{ asset('js/materialize.min.js') }}"></script>

  <script src="http://vjs.zencdn.net/5.8.8/video.js"></script>

  <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>