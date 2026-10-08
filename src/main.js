import * as THREE from "three";
import "./style.css";

/* =========================================================
   TECHDECOR — V5 REAL PRODUCT IMAGES
   ========================================================= */

const products = [
  {
    id: "x1",
    code: "TD-X1",
    name: "QUANTUM X1",
    category: "AUDIO",
    price: 12999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
    description:
      "Immersive wireless headphones engineered for premium sound, adaptive noise cancellation and all-day performance.",
    features: [
      "Adaptive ANC",
      "40 Hour Battery",
      "Bluetooth 5.3",
      "Spatial Audio"
    ]
  },
  {
    id: "k2",
    code: "TD-K2",
    name: "TITAN K2",
    category: "KEYBOARD",
    price: 7499,
    image:
      "https://images.unsplash.com/photo-1634306625640-04ac053e544b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Precision mechanical keyboard with responsive switches, RGB illumination and a premium aluminum-inspired body.",
    features: [
      "Mechanical Switches",
      "RGB Lighting",
      "USB-C",
      "Anti-Ghosting"
    ]
  },
  {
    id: "m3",
    code: "TD-M3",
    name: "VECTOR M3",
    category: "MOUSE",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?auto=format&fit=crop&w=1200&q=85",
    description:
      "High precision wireless mouse with ergonomic contours, fast response and an advanced optical sensor.",
    features: [
      "26K DPI",
      "70 Hour Battery",
      "Wireless",
      "USB-C"
    ]
  }
];


/* =========================================================
   WEBSITE
   ========================================================= */

document.body.innerHTML = `
<div class="site">

<header class="navbar">

  <a href="#home" class="brand">
    <span class="brand-mark">T</span>
    <span>TECH<span>DECOR</span></span>
  </a>

  <nav class="nav-links">
    <a href="#home">HOME</a>
    <a href="#products">PRODUCTS</a>
    <a href="#about">ABOUT</a>
  </nav>

  <button id="cartButton" class="cart-button">
    CART <b id="cartCount">0</b>
  </button>

</header>


<section class="hero" id="home">

  <div class="hero-background"></div>

  <div class="hero-content">

    <div class="hero-small">
      <span></span>
      NEXT GENERATION TECHNOLOGY
    </div>

    <h1>
      THE FUTURE
      <span>IS HERE.</span>
    </h1>

    <p>
      Premium technology products built around
      performance, precision and futuristic design.
    </p>

    <div class="hero-actions">

      <a href="#products" class="primary-button">
        EXPLORE PRODUCTS
        <span>↗</span>
      </a>

      <a href="#about" class="secondary-button">
        DISCOVER TECH
      </a>

    </div>

    <div class="hero-stats">

      <div>
        <strong>03</strong>
        <span>PRODUCTS</span>
      </div>

      <div>
        <strong>∞</strong>
        <span>POSSIBILITIES</span>
      </div>

      <div>
        <strong>2026</strong>
        <span>COLLECTION</span>
      </div>

    </div>

  </div>

  <div class="hero-scene">

    <div class="scene-label scene-label-1">
      SYSTEM / 01
    </div>

    <div class="scene-label scene-label-2">
      TECHDECOR LAB
    </div>

    <div id="hero3d" class="three-container"></div>

  </div>

  <div class="hero-bottom">
    <span>SCROLL TO EXPLORE</span>
    <div></div>
    <span>EST. 2026</span>
  </div>

</section>


<section class="products-section" id="products">

  <div class="section-heading">

    <div>

      <div class="section-label">
        01 / COLLECTION
      </div>

      <h2>
        DESIGNED FOR
        <span>THE FUTURE.</span>
      </h2>

    </div>

    <p>
      Premium technology with real product
      photography and a modern digital shopping
      experience.
    </p>

  </div>


  <div id="productsGrid" class="products-grid"></div>


  <div class="feature-row">

    <div class="feature">
      <span>01</span>
      <strong>REAL PRODUCT VISUALS</strong>
      <p>
        Product photography replaces the old
        placeholder figures.
      </p>
    </div>

    <div class="feature">
      <span>02</span>
      <strong>DETAILED PRODUCTS</strong>
      <p>
        Open any product for a larger shopping view
        and technical details.
      </p>
    </div>

    <div class="feature">
      <span>03</span>
      <strong>FAST EXPERIENCE</strong>
      <p>
        Lightweight frontend with your existing
        Three.js experience.
      </p>
    </div>

  </div>

</section>


<section class="about-section" id="about">

  <div class="about-inner">

    <div class="section-label">
      02 / ABOUT TECHDECOR
    </div>

    <h2>
      TECHNOLOGY
      <span>REDEFINED.</span>
    </h2>

    <p>
      TECHDECOR is a futuristic technology concept
      built around premium hardware, modern digital
      experiences and a bold visual identity.
    </p>

  </div>

  <div class="about-number">
    2026
  </div>

</section>


<footer class="footer">

  <div class="footer-brand">

    <div class="brand">
      <span class="brand-mark">T</span>
      <span>TECH<span>DECOR</span></span>
    </div>

    <p>
      THE FUTURE IS HERE.
    </p>

  </div>

  <div class="footer-links">

    <a href="#home">HOME</a>
    <a href="#products">PRODUCTS</a>
    <a href="#about">ABOUT</a>

  </div>

  <div class="footer-copy">
    © 2026 TECHDECOR
  </div>

</footer>


<!-- CART -->

<div id="cartOverlay" class="cart-overlay"></div>

<aside id="cartPanel" class="cart-panel">

  <div class="cart-header">

    <div>
      <small>TECHDECOR</small>
      <h2>YOUR CART</h2>
    </div>

    <button id="closeCart" class="close-button">
      ×
    </button>

  </div>

  <div id="cartItems" class="cart-items"></div>

  <div class="cart-footer">

    <div class="cart-total">
      <span>TOTAL</span>
      <strong id="cartTotal">₹0</strong>
    </div>

    <button
      id="checkoutButton"
      class="checkout-button"
    >
      CHECKOUT
    </button>

  </div>

</aside>


<!-- PRODUCT DETAIL -->

<div id="productModal" class="modal">

  <div class="product-detail-box">

    <button
      id="closeProductModal"
      class="close-button detail-close"
    >
      ×
    </button>

    <div class="detail-image-wrap">
      <img id="modalImage" alt="">
    </div>

    <div class="detail-content">

      <div
        id="modalCategory"
        class="modal-category"
      ></div>

      <h2 id="modalTitle"></h2>

      <p id="modalDescription"></p>

      <strong
        id="modalPrice"
        class="modal-price"
      ></strong>

      <div
        id="modalFeatures"
        class="modal-features"
      ></div>

      <button
        id="modalAddButton"
        class="primary-button full-button"
      >
        ADD TO CART
      </button>

    </div>

  </div>

</div>


<!-- CHECKOUT -->

<div id="checkoutModal" class="modal">

  <div class="checkout-box">

    <button
      id="closeCheckout"
      class="close-button detail-close"
    >
      ×
    </button>

    <div class="section-label">
      CHECKOUT
    </div>

    <h2>
      COMPLETE
      <span>YOUR ORDER.</span>
    </h2>

    <p class="checkout-note">
      Demo checkout — no real payment is processed.
    </p>

    <div class="checkout-fields">

      <input
        id="customerName"
        placeholder="Full name"
      >

      <input
        id="customerPhone"
        placeholder="Phone number"
      >

      <input
        id="customerEmail"
        placeholder="Email address"
      >

      <input
        id="customerCity"
        placeholder="City"
      >

      <textarea
        id="customerAddress"
        placeholder="Delivery address"
      ></textarea>

    </div>

    <div
      id="checkoutSummary"
      class="checkout-summary"
    ></div>

    <button
      id="confirmOrder"
      class="primary-button full-button"
    >
      PLACE DEMO ORDER
    </button>

  </div>

</div>

</div>
`;


/* =========================================================
   PRODUCT CARDS
   ========================================================= */

const productsGrid =
  document.getElementById(
    "productsGrid"
  );


productsGrid.innerHTML =
  products.map(
    (product, index) => `

      <article class="product-card">

        <div class="product-visual">

          <div class="product-number">
            0${index + 1}
          </div>

          <div class="product-category">
            ${product.category}
          </div>

          <div class="visual-glow"></div>

          <img
            class="product-photo"
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >

        </div>

        <div class="product-info">

          <div class="availability">
            AVAILABLE NOW
          </div>

          <h3>
            ${product.name}
          </h3>

          <p>
            ${product.description}
          </p>

          <div class="product-footer">

            <strong>
              ₹${product.price.toLocaleString("en-IN")}
            </strong>

            <div class="product-buttons">

              <button
                class="details-button"
                data-details="${product.id}"
              >
                DETAILS
              </button>

              <button
                class="add-button"
                data-add="${product.id}"
              >
                ADD +
              </button>

            </div>

          </div>

        </div>

      </article>

    `
  ).join("");


/* =========================================================
   CART
   ========================================================= */

let cart =
  JSON.parse(
    localStorage.getItem(
      "techdecor_cart"
    ) || "[]"
  );


const cartButton =
  document.getElementById(
    "cartButton"
  );

const cartPanel =
  document.getElementById(
    "cartPanel"
  );

const cartOverlay =
  document.getElementById(
    "cartOverlay"
  );

const closeCart =
  document.getElementById(
    "closeCart"
  );

const cartItems =
  document.getElementById(
    "cartItems"
  );

const cartCount =
  document.getElementById(
    "cartCount"
  );

const cartTotal =
  document.getElementById(
    "cartTotal"
  );


function saveCart() {

  localStorage.setItem(
    "techdecor_cart",
    JSON.stringify(cart)
  );

}


function itemCount() {

  return cart.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

}


function totalPrice() {

  return cart.reduce(
    (sum, item) =>
      sum +
      item.price *
      item.quantity,
    0
  );

}


function openCart() {

  cartPanel.classList.add(
    "active"
  );

  cartOverlay.classList.add(
    "active"
  );

}


function closeCartPanel() {

  cartPanel.classList.remove(
    "active"
  );

  cartOverlay.classList.remove(
    "active"
  );

}


function addToCart(id) {

  const product =
    products.find(
      item => item.id === id
    );

  if (!product) return;

  const existing =
    cart.find(
      item => item.id === id
    );

  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });

  }

  saveCart();
  renderCart();

}


function changeQuantity(
  id,
  amount
) {

  const item =
    cart.find(
      product =>
        product.id === id
    );

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {

    cart =
      cart.filter(
        product =>
          product.id !== id
      );

  }

  saveCart();
  renderCart();

}


function renderCart() {

  cartCount.textContent =
    itemCount();

  cartTotal.textContent =
    "₹" +
    totalPrice().toLocaleString(
      "en-IN"
    );


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        YOUR CART IS EMPTY
      </div>
    `;

    return;

  }


  cartItems.innerHTML =
    cart.map(
      item => `

        <div class="cart-item">

          <div>

            <strong>
              ${item.name}
            </strong>

            <small>
              ₹${item.price.toLocaleString("en-IN")}
            </small>

            <div class="quantity">

              <button
                class="quantity-button"
                data-minus="${item.id}"
              >
                −
              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                class="quantity-button"
                data-plus="${item.id}"
              >
                +
              </button>

            </div>

          </div>

          <strong>
            ₹${(
              item.price *
              item.quantity
            ).toLocaleString("en-IN")}
          </strong>

        </div>

      `
    ).join("");


  document
    .querySelectorAll(
      "[data-minus]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            changeQuantity(
              button.dataset.minus,
              -1
            );

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-plus]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            changeQuantity(
              button.dataset.plus,
              1
            );

          }
        );

      }
    );

}


cartButton.addEventListener(
  "click",
  openCart
);

closeCart.addEventListener(
  "click",
  closeCartPanel
);

cartOverlay.addEventListener(
  "click",
  closeCartPanel
);


document
  .querySelectorAll(
    "[data-add]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          addToCart(
            button.dataset.add
          );

          openCart();

        }
      );

    }
  );


/* =========================================================
   PRODUCT DETAIL
   ========================================================= */

const productModal =
  document.getElementById(
    "productModal"
  );

const modalImage =
  document.getElementById(
    "modalImage"
  );

const modalCategory =
  document.getElementById(
    "modalCategory"
  );

const modalTitle =
  document.getElementById(
    "modalTitle"
  );

const modalDescription =
  document.getElementById(
    "modalDescription"
  );

const modalPrice =
  document.getElementById(
    "modalPrice"
  );

const modalFeatures =
  document.getElementById(
    "modalFeatures"
  );

const modalAddButton =
  document.getElementById(
    "modalAddButton"
  );

let selectedProduct = null;


function openProduct(id) {

  selectedProduct =
    products.find(
      product =>
        product.id === id
    );

  if (!selectedProduct) return;


  modalImage.src =
    selectedProduct.image;

  modalImage.alt =
    selectedProduct.name;

  modalCategory.textContent =
    selectedProduct.category;

  modalTitle.textContent =
    selectedProduct.name;

  modalDescription.textContent =
    selectedProduct.description;

  modalPrice.textContent =
    "₹" +
    selectedProduct.price.toLocaleString(
      "en-IN"
    );

  modalFeatures.innerHTML =
    selectedProduct.features
      .map(
        feature =>
          `<div>✓ ${feature}</div>`
      )
      .join("");


  productModal.classList.add(
    "active"
  );

}


document
  .querySelectorAll(
    "[data-details]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          openProduct(
            button.dataset.details
          );

        }
      );

    }
  );


document
  .getElementById(
    "closeProductModal"
  )
  .addEventListener(
    "click",
    () => {

      productModal.classList.remove(
        "active"
      );

    }
  );


modalAddButton.addEventListener(
  "click",
  () => {

    if (!selectedProduct) return;

    addToCart(
      selectedProduct.id
    );

    productModal.classList.remove(
      "active"
    );

    openCart();

  }
);


/* =========================================================
   CHECKOUT
   ========================================================= */

const checkoutModal =
  document.getElementById(
    "checkoutModal"
  );

const checkoutSummary =
  document.getElementById(
    "checkoutSummary"
  );


document
  .getElementById(
    "checkoutButton"
  )
  .addEventListener(
    "click",
    () => {

      if (cart.length === 0) {

        alert(
          "Your cart is empty."
        );

        return;

      }


      checkoutSummary.innerHTML =
        cart
          .map(
            item => `

              <div class="summary-row">

                <span>
                  ${item.name} × ${item.quantity}
                </span>

                <strong>
                  ₹${(
                    item.price *
                    item.quantity
                  ).toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

            `
          )
          .join("") +

        `

          <div class="summary-row summary-total">

            <span>TOTAL</span>

            <strong>
              ₹${totalPrice().toLocaleString(
                "en-IN"
              )}
            </strong>

          </div>

        `;


      checkoutModal.classList.add(
        "active"
      );

    }
  );


document
  .getElementById(
    "closeCheckout"
  )
  .addEventListener(
    "click",
    () => {

      checkoutModal.classList.remove(
        "active"
      );

    }
  );


document
  .getElementById(
    "confirmOrder"
  )
  .addEventListener(
    "click",
    () => {

      const fieldIds = [
        "customerName",
        "customerPhone",
        "customerEmail",
        "customerCity",
        "customerAddress"
      ];


      for (
        const id of fieldIds
      ) {

        const field =
          document.getElementById(
            id
          );

        if (
          !field.value.trim()
        ) {

          alert(
            "Please complete all fields."
          );

          field.focus();

          return;

        }

      }


      const order =
        "TD-" +
        Math.floor(
          100000 +
          Math.random() *
          900000
        );


      alert(
        "ORDER CREATED SUCCESSFULLY!\\n\\n" +
        "Order: " +
        order +
        "\\n" +
        "Total: ₹" +
        totalPrice().toLocaleString(
          "en-IN"
        ) +
        "\\n\\n" +
        "Demo checkout completed."
      );


      cart = [];

      saveCart();
      renderCart();

      checkoutModal.classList.remove(
        "active"
      );

      closeCartPanel();

      fieldIds.forEach(
        id => {

          document.getElementById(
            id
          ).value = "";

        }
      );

    }
  );


window.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      productModal.classList.remove(
        "active"
      );

      checkoutModal.classList.remove(
        "active"
      );

      closeCartPanel();

    }

  }
);


renderCart();


/* =========================================================
   THREE.JS HERO
   ========================================================= */

const container =
  document.getElementById(
    "hero3d"
  );


const scene =
  new THREE.Scene();

scene.background =
  new THREE.Color(
    0x040508
  );


const camera =
  new THREE.PerspectiveCamera(
    40,
    container.clientWidth /
      container.clientHeight,
    0.1,
    100
  );


camera.position.set(
  0,
  0.2,
  7
);


const renderer =
  new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });


renderer.setPixelRatio(
  Math.min(
    window.devicePixelRatio,
    2
  )
);


renderer.setSize(
  container.clientWidth,
  container.clientHeight
);


renderer.outputColorSpace =
  THREE.SRGBColorSpace;


container.appendChild(
  renderer.domElement
);


/* Lights */

scene.add(
  new THREE.AmbientLight(
    0xffffff,
    1.8
  )
);


const blueLight =
  new THREE.PointLight(
    0x4f7dff,
    40,
    15
  );

blueLight.position.set(
  -3,
  3,
  4
);

scene.add(
  blueLight
);


const purpleLight =
  new THREE.PointLight(
    0x9848ff,
    35,
    14
  );

purpleLight.position.set(
  4,
  -1,
  3
);

scene.add(
  purpleLight
);


const whiteLight =
  new THREE.DirectionalLight(
    0xffffff,
    3
  );

whiteLight.position.set(
  2,
  5,
  5
);

scene.add(
  whiteLight
);


/* Main object */

const object =
  new THREE.Group();

scene.add(object);


const core =
  new THREE.Mesh(
    new THREE.IcosahedronGeometry(
      1.45,
      5
    ),
    new THREE.MeshPhysicalMaterial({
      color: 0x111a30,
      metalness: 0.75,
      roughness: 0.17,
      clearcoat: 1,
      emissive: 0x0b1d50,
      emissiveIntensity: 1.2
    })
  );

object.add(
  core
);


const inner =
  new THREE.Mesh(
    new THREE.SphereGeometry(
      0.78,
      48,
      48
    ),
    new THREE.MeshBasicMaterial({
      color: 0x4c7dff
    })
  );

object.add(
  inner
);


const ring1 =
  new THREE.Mesh(
    new THREE.TorusGeometry(
      1.8,
      0.035,
      18,
      100
    ),
    new THREE.MeshBasicMaterial({
      color: 0x789aff
    })
  );

ring1.rotation.x =
  Math.PI / 2.4;

object.add(
  ring1
);


const ring2 =
  new THREE.Mesh(
    new THREE.TorusGeometry(
      2.12,
      0.025,
      18,
      100
    ),
    new THREE.MeshBasicMaterial({
      color: 0x9c53ff
    })
  );

ring2.rotation.y =
  Math.PI / 2.8;

object.add(
  ring2
);


const ring3 =
  new THREE.Mesh(
    new THREE.TorusGeometry(
      2.38,
      0.018,
      18,
      100
    ),
    new THREE.MeshBasicMaterial({
      color: 0x668cff
    })
  );

ring3.rotation.x =
  Math.PI / 4;

ring3.rotation.z =
  Math.PI / 5;

object.add(
  ring3
);


/* Floating cubes */

const cubeGroup =
  new THREE.Group();

scene.add(
  cubeGroup
);


for (
  let i = 0;
  i < 10;
  i++
) {

  const cube =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.13,
        0.13,
        0.13
      ),
      new THREE.MeshStandardMaterial({
        color: 0x7293ff,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x17306c,
        emissiveIntensity: 1
      })
    );


  const angle =
    (i / 10) *
    Math.PI *
    2;


  const radius =
    2.65 +
    (i % 3) *
    0.25;


  cube.position.set(
    Math.cos(angle) * radius,
    Math.sin(
      angle * 2.1
    ) * 0.75,
    Math.sin(angle) * radius
  );


  cubeGroup.add(
    cube
  );

}


/* Floor */

const floor =
  new THREE.Mesh(
    new THREE.PlaneGeometry(
      24,
      24
    ),
    new THREE.MeshStandardMaterial({
      color: 0x040508,
      roughness: 0.55,
      metalness: 0.25
    })
  );

floor.rotation.x =
  -Math.PI / 2;

floor.position.y =
  -1.8;

scene.add(
  floor
);


/* Grid */

const grid =
  new THREE.GridHelper(
    22,
    35,
    0x1c2f60,
    0x0c152b
  );

grid.position.y =
  -1.79;

scene.add(
  grid
);


/* Particles */

const count =
  1000;

const positions =
  new Float32Array(
    count * 3
  );


for (
  let i = 0;
  i < count;
  i++
) {

  positions[i * 3] =
    (Math.random() - 0.5) * 14;

  positions[i * 3 + 1] =
    (Math.random() - 0.5) * 9;

  positions[i * 3 + 2] =
    (Math.random() - 0.5) * 12;

}


const particleGeometry =
  new THREE.BufferGeometry();

particleGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(
    positions,
    3
  )
);


const particles =
  new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      color: 0x799cff,
      size: 0.022,
      transparent: true,
      opacity: 0.7
    })
  );


scene.add(
  particles
);


/* Animation */

let mouseX = 0;
let mouseY = 0;


window.addEventListener(
  "mousemove",
  event => {

    mouseX =
      event.clientX /
      window.innerWidth *
      2 -
      1;

    mouseY =
      event.clientY /
      window.innerHeight *
      2 -
      1;

  }
);


const clock =
  new THREE.Clock();


function animate() {

  requestAnimationFrame(
    animate
  );

  const time =
    clock.getElapsedTime();


  object.rotation.y =
    time * 0.22 +
    mouseX * 0.35;


  object.rotation.x =
    Math.sin(
      time * 0.35
    ) *
    0.08;


  object.position.y =
    Math.sin(
      time * 1.4
    ) *
    0.12;


  inner.scale.setScalar(
    1 +
    Math.sin(
      time * 2
    ) *
    0.06
  );


  ring1.rotation.z =
    time * 0.4;

  ring2.rotation.x =
    time * 0.28;

  ring3.rotation.y =
    time * 0.35;


  cubeGroup.rotation.y =
    time * 0.12;


  particles.rotation.y =
    time * 0.01;


  camera.position.x +=
    (
      mouseX * 0.3 -
      camera.position.x
    ) * 0.025;


  camera.position.y +=
    (
      -mouseY * 0.15 +
      0.2 -
      camera.position.y
    ) * 0.025;


  camera.lookAt(
    0,
    0,
    0
  );


  renderer.render(
    scene,
    camera
  );

}


animate();


/* Resize */

window.addEventListener(
  "resize",
  () => {

    const width =
      container.clientWidth;

    const height =
      container.clientHeight;

    if (
      width === 0 ||
      height === 0
    ) {
      return;
    }

    camera.aspect =
      width / height;

    camera.updateProjectionMatrix();

    renderer.setSize(
      width,
      height
    );

  }
);