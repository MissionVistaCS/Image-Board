<template>
    <div class="banlist">
        <header>
            <h1 id="title">Chan ∞ Infinitum Bans</h1>
            <div id="description">
                The purpose of this page is to give users insight into what content is being removed, and why.
                <br>
                Below are the recent bans.
                <br>
                <br>
                Don't be stupid.
            </div>
        </header>
        <table id="ban-entries">
            <thead>
            <tr>
                <th class="col-ip">IP</th>
                <th class="col-message">Reason</th>
                <th class="Time">Time</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="ban in bans">
                <td>{{ ban.ip }}</td>
                <td>{{ ban.message }}</td>
                <td>{{ new Date(ban.time) }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    .banlist {
        font-family: 'Helvetica Neue', arial, sans-serif;
        margin: 5px 0 5px 0;
        padding: 0 5px;
        font-size: 13px;
        background: #eef2ff url(http://s.4cdn.org/image/fade-blue.png) top center repeat-x;
    }
    #description {
        margin-top: 20px;
    }
    header {
        text-align: center;
        color: #AF0A0F;
    }
    #ban-entries {
        table-layout: fixed;
        background-color: #fff;
        cursor: default;
        margin: auto;
        margin-top: 30px;
        background-color: #eef2ff;
    }
    #ban-entries th {
        background-color: #C0C7DE;
    }
    table, td, th, tr {
        border-collapse: collapse;
        border: 1px solid black;
        text-align: center;
    }
    #title {
        margin-top: 20px;
        font-size: 28px;
        font-weight: bold;
        letter-spacing: -2px;
    }
</style>

<script>
    export default {
        name: '∞chan - Bans',
        data () {
            return {
                bans: []
            }
        },
        created() {
            let vm = this;
            vm.updateBans();
        },
        beforeRouteUpdate (to, from, next) {
            let vm = this;
            vm.updateBans();
            next();
        },
        methods: {
            updateBans() {
                let vm = this;

                _api.bans(function (err, res) {
                    if (err) {
                        console.log(err);
                        vm.bans = [];
                    }
                    else if (res.result) {
                        vm.bans = res.result;
                    }
                });
            }
        }
    }
</script>