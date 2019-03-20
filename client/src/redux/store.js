const store = {
    _rerender () {
        console.log('rerender')
    },
    _state: {
        testArray: [1,2,3,4,5],
        navLinks: [
            {name: 'Home', link: '/'},
            {name: 'About us', link: '/about'},
            {name: 'News', link: '/news'},
            {name: 'Contacts', link: '/contacts'},
            {name: 'login', link: '/login'},
        ],
    },
    subscribe (observer) {
        this._rerender = observer;
    }
}

export default store;