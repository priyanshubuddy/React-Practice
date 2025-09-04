import React, { Component } from 'react';
import './App.css';
import ProductList from "./components/product-list";
import Cart from "./components/cart";
import 'h8k-components';

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: [],
                subTotal: 0,
                totalPrice: 0,
                discount: 0,
                selectedCoupon: '0'
            },
            products
        }
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    handleCouponChange = (event) => {
        let cart = { ...this.state.cart };
        cart.selectedCoupon = event.target.value;
        cart = this.calculateCartTotals(cart);
        this.setState({ cart });
    };


    calculateCartTotals(cart) {
        let subTotal = 0;

        cart.items.forEach(item => {
            subTotal += item.price * item.quantity
        });

        const discountRate = parseInt(cart.selectedCoupon || '0');
        const discount = (subTotal * discountRate) / 100;
        const totalPrice = subTotal - discount;

        cart.subTotal = subTotal;
        cart.discount = discount;
        cart.totalPrice = totalPrice;

        return cart;
    }

    addToCart(index) {
        const products = this.state.products;
        let cart = { ...this.state.cart };
        const product = products[index];
        const cartItemIndex = cart.items.findIndex(item => item.id === product.id);

        if (cartItemIndex !== -1) {
            cart.items[cartItemIndex].quantity += 1;
        } else {
            cart.items.push({
                id: products[index].id,
                price: products[index].price,
                item: products[index].heading,
                quantity: 1
            });
        }

        product.cartQuantity += 1;

        cart = this.calculateCartTotals(cart);

        this.setState({
            products,
            cart
        })
    }

    removeFromCart(index) {
        const products = this.state.products;
        products[index].cartQuantity = 0;
        let cart = { ...this.state.cart };
        const product = products[index];
        const cartItemIndex = cart.items.findIndex(item => item.id === product.id);

        if (cartItemIndex !== -1) {
            const cartItem = cart.items[cartItemIndex];

            if (cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            } else {
                cart.items.splice(cartItemIndex, 1);
            }


            product.cartQuantity = Math.max(product.cartQuantity - 1, 0);

            cart = this.calculateCartTotals(cart);

            this.setState({
                cart,
                products
            })
        }
    }

    render() {

        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList products={this.state.products} addToCart={this.addToCart} removeFromCart={this.removeFromCart} />
                    <Cart cart={this.state.cart} handleCouponChange={this.handleCouponChange} />
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        heading: "Cap - $10",
        name: "Cap",
        price: 10
    },
    {
        heading: "Hand Bag - $30",
        name: "HandBag",
        price: 30
    },
    {
        heading: "Shirt - $30",
        name: "Shirt",
        price: 30
    },
    {
        heading: "Shoes - $50",
        name: "Shoe",
        price: 50
    },
    {
        heading: "Pant - $40",
        name: "Pant",
        price: 40
    },
    {
        heading: "Slipper - $20",
        name: "Slipper",
        price: 20
    }
];
export default App;
