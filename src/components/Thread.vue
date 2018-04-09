<template>
    <div class="thread">
        <div id="top"></div>
        <div id="topNav" class="boardNav">
            <span class="boardList">
                [ <span v-html="boardList"></span> ]
            </span> <span class="actionList"> [ <a
                href="#bottom">Bottom</a> / <a href="/" target="_top">Home</a> ] </span></div>
        <div class="boardBanner">
            <div class="boardTitle">/{{ $route.params.board }}/ {{ board.name }}</div>
        </div>
        <hr class="abovePostLink">
        <div id="postLink"> [<a href="#" v-on:click="toggleReplyBox" id="postLinkText">Post a Reply</a>]</div>
        <hr>
        <div class="board">
            <div class="thread">
                <div class="postContainer opContainer">
                    <div v-bind:id="thread._id" class="post op">
                        <div v-if="thread.attachment_path" class="file">
                            <div class="fileText"> File: <a :href="'/' + thread.attachment_path">{{ thread.attachment_name }}</a></div>
                            <a class="fileThumb" :href="'/' + thread.attachment_path" target="_blank" v-if="new Array('gif', 'jpg', 'jpeg', 'png').includes(thread.attachment_name.split('.').pop())">
			       	<img :src="'/' + thread.attachment_path">
                            </a>
			    <video class="fileThumb" v-if="new Array('webm').includes(thread.attachment_name.split('.').pop())" controls="">
			    	<source :src="'/' + thread.attachment_path"></source>
			    </video>
			    </div>
                        <div class="postInfo"><span class="subject">{{ thread.title }}</span> <span class="nameBlock"> <span
                                class="name">{{ thread.name }}</span> </span> <span class="dateTime"
                                                                              >{{ new Date(thread.timeStamp) }}</span>
                            <span class="postNum"> <a :href="'#' + thread._id" title="Link to this post">No.</a> <a
                                    href="#" v-on:click="appendUserIdToReplyContent(thread._id + '\n')"
                                    title="Reply to this post">{{ thread._id }}</a> </span> <span v-if="isMod"><button v-on:click="ban(thread)">Ban</button></span></div>
                        <blockquote class="postMessage" v-html="thread.content">
                        </blockquote>
                    </div>
                </div>


                <div v-for="reply in replies" class="postContainer replyContainer">
                    <div class="sideArrows">>></div>
                    <div class="post reply" v-bind:id="reply._id">
                        <div v-if="reply.attachment_path" class="file">
                            <div class="fileText"> File: <a :href="'/' + reply.attachment_path">{{ reply.attachment_name }}</a></div>
                            <a class="fileThumb" :href="'/' + reply.attachment_path" target="_blank" v-if="new Array('gif', 'jpg', 'jpeg', 'png').includes(reply.attachment_name.split('.').pop())">
			        <img :src="'/' + reply.attachment_path">
			    </a>
			    <video class="fileThumb" v-if="new Array('webm').includes(reply.attachment_name.split('.').pop())" controls="">
                                <source :src="'/' + reply.attachment_path"></source>
			    </video>
                        </div>
                        <div class="postInfo"><span class="nameBlock"> <span class="name">{{ reply.name }}</span> </span> <span
                                class="dateTime">{{ new Date(reply.time) }}</span> <span
                                class="postNum"> <a :href="'#' + reply._id" title="Link to this post">No.</a> <a
                                href="#" v-on:click="appendUserIdToReplyContent(reply._id + '\n')" title="Reply to this post">{{ reply._id }}</a> </span> <span v-if="isMod"><button v-on:click="ban(reply)">Ban</button> <button v-on:click="deleteReply(reply)">Delete</button></span>
                        </div>
                        <blockquote class="postMessage" v-html="reply.content">
                        </blockquote>
                    </div>
                </div>
                <div id="bottom">
                    <hr>
                    <div id="bottomNav" class="boardNav"><span class="boardList"> [ <span v-html="boardList"></span> ] </span> <span class="actionList"> [ <a
                            href="catalog.php#top">Top</a> / <a href="/" target="_top">Home</a> ] </span></div>
                    <br>
                </div>
                </div>
            </div>

            <div class="replyBox" v-if="replyBoxShown">
                <tr>Post Reply</tr>
                <form name="post" action="/create/reply" method="post" enctype="multipart/form-data">
                    <tbody>
                    <tr style="display: none;" data-type="Thread">
                        <td>Thread</td>
                        <td><input id="thread" name="threadId" type="text" v-model="thread._id"></td>
                    </tr>
		    <tr data-type="Name">
		        <td>Name</td>
			<td><input id="name" name="name" type="text" value="Anonymous"></td>
		    </tr>
                    <tr data-type="Content">
                        <td>Content</td>
                        <td><textarea v-model="replyContent" name="content" cols="48" rows="4" wrap="soft" tabindex="4"></textarea></td>
                    </tr>
                    <tr data-type="File">
                        <td>File</td>
                        <td><input id="postFile" name="attachment" type="file" tabindex="7">
                        </td>
                    </tr>
		    </tbody>
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>
</template>

<style scoped>
    a, a:visited {
        color: #34345c;
        text-decoration: none;
    }

    .replyBox {
        position: fixed;
        border-style: solid;
        left: 600px;
        top: 200px;
        border-color: black;
        border-width: 2px;
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

    .thread {
        background: #eef2ff url(http://s.4cdn.org/image/fade-blue.png) top center repeat-x;
        color: #000;
        font-family: arial, helvetica, sans-serif;
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

    .fileThumb img, video {
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

    #postLinkText:hover {
	color: #d00;
    }

    .replyBox {
    	background-color: #EEF2FF;
    }

    .thread {
        margin: 0;
        clear: both;
    }

    #threads {

    }
</style>

<script>
    export default {
        data() {
            return {
                thread: {},
                board: {},
                replies: [],
                isMod: false,
                replyBoxShown: false,
                replyContent: '',
                boardList: "t / r / a / p"
            }
        },
        components: {},
        created() {
            let vm = this;
            vm.updateThread(vm.$route.params.thread);
            vm.getBoardInfo(vm.$route.params.board);
            vm.updateReplies(vm.$route.params.thread);
            vm.updateMod();
            vm.compileBoardList();
        },
        beforeRouteUpdate (to, from, next) {
            let vm = this;
            vm.updateThread(to.params.thread);
            vm.getBoardInfo(to.params.board);
            vm.updateReplies(to.params.thread);
            vm.updateMod();
            vm.compileBoardList();
            next();
        },
        methods: {
            getBoardInfo(letter) {
                let vm = this;
                _api.board(letter, function (err, res) {
                    if (err) {
                        console.log(err);
                        vm.board = [];
                    }
                    else if (res.result) {
                        vm.board = res.result;
                        console.log(vm.board);
                    }
                });
            },
            deleteReply(reply) {
                let vm = this;
                _api.deleteReply(reply._id, function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    else if (res.result) {
                        vm.$router.go(vm.$router.currentRoute);
                    }
                });
            },
	    deleteThread(id) {
		let vm = this;
		_api.deleteThread(id, function(err, res) {
		    if (err) {
			console.log(err);
		    }
		    else if (res.result) {
			vm.$router.push('/' + board.letter + '/catalog');
		    }
		}
	    },
            updateThread(id) {
                let vm = this;
                _api.thread(id, function (err, res) {
                    if (err) {
                        console.log(err);
                        vm.thread = {};
                    }
                    else if (res.result) {
                        vm.thread = res.result;
                    }
                });
            },
            updateReplies(threadId) {
                let vm = this;
                _api.replies(threadId, function (err, res) {
                    if (err) {
                        console.log(err);
                        vm.replies = [];
                    }
                    else if (res.result) {
                        vm.replies = res.result;
                    }
                });
            },
            ban(threadOrReply) {
                let vm = this;
                let ip = threadOrReply.ip;
                vm.$router.push('/ban/' + ip);
            },
            updateMod() {
                let vm = this;
                _api.isAuth(function (err, res) {
                    if (err) {
                        console.log(err);
                        vm.isMod = false;
                    }
                    else if (res.result) {
                        vm.isMod = res.result;
                    }
                });
            },
            toggleReplyBox() {
                let vm = this;
                vm.replyBoxShown = !vm.replyBoxShown;
            },
            appendUserIdToReplyContent(id) {
                let vm = this;
                vm.replyContent += ">>" + id;
                vm.replyBoxShown = true;
            },
            compileBoardList() {
                let vm = this;
                _api.boards(function (err, res) {
                    if (err) {
                        console.log(err);
                        vm.threads = [];
                    }
                    else if (res.result) {
                        let letters = [];
                        for (let i = 0; i < res.result.length; i++) {
                            letters.push('<a href="/' + res.result[i].letter + '/catalog">' + res.result[i].letter + '</a>');
                        }
                        vm.boardList = letters.join(" / ");
                        console.log(vm.boardList);
                    }
                });
            }
        }
    }
</script>
