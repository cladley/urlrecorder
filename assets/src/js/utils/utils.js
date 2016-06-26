export default {
    uid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + '' + s4();
    },

    doesUrlExist(value, callback) {
        var request = new XMLHttpRequest();

        request.onerror = function(e) {
            alert("Sorry we cannot make cross domain requests from javascript");
            callback(false);
        }

        request.open('GET', value, true);
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                if (request.status === 404) {
                    callback({notfound: true});
                }
            } else {
                callback({success: true});
            }
        };
        request.send();

    },

    isValidUrl(value) {
        var urlPattern = /^(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/ig;
        var regex = new RegExp(urlPattern);
        return value.match(regex);
    }
}