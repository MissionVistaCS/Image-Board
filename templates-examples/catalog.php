<!DOCTYPE html>
<html>
  <head>
    <style>
      .abovePostLink {
        width: 90%;
      }
      .boardBanner {
        color: #af0a0f;
        text-align: center;
        clear: both;
      }
      .boardNav {
        color: #89a;
        font-size: 9pt;
      }
      .boardNav .actionList {
        float: right;
      }
      .boardTitle {
        font-family: sans-serif;
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -2px;
        margin-top: 0px;
      }
      body {
        background: #eef2ff url(http://s.4cdn.org/image/fade-blue.png) top center repeat-x;
      }
      hr {
        clear: both;
        border: 0;
        border-top: 1px solid #b7c5d9;
      }
      .meta {
        font-size:11px;
        line-height:8px;
        margin-top:2px;
        margin-bottom:1px;
      }
      #postLink {
        font-size: 22px;
        font-weight: 700;
        text-align: center;
      }
      .teaser {
      padding: 0 15px;
      display: block;
      }
      .thread {
        vertical-align:top;
        display:inline-block;
        word-wrap:break-word;
        overflow:hidden;
        overflow-x: hidden;
        overflow-y: hidden;
        overflow-wrap: break-word;
        margin-top:5px;
        margin-bottom:20px;
        padding:5px 0 3px;
        position:relative;
        max-width: 180px;
        max-height: 320px;
      }
      #threads {
        text-align: center;
        padding:20px 0;
      }
    </style>
  </head>
  <body>
    <div id="top"></div>
    <div id="topNav" class="boardNav">
      <span class="boardList">
        [
        <a href="/g/catalog" title="Technology">g</a>
        /
        <a href="/d/catalog" title="Based Images">d</a>
        ]
      </span>
      <span class="actionList">
	[
	<a href="catalog.php#bottom">Bottom</a>
	/
	<a href="/" target="_top">Home</a>
	]
      </span>
    </div>
    <div class="boardBanner">
      <div class="boardTitle">/g/ Technology</div>
    </div>
    <hr class="abovePostLink">
    <div id="postLink">
      [<a href="g/post">Start a New Thread</a>]
    </div>
    <hr>
    <div id="threads">
      <?php
	 for($i=0; $i<25; $i++) {
			 echo '
      <div class="thread">
        <a href="">
  	  <img class="thumbnail" src="rms.jpg" width="150">
        </a>
        <div class="meta">
	  R: <b>15</b>
        </div>
        <div class="teaser">
	  <b>Title: </b>
	  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    ';
    }
    ?>
    </div>
    <div id="bottom">
    <hr>
    <div id="bottomNav" class="boardNav">
      <span class="boardList">
	[
	<a href="/g/catalog" title="Technology">g</a>
	/
	<a href="/d/catalog" title="Based Images">d</a>
	]
      </span>
      <span class="actionList">
	[
	<a href="catalog.php#top">Top</a>
	/
	<a href="/" target="_top">Home</a>
	]
      </span>
    </div>
    <br>
  </body>
<html>
