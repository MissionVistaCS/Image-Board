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
        <div id="postLink"> [<a :href="$route.params.thread + '/post'">Post a Reply</a>]</div>
        <hr>
        <div class="board">
            <div class="thread">
                <div class="postContainer opContainer">
                    <div id="{UID}" class="post op">
                        <div class="file">
                            <div class="fileText"> File: <a :href="'/' + thread.attachment_path">{{ thread.attachment_name }}</a></div>
                            <a class="fileThumb" :href="'/' + thread.attachment_path" target="_blank"> <img
                                    :src="'/' + thread.attachment_path">
                            </a></div>
                        <div class="postInfo"><span class="subject">{{ thread.title }}</span> <span class="nameBlock"> <span
                                class="name">Anonymous</span> </span> <span class="dateTime"
                                                                            data-utc="1523057718{INSERT}">{{ new Date(thread.timeStamp) }}</span>
                            <span class="postNum"> <a href="#{ID}" title="Link to this post">No.</a> <a
                                    href="{JS FOR APPENDING ID TO REPLY}"
                                    title="Reply to this post">{{ thread._id }}</a> </span></div>
                        <blockquote class="postMessage">
                            {{ thread.content }}
                        </blockquote>
                    </div>
                </div>


                <div v-for="reply in replies" class="postContainer replyContainer">
                    <div class="sideArrows">>></div>
                    <div class="post reply">
                        <div v-if="reply.attachment_path" class="file">
                            <div class="fileText"> File: <a :href="'/' + reply.attachment_path">{{ reply.attachment_name }}</a></div>
                            <a class="fileThumb" :href="'/' + reply.attachment_path" target="_blank"> <img :src="'/' + reply.attachment_path"> </a>
                        </div>
                        <div class="postInfo"><span class="nameBlock"> <span class="name">Anonymous</span> </span> <span
                                class="dateTime" data-utc="1523057718{INSERT}">{{ new Date(reply.time) }}</span> <span
                                class="postNum"> <a href="#{ID}" title="Link to this post">No.</a> <a
                                href="{JS FOR APPENDING ID TO REPLY}" title="Reply to this post">{{ reply._id }}</a> </span>
                        </div>
                        <blockquote
                                class="postMessage"> {{ reply.content }}
                        </blockquote>
                    </div>
                </div>
                <div id="bottom">
                    <hr>
                    <div id="bottomNav" class="boardNav"><span class="boardList"> [ <span v-html="boardList"></span> ] </span> <span class="actionList"> [ <a
                            href="catalog.php#top">Top</a> / <a href="/" target="_top">Home</a> ] </span></div>
                    <br>
                </div>
</template>

<style scoped>
    a, a:visited {
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

<script>
    export default {
        data() {
            return {
                thread: {},
                board: {},
                replies: [],
                boardList: "t / r / a / p"
            }
        },
        components: {},
        created() {
            let vm = this;
            vm.updateThread(vm.$route.params.thread);
            vm.getBoardInfo(vm.$route.params.board);
            vm.updateReplies(vm.$route.params.thread);
            vm.compileBoardList();
        },
        beforeRouteUpdate (to, from, next) {
            let vm = this;
            vm.updateThread(to.params.thread);
            vm.getBoardInfo(to.params.board);
            vm.updateReplies(to.params.thread);
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