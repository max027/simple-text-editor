<?php require_once "configuration/settings.php"; ?>
<!DOCTYPE html>
<html lang="en" data-build-timestamp="18 September 2023 at 11:24 (UTC+11:24)">
<head>
  <title>Notebook</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>
    const mediaHandler = (function() {
      const meta = document.querySelector("meta[name=viewport]");
      const media = window.matchMedia("(max-width: 650px)");
      const attchContent = ", user-scalable=no";
      const content = "width=device-width, initial-scale=1.0";
      meta.content = media.matches ? content + attchContent : content.replace(attchContent, "");
    });
    window.addEventListener("resize", mediaHandler), mediaHandler();
  </script>
  <meta http-equive="Content-Type" content="text/html; charset=UTF-8">
  <meta name="keywords" content="notebook, note book, editor, text editor, text editor online, online text editoir, file editor online, file reader, file writer, generic text editor, file opener, notebook editor, AI text editor, wordpad, notepad, simple text editor, edit text online, read file online, file preview online">
  <meta name="description" content="Notebook is generic text editor thats let you create, open, read and write files to easily support only plain text (txt, HTML, Javascript, CSS etc.) Notebook not be support binary file like (.exe, .pdf, .zip, .rar etc.) file or extenstions">
  <meta name="theme-color" class="theme-color" content="#0866aa" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Expert Modassir" />
  <meta name="apple-mobile-web-app-status-bar-style" class="theme-color" content="#0866aa" />
  <meta name="msapplication-navbutton-color" class="theme-color" content="#0866aa" />
  <meta name="color-scheme" content="dark, light" />
  <link rel="manifest" href="<?=DOMAIN;?>/manifest.json">
  <link rel="shortcut icon" href="<?=DOMAIN;?>/notebook_favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" href="<?=DOMAIN;?>/icon/favicon-200x200.png">
  <link rel="canonical" href="<?=DOMAIN;?>">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="<?=DOMAIN;?>" />
  <meta property="og:site_name" content="Notebook" />
  <meta property="og:description" content="Notebook is generic text editor thats let you create, open, read and write files to easily support only plain text (txt, HTML, Javascript, CSS etc.) Notebook not be support binary file like (.exe, .pdf, .zip, .rar etc.) file or extenstions" />
  <meta property="og:keywords" content="notebook, note book, editor, text editor, text editor online, online text editoir, file editor online, file reader, file writer, generic text editor, file opener, notebook editor, AI text editor, wordpad, notepad, simple text editor, edit text online, read file online, file preview online" />
  <link rel="alternate" media="handheld" href="<?=DOMAIN;?>">
  <link rel="alternate" media="only screen and (max-width: 650px)" href="<?=DOMAIN;?>">
  <link rel="stylesheet" href="<?=DOMAIN;?>/themes/css/notebook.style.css" type="text/css" crossorigin="anonymous">
  <script src="<?=DOMAIN;?>/libraries/jqrony-min.js?version=1.0.0&lang=javascript" crossorigin="anonymous"></script>
  <script type="application/json" id="json_settings" data-type=":json" data-included-property="11" data-content-len="291" crossorigin="anonymous" async></script>
  <script type="application/json" id="json_fonts" data-type=":json" data-included-property="<?=$Fonts->get();?>" data-content-len="" crossorigin="anonymous"></script>
  <script>$("#json_settings").html(`<?=$Settings->loadJSON();?>`),$("#json_fonts").html(`<?=Fonts::loadJSON();?>`);</script>
</head>
<body class="nbpageIndex UIPage_layout" data-root-dir="<?=$rootDir;?>" data-default-file-type="txt" dir="ltr">
  <div id="content"></div>
  <script src="import/app.js" type="module" crossorigin="anonymous"></script>
</body>
</html>