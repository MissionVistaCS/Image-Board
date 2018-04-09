<template>
    <div class="index">
        <div id="doc">
            <div id="hd">
                <div id="logo">
                    <a href="/" title="Home"><img :src="'/src/assets/Image-Board_Banner.png'" width="448"></a>
                </div>
            </div>
            <div id="bd">
                <div id="announce" class="box-outer">
                    <div class="box-inner">
                        <div class="boxbar">
                            <h2>What is Chan ∞ Infinitum?</h2>
                        </div>
                        <div class="boxcontent">
                            <div id="about-content">
                                <p>A simple image-based bulletin board where anyone can post comments and share images. There are boards dedicated to a variety of topics, from technology to politics, music, and science. Users do not need to register an account before participating in the community. Feel free to click on a board below that interests you and jump right in!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="boards" class="box-outer top-box">
                    <div class="box-inner">
                        <div class="boxbar">
                            <h2>Boards</h2>
                        </div>
                        <div class="boxcontent">
                            <div class="column">
                                <h3 class="category-header">Interests</h3>
                                <ul>
                                    <li v-for="board in boards">
                                        <a class="boardlink" :href="'/' + board.letter + '/catalog'" >{{ board.name }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bottom"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '∞chan',
        data () {
            return {
                boards: []
            }
        },
        created() {
            let vm = this;
            vm.updateBoards();
        },
        beforeRouteUpdate (to, from, next) {
            let vm = this;
            vm.updateBoards();
            next();
        },
        methods: {
            updateBoards() {
                let vm = this;

                _api.boards(function (err, res) {
                    if (err) {
                        console.log(err);
                        vm.boards = [];
                    }
                    else if (res.result) {
                        vm.boards = res.result;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #about-content {
        min-height: 91px;
    }
    #announce {
        background: #fff;
        color: #000;
    }
    #announce .boxcontent {
        line-height: 1.5em;
    }
    #boards a {
        color: #800;
        text-decoration: none;
    }

    #boards a.boardlink:hover {
	color: #d00;
	text-decoration: underline;
    }

    #boards .column {
        width: 12em;
    }
    .index {
        font: 13px/1.231 arial, helvetica, clean, sans-serif;
    }
    #bottom {
        padding-bottom: 25px;
    }
    .boxbar {
        padding-left: .5em;
        line-height: 2em;
        position: relative;
    }
    .boxcontent {
        font-size: 93%;
        padding: .5em;
        padding-top: .25em;
        padding-bottom: 0;
        line-height: 1.5em;
    }
    .box-outer {
        border: 1px solid;
        margin-bottom: .5em;
        padding-bottom: .5em;
    }
    .category-header {
        text-decoration: underline;
        display: inline;
    }
    #doc {
        margin: auto;
        text-align: left;
        width: 57.69em;
        min-width: 750px;
    }
    #hd {
        margin-bottom: 0;
    }
    li {
        list-style: none;
    }
    #logo {
        font-size: 1px;
        line-height: 0;
        overflow: hidden;
        margin: 0 auto;
        text-align: center;
    }
    .top-box {
        background: #fff;
    }
    ul {
        padding-left: 0;
    }
</style>
