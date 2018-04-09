let _api = {};

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
        isAuthUrl: 'read/isAuth',
        banUrl: 'create/ban',
        deleteReplyUrl: 'delete/reply',
        numRepliesUrl: 'read/numReplies',
        updateBoardUrl: 'update/board'
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

    function put(url, params, fn) {
        axios.put(url, params)
            .then(function (response) {
                fn(null, response.data);
            })
            .catch(function (error) {
                fn(error);
            });
    }

    function del(url, params, fn) {
        axios.delete(url, {data: params})
            .then(function (response) {
                fn(null, response.data);
            })
            .catch(function (error) {
                fn(error);
            });
    }

    _api.boards = function (fn) {
        get(url('boardsUrl'), {}, fn);
    };

    _api.threads = function (letter, fn) {
        get(url('threadsUrl'), {letter: letter}, fn);
    };

    _api.board = function (letter, fn) {
        get(url('boardUrl'), {letter: letter}, fn);
    };

    _api.thread = function (id, fn) {
        get(url('threadUrl'), {_id: id}, fn);
    };

    _api.replies = function (threadId, fn) {
        get(url('repliesUrl'), {threadId: threadId}, fn);
    };

    _api.login = function (username, password, fn) {
        post(url('loginUrl'), {username: username, password: password}, fn);
    };

    _api.logout = function (fn) {
        post(url('logoutUrl'), {}, fn);
    };

    _api.bans = function (fn) {
        get(url('bansUrl'), {}, fn);
    };

    _api.isAuth = function (fn) {
        get(url('isAuthUrl'), {}, fn);
    };

    _api.ban = function (ip, message, fn) {
        post(url('banUrl'), {ip: ip, message: message}, fn);
    };

    _api.editBoard = function (id, name, fn) {
        put(url('updateBoardUrl'), { letter: id, name: name }, fn);
    };

    _api.deleteReply = function (id, fn) {
        post(url('deleteReplyUrl'), {_id: id}, fn);
    };

    _api.numReplies = function (id, fn) {
        get(url('numRepliesUrl'), {_id: id}, fn);
    }
})();
