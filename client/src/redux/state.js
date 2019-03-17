let rerender = () => {

}

let state = {
    testArray: [1,2,3,4,5],
    navLinks: [
        {name: 'Home', link: '/'},
        {name: 'About us', link: '/about'},
        {name: 'News', link: '/news'},
        {name: 'Contacts', link: '/contacts'},
        {name: 'login', link: '/login'},
    ],
}

export const subscribe = (observer) => {
    rerender = observer;
}
export default state;