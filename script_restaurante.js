
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Voltar ao Topo';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#ff5733';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const loginModal = document.createElement('div');
    loginModal.style.position = 'fixed';
    loginModal.style.top = '0';
    loginModal.style.left = '0';
    loginModal.style.width = '100%';
    loginModal.style.height = '100%';
    loginModal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    loginModal.style.display = 'flex';
    loginModal.style.justifyContent = 'center';
    loginModal.style.alignItems = 'center';
    loginModal.style.zIndex = '1000';
    loginModal.style.display = 'none';

    const loginForm = document.createElement('div');
    loginForm.style.backgroundColor = '#fff';
    loginForm.style.padding = '20px';
    loginForm.style.borderRadius = '8px';
    loginForm.style.width = '300px';
    loginForm.style.textAlign = 'center';

    loginForm.innerHTML = `
        <h2>Login</h2>
        <form>
            <div style="margin-bottom: 15px;">
                <input type="text" placeholder="Usuário" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <input type="password" placeholder="Senha" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <button type="submit" style="padding: 10px 20px; background-color: #ff5733; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Entrar</button>
        </form>
        <button id="closeLogin" style="margin-top: 10px; padding: 10px 20px; background-color: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Fechar</button>
    `;

    loginModal.appendChild(loginForm);
    document.body.appendChild(loginModal);

    const showLoginButton = document.createElement('button');
    showLoginButton.textContent = 'Login';
    showLoginButton.style.position = 'fixed';
    showLoginButton.style.top = '20px';
    showLoginButton.style.right = '20px';
    showLoginButton.style.padding = '10px 20px';
    showLoginButton.style.backgroundColor = '#ff5733';
    showLoginButton.style.color = '#fff';
    showLoginButton.style.border = 'none';
    showLoginButton.style.borderRadius = '4px';
    showLoginButton.style.cursor = 'pointer';
    document.body.appendChild(showLoginButton);

    showLoginButton.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    document.getElementById('closeLogin').addEventListener('click', () => {
        loginModal.style.display = 'none';
    });


    const addToCart = (itemName, itemPrice) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${itemName} foi adicionado ao carrinho!`);
    };
    
    document.querySelectorAll('.menu-item').forEach(item => {
        const name = item.querySelector('h3').textContent;
        const priceText = item.querySelector('p').textContent.match(/\\d+/g);
        const price = parseFloat(priceText.join('.'));
    
        item.querySelector('button').addEventListener('click', () => {
            addToCart(name, price);
        });
    },);
     
});

const addToCart = (itemName, itemPrice) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const itemIndex = cart.findIndex(item => item.name === itemName);

    if (itemIndex >= 0) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${itemName} foi adicionado ao carrinho!`);
};

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    const price = document.createElement('p');
    price.textContent = `Preço: R$ ${Math.floor(Math.random() * 50) + 20},00`;
    price.style.margin = '10px 0';
    item.appendChild(price);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Comprar';
    buyButton.style.padding = '10px 15px';
    buyButton.style.backgroundColor = '#28a745';
    buyButton.style.color = '#fff';
    buyButton.style.border = 'none';
    buyButton.style.borderRadius = '4px';
    buyButton.style.cursor = 'pointer';

    buyButton.addEventListener('click', () => {
        const prato = item.querySelector('h3').textContent;
        const priceValue = parseFloat(price.textContent.replace('Preço: R$', '').replace(',', '.'));

        addToCart(prato, priceValue);
    });

    item.appendChild(buyButton);
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="https://via.placeholder.com/80" alt="${item.name}">
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