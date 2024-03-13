const products = [
    {   
        id: 1,
        img: 'images/pizza.jpg',
        name: 'Pizza',
        description: 'Bánh siêu ngon',
        price: 30
    },
    {
        id: 2,
        img: 'images/Hamburger.jpg',
        name: 'Hamburger',
        description: 'Bánh siêu ngon',
        price: 15
    },
    {
        id: 3,
        img: 'images/bread.jpg',
        name: 'Bread',
        description: 'Bánh siêu ngon',
        price: 20
    },
    {
        id: 4,
        img: 'images/Cake.jpg',
        name: 'Cake',
        description: 'Bánh siêu ngon',
        price: 10
    },
]
// localStorage.setItem("dataProduct", JSON.stringify(products))
export const dataProduct = (state = products, action)=>{
    return state
}