let data = [
    {id: 1, url: 'http://www.google.com'},
    {id: 2, url: 'http://www.bing.com'},
    {id: 3, url: 'http://www.facebook.com'},
    {id: 4, url: 'http://www.microsoft.com'},
    {id: 5, url: 'http://reddit.com'},
    {id: 6, url: 'http://www.apple.com'},
    {id: 7, url: 'http://www.football365.com'},
    {id: 8, url: 'http://www.bbc.co.uk'},
    {id: 9, url: 'http://www.guardian.co.uk'},
    {id: 10, url: 'http://www.irishtimes.com'},
    {id: 11, url: 'http://www.arstechnica.com'}
];

let store = {
    /**
     * Returns Links from local storage
     * @return {Array} 
     */
    get() {
        return data;
    }
}



export default store;