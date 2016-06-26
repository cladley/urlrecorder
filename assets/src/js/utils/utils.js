export default {
    uid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + '-' + s4();
    },
    isValidUrl(value) {
        var urlPattern = /^(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/ig;
        var regex = new RegExp(urlPattern);
        return value.match(regex);
    }
}