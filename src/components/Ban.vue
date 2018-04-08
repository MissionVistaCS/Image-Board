<template>
    <div class="ban">
        <tbody>
        <tr data-type="IP">
            <td>IP</td>
            <td><input id="ip" name="ip" type="text" v-model="ip"></td>
        </tr>
        <tr data-type="Message">
            <td>Message</td>
            <td><textarea name="message" cols="48" rows="4" wrap="soft" tabindex="4" v-model="message"></textarea></td>
        </tr>
        </tbody>
        <input type="button" v-on:click="ban" value="Ban">
        <p v-text="error"></p>
    </div>
</template>

<style scoped></style>

<script>
    export default {
        data() {
            return {
                ip: this.$route.params.ip,
                message: '',
                error: ''
            }
        },
        methods: {
            ban() {
                let vm = this;
                _api.ban(this.ip, this.message, function (err, res) {
                    if (err) {
                        console.log(err);
                        vm.error = err;
                        vm.error = err.message;
                    }
                    else if (res.error) {
                        console.log(res.error);
                        vm.error = res.error;
                    }
                    else if (res.result) {
                        vm.$router.push('/bans');
                    }
                });
            }
        }
    }
</script>