class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts(); 
    }
    
    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for(let productObj of this.goods){
            const product = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
    }
    
    getSum() {
        let res = this.allProducts.reduce((s, item) => s + item.price,0);
        alert(res);
    }
}

class ProductItem {
    constructor(product, img='https://i.pinimg.com/200x150/cd/6b/10/cd6b10a9932a42897e78a8b9949ef6f2.jpg'){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }
    render() {

    }
}

class ElemBasket {
    render() {}
}