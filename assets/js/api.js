let _api = { };

axios.defaults.withCredentials = true;

(function () {
    const root = 'http://localhost:3000/api/';
    const urls = {
        loginUrl: 'signin',
        logoutUrl: 'logout',
        currentUserUrl: 'current-user',
        videosUrl: 'videos'
    };
    function url(api) {
        return root + urls[api];
    }

    function get(url, params, fn) {
        axios.get(url, {
            params: params
        })
        .then(function (response) {
            fn(null, JSON.parse(response.data.split('\n')[1]));
        })
        .catch(function (error) {
            fn(JSON.parse(error.response.data.split('\n')[1]));
        });
    }

    function post(url, params, fn) {
        axios.post(url, params)
        .then(function (response) {
            fn(null, JSON.parse(response.data.split('\n')[1]));
        })
        .catch(function (error) {
            fn(JSON.parse(error.response.data.split('\n')[1]));
        });
    }

    _api.currentUser = function (fn) {
        get(url('currentUserUrl'), { }, fn);
    };

    _api.login = function (username, password, fn) {
        post(url('loginUrl'), { username: username, password: password }, fn);
    };

    _api.logout = function(fn) {
        post(url('logoutUrl'), {}, fn);
    };

    _api.videos = function(topicPath, accessLevel, offset, num, fn) {
        get(url('videosUrl'), { subject: topicPath.subject, course: topicPath.course, topic: topicPath.topic, accessLevel: accessLevel, offset: offset, num: num }, fn);
    };
})();
