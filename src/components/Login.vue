<template>
    <div class="login">
        <div class="boardBanner">
            <div class="boardTitle">Image Board Login</div>
        </div>
        <hr style="width: 90%">
        <br>
        <form action="#" method="post">
            <table class="postForm">
                <tbody>
                <tr>
                    <td style="width: 65px; text-align: center">Email</td>
                    <td>
                        <input name="username" style="width: 145px;" type="text" v-model="username">
                    </td>
                </tr>
                <tr>
                    <td style="width: 65px; text-align: center">Password</td>
                    <td>
                        <input name="password" style="width: 145px;" type="password"
                               v-model="password">
                    </td>
                </tr>
                <tr>
                    <td colspan="2"
                        style="padding: 5px 0; border: none; background: none; text-align: center; font-weight: normal; padding-bottom: 20px">
                        <input value="Submit" style="margin: 0px;" type="button" v-on:click="login">
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
                username: '',
                password: '',
                loggedIn: false,
                error: null
            }
        },
        methods: {
            login() {
                let vm = this;
                _api.login(this.username, this.password, function (err, res) {
                    if (err) {
                        vm.error = err;
                    }
                    else if (res.result) {
                        vm.loggedIn = true;
                        vm.$router.push('/');
                    }
                    else if (res.error) {
                        vm.error = res.error;
                    }
                });
            },
            logout() {
                let vm = this;
                _api.logout(function (err, res) {
                    if (err) {
                        vm.loggedIn = false;
                        return console.log(err);
                    }
                    vm.loggedIn = false;
                });
            }
        }
    }
</script>