let _api = { };

axios.defaults.withCredentials = true;

(function () {
    const root = 'http://localhost:3001/';
    const urls = {
        loginUrl: 'create/session',
        logoutUrl: 'read/endSession',
        boardsUrl: 'read/boards',
        threadsUrl: 'read/threads',
        boardUrl: 'read/board',
        threadUrl: 'read/thread',
        repliesUrl: 'read/replies',
        bansUrl: 'read/bans',
        isAuthUrl: 'read/isAuth'
    };
    function url(api) {
        return root + urls[api];
    }

    function get(url, params, fn) {
        axios.get(url, {
            params: params
        })
        .then(function (response) {
            fn(null, response.data);
        })
        .catch(function (error) {
            fn(error);
        });
    }

    function post(url, params, fn) {
        axios.post(url, params)
        .then(function (response) {
            fn(null, response.data);
        })
        .catch(function (error) {
            fn(error);
        });
    }

    _api.boards = function (fn) {
        get(url('boardsUrl'), { }, fn);
    };

    _api.threads = function (letter, fn) {
        get(url('threadsUrl'), { letter: letter }, fn);
    };

    _api.board = function (letter, fn) {
        get(url('boardUrl'), { letter: letter }, fn);
    };

    _api.thread = function(id, fn) {
        get(url('threadUrl'), { _id: id }, fn);
    };

    _api.replies = function(threadId, fn) {
        get(url('repliesUrl'), { threadId: threadId }, fn);
    };

    _api.login = function (username, password, fn) {
        post(url('loginUrl'), { username: username, password: password }, fn);
    };

    _api.logout = function(fn) {
        post(url('logoutUrl'), {}, fn);
    };

    _api.bans = function (fn) {
        get(url('bansUrl'), {}, fn);
    };

    _api.isAuth = function (fn) {
        get(url('isAuthUrl'), {}, fn);
    };
})();
