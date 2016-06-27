let dummyData = [
    {id: 1, url: 'http://www.test1.com'},
    {id: 2, url: 'http://www.tes2.com'},
    {id: 3, url: 'http://www.tes3.com'},
    {id: 4, url: 'http://www.test4.com'},
    {id: 5, url: 'http://www.tes5.com'},
    {id: 6, url: 'http://www.test6.com'},
    {id: 7, url: 'http://www.test7.com'},
    {id: 8, url: 'http://www.test8.com'},
    {id: 9, url: 'http://www.test9.com'},
    {id: 10, url: 'http://www.test10.com'},
    {id: 11, url: 'http://www.test11.com'},
    {id: 12, url: 'http://www.test12.com'},
    {id: 13, url: 'http://www.test13.com'},
    {id: 14, url: 'http://www.test14.com'},
    {id: 15, url: 'http://www.test15.com'},
    {id: 16, url: 'http://www.test16.com'},
    {id: 17, url: 'http://www.test17.com'},
    {id: 18, url: 'http://www.test18.com'},
    {id: 19, url: 'http://www.test19.com'},
    {id: 20, url: 'http://www.test20.com'},
    {id: 21, url: 'http://www.test21.com'},
    {id: 22, url: 'http://www.test22.com'},
    {id: 23, url: 'http://www.test23.com'},
    {id: 24, url: 'http://www.test24.com'},
    {id: 25, url: 'http://www.test25.com'},
    {id: 26, url: 'http://www.test26.com'},
    {id: 27, url: 'http://www.test27.com'},
    {id: 28, url: 'http://www.test28.com'},
    {id: 29, url: 'http://www.test29.com'},
    {id: 30, url: 'http://www.test30.com'},
    {id: 31, url: 'http://www.test31.com'}
]



let store = {
    /**
     * Saves array of urls items to local storage
     * @param {Array} urls 
     */
    save(urls) {
        localStorage.setItem('urls', JSON.stringify(urls));
    },
    /**
     * Returns Links from local storage
     * @return {Array} 
     */
    get() {
        if(localStorage.getItem('urls') !== null){
            return JSON.parse(localStorage.getItem('urls'));
        }
        return dummyData;
    },
     /**
     * Returns Link from local storage
     * @param {String} id
     * @return {Object} 
     */
    find(id) {
        if(localStorage.getItem('urls') !== null){
            let urls = JSON.parse(localStorage.getItem('urls'));
            for(let i = 0; i < urls.length; i++) {
                if(urls[i].id === id){
                    return urls[i];
                }
            }
        }
    }
};


export default store;