// Definir el carrito como un array de productos
let cart = [];

// Función para actualizar el carrito en el DOM
function updateCart() {
    const cartContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Limpiar el contenedor de artículos del carrito
    cartContainer.innerHTML = '';
    
    // Calcular el total
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartContainer.appendChild(itemElement);
        
        total += item.price;
    });
    
    // Actualizar el total del carrito
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para añadir un producto al carrito
function addToCart(productName, productPrice) {
    const product = { name: productName, price: parseFloat(productPrice) };
    cart.push(product);
    updateCart();
}

// Función para manejar el formulario de pedido
function handleOrder() {
    // Aquí se puede agregar lógica para enviar el carrito al backend
    // Ejemplo: Enviar una solicitud POST al backend
    fetch('/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cart })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        cart = []; // Vaciar el carrito
        updateCart();
    })
    .catch(error => console.error('Error:', error));
}

// Manejar eventos de clic en los botones de añadir al carrito
document.addEventListener('DOMContentLoaded', () => {
    // Supongamos que cada producto en la página tiene un botón para añadir al carrito
    const addButtons = document.querySelectorAll('.add-to-cart');
    
    addButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.dataset.productName;
            const productPrice = event.target.dataset.productPrice;
            addToCart(productName, productPrice);
        });
    });
    
    // Manejar el envío del formulario de pedido
    const orderButton = document.getElementById('orderButton');
    if (orderButton) {
        orderButton.addEventListener('click', handleOrder);
    }
});
