document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover;">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Preço: R$ ${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
                <input type="number" value="${item.quantity}" min="1" style="width: 50px; text-align: center;">
                <button class="remove-btn">Remover</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;

        cartItem.querySelector('.remove-btn').addEventListener('click', () => {
            const updatedCart = cart.filter(cartItem => cartItem.name !== item.name);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            window.location.reload();
        });
    });

    document.querySelector('.cart-footer h3').textContent = `Total: R$ ${total.toFixed(2)}`;
});document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover;">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Preço: R$ ${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
                <input type="number" value="${item.quantity}" min="1" style="width: 50px; text-align: center;">
                <button class="remove-btn">Remover</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;

        cartItem.querySelector('.remove-btn').addEventListener('click', () => {
            const updatedCart = cart.filter(cartItem => cartItem.name !== item.name);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            window.location.reload();
        });
    });

    document.querySelector('.cart-footer h3').textContent = `Total: R$ ${total.toFixed(2)}`;
});