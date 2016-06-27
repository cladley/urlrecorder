export default {
    /**
     * Creates a unique id
     * @param {Array} urls 
     * @return {String}
     */
    uid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + '' + s4();
    },
    /**
     * Checks if url exists
     * @param {String} value 
     * @param {Function} callback
     */
    doesUrlExist(value, callback) {
        callback({success: true});

         /**
         * Because of cross domain security policy, we cannot make url request from
         * javascript runnning in the browser to other domains. Uncomment to test
         */

        // var request = new XMLHttpRequest();

        // request.onerror = function(e) {
        //     alert("Sorry we cannot make cross domain requests from javascript");
        //     callback(false);
        // }

        // request.open('GET', value, true);
        // request.onreadystatechange = function() {
        //     if (request.readyState === 4) {
        //         if (request.status === 404) {
        //             callback({notfound: true});
        //         }
        //     } else {
        //         callback({success: true});
        //     }
        // };
        // request.send();

    },
    /**
     * Checks if url is valid using regular expression
     * @param {String} value 
     * @return {Boolean} 
     */
    isValidUrl(value) {
        var urlPattern = /^(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/ig;
        var regex = new RegExp(urlPattern);
        return value.match(regex);
    }
};