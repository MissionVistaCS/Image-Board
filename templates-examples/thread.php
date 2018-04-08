<!DOCTYPE html>
<html>
  <head>
    <style>
      a,a:visited {
        color: #34345c;
        text-decoration: none;
      }
      .abovePostLink {
        width: 90%;
      }
      blockquote > span.quote {
        color: #789922;
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
        color: #000;
        font-family: arial,helvetica,sans-serif;
        font-size: 10pt;
      }
      div.file div.post {
        display: block;
      }
      div.file div.post .fileThumb {
        float: left;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 3px;
        margin-bottom: 5px;
      }
      div.post blockquote.postMessage {
        display: block;
      }
      div.post div.postInfo {
        display: block;
        width: 100%;
      }
      div.post div.postInfo span.postNum a {
        color: #000;
        text-decoration: none;
      }
      div.post div.postInfo span.nameBlock {
        display: inline-block;
      }
      div.post div.postInfo span.subject {
        color: #0f0c5d;
        font-weight: 700;
      }
      div.post div.postInfo span.nameBlock span.name {
        color: #117743;
        font-weight: 700;
      }
      div.reply {
      background-color: #d6daf0;
      border: 1px solid #b7c5d9;
      border-left: 0;
      border-top: 0;
      display: table;
      padding: 2px;
      }
      div.sideArrows {
        color: #b7c5d9;
        float: left;
        margin-right: 2px;
        margin-top: 0;
        margin-left: 2px;
      }
      .fileThumb img {
        max-width: 250px;
        max-height: 250px;
        height: auto;
        width: auto;
      }
      hr {
        clear: both;
        border: 0;
        border-top: 1px solid #b7c5d9;
      }
      .op {
        display: inline;
      }
      .opContainer {
        display: inline;
      }
      .post {
        margin: 4px 0;
        overflow: hidden;
      }
      #postLink {
        font-size: 22px;
        font-weight: 700;
        text-align: center;
      }
      .thread {
        margin: 0;
        clear: both;
      }
      #threads {

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
      [<a href="g/post">Post a Reply</a>]
    </div>
    <hr>
    <div class="board">
      <div class="thread">
	<div class="postContainer opContainer">
	  <div id="{UID}" class="post op">
	    <div class="file">
	      <div class="fileText">
		File: <a href="{LINK TO FILE}">{NAME OF FILE}</a> {DETAILS NN}
	      </div>
	      <a class="fileThumb" href="{LINK TO FILE}" target="_blank">
		<img src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_share.jpg">
	      </a>
	    </div>
	    <div class="postInfo">
	      <span class="subject">Test thread</span>
	      <span class="nameBlock">
		<span class="name">Anonymous</span>
	      </span>
	      <span class="dateTime" data-utc="1523057718{INSERT}">04/06/18(Fri)16:35:18</span>
	      <span class="postNum">
		<a href="#{ID}" title="Link to this post">No.</a>
		<a href="{JS FOR APPENDING ID TO REPLY}" title="Reply to this post">65435144</a>
	      </span>
	    </div>
	    <blockquote class="postMessage">
	      <span class="quote">> tfw you Lorem ipsum dolor sit amet</span>
	      <br>
	      How sad!
	    </blockquote>
	  </div>
	</div>
        <?php
  	  for($i=0; $i<25; $i++) {
	    echo '
        <div class="postContainer replyContainer">
          <div class="sideArrows">>></div>
          <div class="post reply">
            <div class="file">
	      <div class="fileText">
	        File: <a href="{LINK TO FILE}">{NAME OF FILE}</a> {DETAILS NN}
	      </div>
	      <a class="fileThumb" href="{LINK TO FILE}" target="_blank">
		<img src="{LINK TO FILE}">
	      </a>
	    </div>
	    <div class="postInfo">
	      <span class="nameBlock">
		<span class="name">Anonymous</span>
	      </span>
	      <span class="dateTime" data-utc="1523057718{INSERT}">04/06/18(Fri)16:47:18</span>
	      <span class="postNum">
		<a href="#{ID}" title="Link to this post">No.</a>
		<a href="{JS FOR APPENDING ID TO REPLY}" title="Reply to this post">65435174</a>
	      </span>
	    </div>
	    <blockquote class="postMessage">
	    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	    </blockquote>
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
