<template>
    <div class="catalog">
        <div id="top"></div>
        <div id="topNav" class="boardNav">
      <span class="boardList">
        [
        <span v-html="boardList"></span>
        ]
      </span> <span class="actionList">
	[
	<a href="#bottom">Bottom</a>
	/
	<a href="/" target="_top">Home</a>
	]
      </span>
        </div>
        <div class="boardBanner">
            <div class="boardTitle">/{{ $route.params.board }}/ {{ board.name }}</div>
        </div>
        <hr class="abovePostLink">
        <div id="postLink">
            [<a href="post">Start a New Thread</a>]
        </div>
        <hr>
        <div id="threads">
            <div v-for="thread in threads" class="thread" v-bind:id="thread._id">
                <a v-if="thread.attachment_path" :href="'/' + $route.params.board + '/thread/' + thread._id"> <img class="thumbnail"
                                                                                     :src="'/' + thread.attachment_path"
                                                                                     width="150"> </a>
                <div class="meta">
                    R: <b>?</b>
                </div>
                <div class="teaser">
                    <a :href="'/' + $route.params.board + '/thread/' + thread._id"><b>{{ thread.title }}</b></a> <div v-html="thread.content">{{ thread.content }}</div>
                </div>
            </div>
        </div>
        <div id="bottom">
            <hr>
            <div id="bottomNav" class="boardNav">
      <span class="boardList">
          [
        <span v-html="boardList"></span>
        ]
      </span> <span class="actionList">
	[
	<a href="#top">Top</a>
	/
	<a href="/" target="_top">Home</a>
	]
      </span>
            </div>
            <br>
        </div>
    </div>
</template>

<style scoped>
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

    hr {
        clear: both;
        border: 0;
        border-top: 1px solid #b7c5d9;
    }

    .meta {
        font-size: 11px;
        line-height: 8px;
        margin-top: 2px;
        margin-bottom: 1px;
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
        vertical-align: top;
        display: inline-block;
        word-wrap: break-word;
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: hidden;
        overflow-wrap: break-word;
        margin-top: 5px;
        margin-bottom: 20px;
        padding: 5px 0 3px;
        position: relative;
        width: 180px;
        max-height: 320px;
    }

    #threads {
        text-align: center;
        padding: 20px 0;
    }
</style>

<script>
    export default {
        data() {
            return {
                threads: [],
                board: {},
                boardList: "t / r / a / p"
            }
        },
        components: {},
        created() {
            let vm = this;
            vm.updateThreads(vm.$route.params.board);
            vm.getBoardInfo(vm.$route.params.board);
            vm.compileBoardList();
        },
        beforeRouteUpdate (to, from, next) {
            let vm = this;
            vm.updateThreads(to.params.board);
            vm.getBoardInfo(to.params.board);
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
            updateThreads(letter) {
                let vm = this;
                _api.threads(letter, function (err, res) {
                    if (err) {
                        console.log(err);
                        vm.threads = [];
                    }
                    else if (res.result) {
                        vm.threads = res.result;
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