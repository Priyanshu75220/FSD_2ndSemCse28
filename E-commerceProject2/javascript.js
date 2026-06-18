
const products = [
  { id:1, name:"Premium Wireless Headphones", category:"Electronics", price:299.99, rating:4.9, image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format" },
  { id:2, name:"Designer Leather Handbag", category:"Accessories", price:189.99, rating:4.7, image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&auto=format" },
  { id:3, name:"Slim Fit Casual Blazer", category:"Fashion", price:129.99, rating:4.6, image:"https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=400&h=400&fit=crop&auto=format" },
  { id:4, name:"Smart Watch Series 9", category:"Electronics", price:449.99, rating:4.9, image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format" },
  { id:5, name:"Linen Summer Dress", category:"Fashion", price:79.99, rating:4.5, image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&auto=format" },
  { id:6, name:"Minimalist Desk Lamp", category:"Home & Living", price:89.99, rating:4.8, image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop&auto=format" },
  { id:7, name:"Running Sneakers Pro", category:"Fashion", price:159.99, rating:4.7, image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format" },
  { id:8, name:"Polaroid Sunglasses", category:"Accessories", price:64.99, rating:4.4, image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&auto=format" }
];

let cart = [];
let currentCategory = "All";
let likedProducts = new Set();

function showPage(page) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'products') renderProductsPage();
  if (page === 'cart') renderCart();
}

function starsHtml(rating) {
  let h = '<span class="stars">';
  for (let i = 1; i <= 5; i++) h += i <= Math.floor(rating) ? '<i class="bi bi-star-fill"></i>' : '<i class="bi bi-star text-secondary"></i>';
  return h + `</span> <span class="rating-val">(${rating})</span>`;
}

function productCardHtml(p) {
  const liked = likedProducts.has(p.id);
  return `
    <div class="product-card h-100">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.rating >= 4.8 ? '<span class="badge-seller">⭐ Best Seller</span>' : ''}
        <button class="wishlist-btn ${liked ? 'liked' : ''}" onclick="toggleLike(${p.id}, this)">
          <i class="bi bi-heart${liked ? '-fill' : ''}"></i>
        </button>
        <div class="add-overlay">
          <button class="btn-add-overlay" onclick="addToCart(${p.id})">
            <i class="bi bi-bag-plus"></i> Add to Cart
          </button>
        </div>
      </div>
      <div class="product-body">
        <p class="product-cat">${p.category}</p>
        <h6 class="product-name">${p.name}</h6>
        <div class="mb-2">${starsHtml(p.rating)}</div>
        <div class="d-flex align-items-center justify-content-between">
          <span class="product-price">$${p.price.toFixed(2)}</span>
          <button class="btn-cart-mobile d-md-none" onclick="addToCart(${p.id})"><i class="bi bi-bag-plus"></i></button>
        </div>
      </div>
    </div>`;
}

function renderFeatured() {
  document.getElementById('featuredGrid').innerHTML = products.slice(0, 4)
    .map(p => `<div class="col-sm-6 col-lg-3">${productCardHtml(p)}</div>`).join('');
}

function renderProductsPage() {
  const sortVal = document.getElementById('sortSelect')?.value || 'featured';
  let filtered = currentCategory === 'All' ? [...products] : products.filter(p => p.category === currentCategory);
  if (sortVal === 'price-low') filtered.sort((a,b) => a.price - b.price);
  else if (sortVal === 'price-high') filtered.sort((a,b) => b.price - a.price);
  else if (sortVal === 'rating') filtered.sort((a,b) => b.rating - a.rating);

  const grid = document.getElementById('productsGrid');
  const empty = document.getElementById('emptyState');
  document.getElementById('productCount').textContent = filtered.length;

  if (filtered.length === 0) { grid.innerHTML = ''; empty.classList.remove('d-none'); }
  else { empty.classList.add('d-none'); grid.innerHTML = filtered.map(p => `<div class="col-sm-6 col-lg-4 col-xl-3">${productCardHtml(p)}</div>`).join(''); }
  renderCategoryChips();
}

function renderCategoryChips() {
  const cats = ['All','Electronics','Fashion','Accessories','Home & Living'];
  document.getElementById('categoryChips').innerHTML = cats.map(c =>
    `<button class="filter-chip ${currentCategory===c?'active':''}" onclick="setCategory('${c}')">${c}</button>`
  ).join('');
}

function setCategory(cat) { currentCategory = cat; renderProductsPage(); }
function filterCategory(cat) { currentCategory = cat; showPage('products'); }

function filterSearch(val) {
  if (!val) { renderProductsPage(); return; }
  document.querySelectorAll('#productsGrid > div').forEach(card => {
    const name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
    card.style.display = name.includes(val.toLowerCase()) ? '' : 'none';
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.quantity++;
  else cart.push({ ...product, quantity: 1 });
  updateCartBadge();
  showToast(product.name);
}

function removeFromCart(productId) { cart = cart.filter(i => i.id !== productId); updateCartBadge(); renderCart(); }

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
  updateCartBadge(); renderCart();
}

function updateCartBadge() {
  const total = cart.reduce((s,i) => s+i.quantity, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

function renderCart() {
  const subtotal = cart.reduce((s,i) => s+i.price*i.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const emptyEl = document.getElementById('emptyCart');
  const contentEl = document.getElementById('cartContent');

  if (cart.length === 0) {
    emptyEl.classList.remove('d-none'); emptyEl.style.display = 'flex';
    contentEl.classList.add('d-none'); return;
  }
  emptyEl.classList.add('d-none'); emptyEl.style.display = 'none';
  contentEl.classList.remove('d-none');

  document.getElementById('cartItemCount').textContent = `${cart.reduce((s,i)=>s+i.quantity,0)} item(s) in your cart`;
  document.getElementById('cartItemsList').innerHTML = cart.map(item => `
    <div class="bg-white rounded-4 shadow-sm p-4">
      <div class="d-flex gap-4">
        <div class="rounded-3 overflow-hidden flex-shrink-0" style="width:110px;height:110px;background:linear-gradient(135deg,#ede9fe,#fce7f3)">
          <img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover" />
        </div>
        <div class="flex-grow-1 min-w-0">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <small class="text-uppercase" style="color:#7c3aed;letter-spacing:.05em;font-size:.7rem">${item.category}</small>
              <h6 class="fw-semibold mb-2 mt-1">${item.name}</h6>
            </div>
            <button class="icon-btn" style="color:#ef4444" onclick="removeFromCart(${item.id})"><i class="bi bi-trash3"></i></button>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-2 flex-wrap gap-3">
            <div class="d-flex align-items-center gap-2">
              <button class="icon-btn" style="background:#ede9fe;color:#7c3aed" onclick="updateQuantity(${item.id},-1)"><i class="bi bi-dash"></i></button>
              <span style="min-width:1.5rem;text-align:center;font-weight:600">${item.quantity}</span>
              <button class="icon-btn" style="background:#ede9fe;color:#7c3aed" onclick="updateQuantity(${item.id},1)"><i class="bi bi-plus"></i></button>
            </div>
            <div class="text-end">
              <small class="text-muted d-block">$${item.price.toFixed(2)} each</small>
              <span class="product-price" style="font-size:1.2rem">$${(item.price*item.quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>`).join('');

  document.getElementById('summarySubtotal').textContent = '$' + subtotal.toFixed(2);
  document.getElementById('summaryShipping').innerHTML = shipping === 0 ? '<span style="color:#059669">FREE</span>' : '$' + shipping.toFixed(2);
  document.getElementById('summaryTax').textContent = '$' + tax.toFixed(2);
  document.getElementById('summaryTotal').textContent = '$' + total.toFixed(2);

  const noteEl = document.getElementById('freeShippingNote');
  if (subtotal < 100) { noteEl.classList.remove('d-none'); document.getElementById('shippingDiff').textContent = '$' + (100-subtotal).toFixed(2); }
  else noteEl.classList.add('d-none');
}

function toggleLike(productId, btn) {
  if (likedProducts.has(productId)) { likedProducts.delete(productId); btn.classList.remove('liked'); btn.innerHTML = '<i class="bi bi-heart"></i>'; }
  else { likedProducts.add(productId); btn.classList.add('liked'); btn.innerHTML = '<i class="bi bi-heart-fill"></i>'; }
}

let toastTimer;
function showToast(name) {
  const toast = document.getElementById('cartToast');
  document.getElementById('toastProductName').textContent = name;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

renderFeatured();
renderCategoryChips();