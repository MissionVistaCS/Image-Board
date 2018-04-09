<template>
    <form name="post" action="/create/thread" method="post" enctype="multipart/form-data">
        <tbody>
        <tr data-type="Board">
            <td>Board</td>
            <td><input id="board" name="board" type="text" v-model="board.letter"></td>
        </tr>
	<tr data-type="Name">
	    <td>Name</td>
	    <td><input id="name" name="name" type="text"></td>
	</tr>
        <tr data-type="Title">
            <td>Title</td>
            <td><input id="title" name="title" type="text"></td>
        </tr>
        <tr data-type="Comment">
            <td>Comment</td>
            <td><textarea name="content" cols="48" rows="4" wrap="soft" tabindex="4"></textarea></td>
        </tr>
        <tr data-type="File">
            <td>File</td>
            <td><input id="postFile" name="attachment" type="file" tabindex="7">
            </td>
        </tr>
        </tbody>
        <button type="submit">Post</button>
    </form>
</template>

<style scoped>

</style>

<script>
    export default {
        data() {
            return {
                board: {},
                boardList: "t / r / a / p"
            }
        },
        components: {},
        created() {
            let vm = this;
            vm.getBoardInfo(vm.$route.params.board);
            vm.compileBoardList();
        },
        beforeRouteUpdate (to, from, next) {
            let vm = this;
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