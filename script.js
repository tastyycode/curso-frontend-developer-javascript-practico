const menuEmail = document.getElementById('navbar-email')
const hamburgerMenu = document.getElementById('hamburger-menu')
const navShoppingCartIcon = document.querySelector('.navbar-shopping-cart')


const toggleDesktopMenu = () => {
    const desktopMenu = document.getElementById('desktop-menu')
    const shoppingCartAside = document.querySelector('aside.product-detail')

    if (!shoppingCartAside.classList.value.includes('transparent')) {
        toggleShoppingCartAside()
    }

    desktopMenu.classList.toggle('inactive')
}

const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    const shoppingCartAside = document.querySelector('aside.product-detail')

    if (!shoppingCartAside.classList.value.includes('transparent')) {
        toggleShoppingCartAside()
    }

    mobileMenu.classList.toggle('transparent')
}

const toggleShoppingCartAside = () => {
    const shoppingCartAside = document.querySelector('aside.product-detail')
    const mobileMenu = document.querySelector('.mobile-menu')
    const desktopMenu = document.getElementById('desktop-menu')

    if (!mobileMenu.classList.value.includes('transparent')) {
        toggleMobileMenu()
    }

    if (!desktopMenu.classList.contains('inactive')) {
        toggleDesktopMenu()
    }

    shoppingCartAside.classList.toggle('transparent')
}

// Event listeners
menuEmail.addEventListener('click', toggleDesktopMenu)
hamburgerMenu.addEventListener('click', toggleMobileMenu)
navShoppingCartIcon.addEventListener('click', toggleShoppingCartAside)

// Products list
const products = []
products.push({
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Bike',
    price: 120.00,
})
products.push({
    name: 'Pantalla',
    price: 2000.00,
    image: 'https://www.lg.com/mx/images/televisores/md07557413/gallery/D1.jpg'
})
products.push({
    name: 'Computadora',
    price: 500.00,
    image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00019516116544L.jpg'
})

const createProductElement = (product) => {
    const productElement = document.createElement('div')
    productElement.classList.add('product-card')
    productElement.innerHTML = `<img src="${product.image}"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>$${product.price}</p>
                        <p>${product.name}</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>`
    return productElement
}

const renderProducts = (products) => {
    for (product of products) {
        const cardsContainer = document.querySelector('.cards-container')
        const productElement = createProductElement(product)
        cardsContainer.appendChild(productElement)
    }
}

renderProducts(products)