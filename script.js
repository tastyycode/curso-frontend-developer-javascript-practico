const menuEmail = document.getElementById('navbar-email')
const productDetailCloseButton = document.getElementById('product-detail-close-btn')
const hamburgerMenu = document.getElementById('hamburger-menu')
const navShoppingCartIcon = document.querySelector('.navbar-shopping-cart')


const shoppingCartAside = document.getElementById('cart-detail-container')
const productDetailAside = document.getElementById('product-detail-container')
const mobileMenu = document.querySelector('.mobile-menu')
const desktopMenu = document.getElementById('desktop-menu')


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


const toggleDesktopMenu = () => {
    shoppingCartAside.classList.add('hidden')
    productDetailAside.classList.add('hidden')
    desktopMenu.classList.toggle('inactive')
}

const toggleMobileMenu = () => {
    shoppingCartAside.classList.add('hidden')
    productDetailAside.classList.add('hidden')
    mobileMenu.classList.toggle('hidden')
}

const toggleShoppingCartAside = () => {
    mobileMenu.classList.add('hidden')
    desktopMenu.classList.add('inactive')
    productDetailAside.classList.add('hidden')
    shoppingCartAside.classList.toggle('hidden')
}

const openProductDetailAside = () => {
    desktopMenu.classList.add('inactive')
    shoppingCartAside.classList.add('hidden')
    productDetailAside.classList.remove('hidden')
}

const closeProductDetailAside = () => {
    productDetailAside.classList.add('hidden')
}

const createElement = (tag, attributes = {}, children = []) => {
    const el = document.createElement(tag)

    for (attr in attributes) {
        el.setAttribute(attr, attributes[attr])
    }

    if (typeof children === 'object') {
        for (child of children) {
            el.appendChild(child)
        }
    } else if (typeof children === 'string') {
        el.innerHTML = children
    }

    return el
}

const createProductElement = (product) => {
    return createElement('div', { class: 'product-card' }, [
        (() => {
            const img = createElement('img', { src: product.image, title: product.name })
            img.addEventListener('click', openProductDetailAside)
            return img
        })(),
        createElement('div', { class: 'product-info' }, [
            createElement('div', {}, [
                createElement('p', {}, `$${product.price}`),
                createElement('p', {}, `${product.name}`),
            ]),
            createElement('figure', {}, [
                createElement('img', {src: './icons/bt_add_to_cart.svg', alt: ''})
            ])
        ])
    ])
}

const renderProducts = (products) => {
    for (product of products) {
        const cardsContainer = document.querySelector('.cards-container')
        const productElement = createProductElement(product)
        cardsContainer.appendChild(productElement)
    }
}

renderProducts(products)


// Event listeners
menuEmail.addEventListener('click', toggleDesktopMenu)
hamburgerMenu.addEventListener('click', toggleMobileMenu)
navShoppingCartIcon.addEventListener('click', toggleShoppingCartAside)
productDetailCloseButton.addEventListener('click', closeProductDetailAside)