function hide(){
    var element=document.getElementById("sidenevigation");
    element.classList.toggle("hidden");
   var rotate=document.getElementById("cross");
   rotate.classList.toggle("rotate");
}

const container = document.getElementById('product-container');

async function getProducts() {
    const container = document.getElementById('products');
    
    try {
        const response = await fetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json');
        const data = await response.json();
        console.log(data);

        // Clear "Loading..." text if you have any
        container.innerHTML = '';

        data.forEach(product => {
            const productHTML = `
                <div class="product-card" style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center; background: #fff;">
                    <img src="${product.image}" alt="${product.name}" style="max-width: 100%; height: 150px; object-fit: contain;">
                    <h3 style="font-size: 1.1rem; margin: 10px 0;">${product.name}</h3>
                    <p style="color: #2ecc71; font-weight: bold;">₹${product.priceCents}</p>
                </div>
            `;
            products.innerHTML += productHTML;
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        container.innerHTML = '<p>Failed to load products. Check console for errors.</p>';
    }
}

// Run the function
getProducts();