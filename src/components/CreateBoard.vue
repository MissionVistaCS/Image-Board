<template>
    <div class="createBoard">
        <div class="boardBanner">
            <div class="boardTitle">Image Board Create Board</div>
        </div>
        <hr style="width: 90%">
        <br>
        <form action="#" method="post">
            <table class="postForm">
                <tbody>
                <tr>
                    <td style="text-align: center; width: 65px;">Letter</td>
                    <td>
                        <input name="letter" style="width: 145px; text-align: center" type="text"
                               v-model="letter">
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center; width: 65px;">Name</td>
                    <td>
                        <input name="name" style="width: 145px; text-align: center" type="text" v-model="name">
                    </td>
                </tr>
                <tr>
                    <td colspan="2"
                        style="padding: 5px 0; border: none; background: none; text-align: center; font-weight: normal; padding-bottom: 20px">
                        <input value="Submit" style="margin: 0px;" type="button" v-on:click="createBoard">
                    </td>
                </tr>
                </tbody>
                <p v-if="error">{{ error }}</p>
            </table>
        </form>
    </div>
</template>

<style scoped>
    .boardBanner {
        text-align: center;
        clear: both;
    }

    .boardBanner .boardTitle {
        font-family: Tahoma, sans-serif;
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -2px;
        margin-top: 0;
        color: #AF0A0F;
    }

    body {
        background: #eef2ff url(http://s.4cdn.org/image/fade-blue.png) top center repeat-x;
    }

    hr {
        border: 0;
        border-top: 1px solid #b7c5d9;
        height: 0;
    }

    table {
        border-spacing: 1px;
        margin-left: auto;
        margin-right: auto;
    }

    td {
        margin: 0;
        padding: 0;
        font-size: 10pt;
    }

    td:first-child {
        background-color: #D6DAF0;
        border: 1px solid #34345C;
        color: #34345C;
        font-weight: 700;
        padding: 0 5px;
        font-size: 10pt;
    }
</style>

<script>
    export default {
        data() {
            return {
                name: '',
                letter: '',
                error: null
            }
        },
        methods: {
            createBoard() {
                let vm = this;
                _api.createBoard(this.name, this.letter, function (err, res) {
                    if (err) {
                        vm.error = err;
                    }
                    else if (res.result) {
                        vm.$router.push('/' + this.letter + '/catalog');
                    }
                    else if (res.error) {
                        vm.error = res.error;
                    }
                });
            }
        }
    }
</script>