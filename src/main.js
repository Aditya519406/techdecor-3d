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
   THREE.JS HERO — FLOATING FLAGSHIP LAPTOP
   ========================================================= */

const container =
  document.getElementById("hero3d");


/* =========================================================
   SCENE
   ========================================================= */

const scene =
  new THREE.Scene();

scene.background =
  new THREE.Color(0x040508);


/* =========================================================
   CAMERA
   ========================================================= */

const camera =
  new THREE.PerspectiveCamera(
    38,
    container.clientWidth /
      container.clientHeight,
    0.1,
    100
  );

camera.position.set(
  0.35,
  0.45,
  7.4
);


/* =========================================================
   RENDERER
   ========================================================= */

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

renderer.shadowMap.enabled =
  true;

renderer.shadowMap.type =
  THREE.PCFSoftShadowMap;

container.appendChild(
  renderer.domElement
);


/* =========================================================
   LIGHTING
   ========================================================= */

scene.add(
  new THREE.AmbientLight(
    0xffffff,
    1.8
  )
);


const blueLight =
  new THREE.PointLight(
    0x4d7dff,
    45,
    16
  );

blueLight.position.set(
  -3.5,
  3,
  4
);

scene.add(
  blueLight
);


const purpleLight =
  new THREE.PointLight(
    0x944dff,
    32,
    15
  );

purpleLight.position.set(
  3.5,
  -1,
  3
);

scene.add(
  purpleLight
);


const whiteLight =
  new THREE.DirectionalLight(
    0xffffff,
    4.5
  );

whiteLight.position.set(
  2,
  6,
  7
);

scene.add(
  whiteLight
);


/* =========================================================
   LAPTOP GROUP
   ========================================================= */

const laptop =
  new THREE.Group();

laptop.rotation.y =
  -0.28;

laptop.rotation.x =
  0.045;

scene.add(
  laptop
);


/* =========================================================
   MATERIALS
   ========================================================= */

const laptopMetal =
  new THREE.MeshPhysicalMaterial({
    color: 0x252b35,
    metalness: 0.92,
    roughness: 0.18,
    clearcoat: 1,
    clearcoatRoughness: 0.08
  });


const darkMetal =
  new THREE.MeshPhysicalMaterial({
    color: 0x0d1118,
    metalness: 0.95,
    roughness: 0.14,
    clearcoat: 1
  });


const edgeMetal =
  new THREE.MeshPhysicalMaterial({
    color: 0x4a5360,
    metalness: 0.95,
    roughness: 0.2
  });


const keyMaterial =
  new THREE.MeshPhysicalMaterial({
    color: 0x141922,
    metalness: 0.5,
    roughness: 0.3
  });


const blueMaterial =
  new THREE.MeshStandardMaterial({
    color: 0x7397ff,
    emissive: 0x2d54c7,
    emissiveIntensity: 1.8,
    metalness: 0.6,
    roughness: 0.2
  });


/* =========================================================
   LAPTOP BASE
   ========================================================= */

const base =
  new THREE.Mesh(
    new THREE.BoxGeometry(
      4.15,
      0.20,
      2.75
    ),
    laptopMetal
  );

base.position.set(
  0,
  -1.15,
  0
);

base.castShadow = true;

base.receiveShadow = true;

laptop.add(
  base
);


/* Front lip */

const frontLip =
  new THREE.Mesh(
    new THREE.BoxGeometry(
      4.05,
      0.08,
      0.11
    ),
    edgeMetal
  );

frontLip.position.set(
  0,
  -1.04,
  1.30
);

laptop.add(
  frontLip
);


/* =========================================================
   KEYBOARD SURFACE
   ========================================================= */

const keyboardSurface =
  new THREE.Mesh(
    new THREE.BoxGeometry(
      3.65,
      0.045,
      1.75
    ),
    darkMetal
  );

keyboardSurface.position.set(
  0,
  -1.02,
  0.12
);

laptop.add(
  keyboardSurface
);


/* =========================================================
   KEYBOARD
   ========================================================= */

const keyRows = [
  12,
  12,
  11,
  10
];

const rowZ = [
  -0.55,
  -0.15,
  0.25,
  0.65
];


for (
  let row = 0;
  row < keyRows.length;
  row++
) {

  const count =
    keyRows[row];

  const keyWidth =
    0.205;

  const gap =
    0.055;

  const totalWidth =
    count * keyWidth +
    (count - 1) * gap;


  for (
    let i = 0;
    i < count;
    i++
  ) {

    const key =
      new THREE.Mesh(
        new THREE.BoxGeometry(
          keyWidth,
          0.045,
          0.23
        ),
        keyMaterial
      );


    key.position.set(
      -totalWidth / 2 +
      keyWidth / 2 +
      i *
      (keyWidth + gap),
      -0.965,
      rowZ[row]
    );


    key.castShadow =
      true;


    laptop.add(
      key
    );

  }

}


/* =========================================================
   SPACE BAR
   ========================================================= */

const spaceBar =
  new THREE.Mesh(
    new THREE.BoxGeometry(
      1.05,
      0.045,
      0.23
    ),
    keyMaterial
  );

spaceBar.position.set(
  0,
  -0.965,
  0.96
);

laptop.add(
  spaceBar
);


/* =========================================================
   TRACKPAD
   ========================================================= */

const trackpad =
  new THREE.Mesh(
    new THREE.BoxGeometry(
      1.15,
      0.025,
      0.70
    ),
    new THREE.MeshPhysicalMaterial({
      color: 0x181d26,
      metalness: 0.25,
      roughness: 0.22,
      clearcoat: 0.7
    })
  );

trackpad.position.set(
  0,
  -0.962,
  1.55
);

laptop.add(
  trackpad
);


/* =========================================================
   SCREEN FRAME
   ========================================================= */

const screenFrame =
  new THREE.Mesh(
    new THREE.BoxGeometry(
      3.85,
      2.55,
      0.15
    ),
    darkMetal
  );

screenFrame.position.set(
  0,
  0.28,
  -0.06
);

screenFrame.rotation.x =
  -0.08;

screenFrame.castShadow =
  true;

laptop.add(
  screenFrame
);


/* =========================================================
   SCREEN DISPLAY
   ========================================================= */

const displayCanvas =
  document.createElement(
    "canvas"
  );

displayCanvas.width =
  1200;

displayCanvas.height =
  800;


const displayContext =
  displayCanvas.getContext(
    "2d"
  );


/* background */

const displayGradient =
  displayContext.createLinearGradient(
    0,
    0,
    1200,
    800
  );

displayGradient.addColorStop(
  0,
  "#09142e"
);

displayGradient.addColorStop(
  0.5,
  "#050812"
);

displayGradient.addColorStop(
  1,
  "#170b2d"
);


displayContext.fillStyle =
  displayGradient;

displayContext.fillRect(
  0,
  0,
  1200,
  800
);


/* blue glow */

const displayGlow =
  displayContext.createRadialGradient(
    750,
    380,
    20,
    750,
    380,
    500
  );

displayGlow.addColorStop(
  0,
  "rgba(77,125,255,.45)"
);

displayGlow.addColorStop(
  1,
  "rgba(77,125,255,0)"
);

displayContext.fillStyle =
  displayGlow;

displayContext.fillRect(
  0,
  0,
  1200,
  800
);


/* TECHDECOR logo */

displayContext.textAlign =
  "left";

displayContext.fillStyle =
  "#ffffff";

displayContext.font =
  "900 52px Arial";

displayContext.fillText(
  "TECH",
  90,
  130
);

displayContext.fillStyle =
  "#82a3ff";

displayContext.fillText(
  "DECOR",
  255,
  130
);


/* headline */

displayContext.fillStyle =
  "#ffffff";

displayContext.font =
  "900 78px Arial";

displayContext.fillText(
  "DESIGN",
  90,
  335
);

displayContext.fillText(
  "THE FUTURE.",
  90,
  415
);


/* small text */

displayContext.fillStyle =
  "rgba(255,255,255,.45)";

displayContext.font =
  "600 18px Arial";

displayContext.fillText(
  "TECHDECOR / QUANTUM WORKSTATION",
  90,
  485
);


/* interface cards */

for (
  let i = 0;
  i < 3;
  i++
) {

  displayContext.fillStyle =
    "rgba(255,255,255,.07)";

  displayContext.roundRect(
    90 + i * 205,
    555,
    180,
    90,
    12
  );

  displayContext.fill();

}


displayContext.fillStyle =
  "#789aff";

displayContext.font =
  "700 17px Arial";

displayContext.fillText(
  "PERFORMANCE",
  110,
  590
);

displayContext.fillText(
  "PRECISION",
  315,
  590
);

displayContext.fillText(
  "FUTURE",
  520,
  590
);


/* bottom line */

displayContext.fillStyle =
  "rgba(255,255,255,.25)";

displayContext.font =
  "600 14px Arial";

displayContext.fillText(
  "ENGINEERED FOR THE NEXT GENERATION",
  90,
  710
);


const displayTexture =
  new THREE.CanvasTexture(
    displayCanvas
  );

displayTexture.colorSpace =
  THREE.SRGBColorSpace;


/* screen glass */

const screen =
  new THREE.Mesh(
    new THREE.PlaneGeometry(
      3.55,
      2.24
    ),
    new THREE.MeshPhysicalMaterial({
      map: displayTexture,
      roughness: 0.12,
      clearcoat: 1,
      clearcoatRoughness: 0.05
    })
  );

screen.position.set(
  0,
  0.28,
  0.025
);

screen.rotation.x =
  -0.08;

laptop.add(
  screen
);


/* =========================================================
   SCREEN GLOW EDGE
   ========================================================= */

const screenGlow =
  new THREE.Mesh(
    new THREE.BoxGeometry(
      3.62,
      0.015,
      0.015
    ),
    blueMaterial
  );

screenGlow.position.set(
  0,
  -0.79,
  0.04
);

screenGlow.rotation.x =
  -0.08;

laptop.add(
  screenGlow
);


/* =========================================================
   HINGES
   ========================================================= */

for (
  const x of [-1.25, 1.25]
) {

  const hinge =
    new THREE.Mesh(
      new THREE.CylinderGeometry(
        0.11,
        0.11,
        0.42,
        32
      ),
      edgeMetal
    );

  hinge.rotation.z =
    Math.PI / 2;

  hinge.position.set(
    x,
    -0.96,
    0.04
  );

  laptop.add(
    hinge
  );

}


/* =========================================================
   TECHDECOR LOGO ON BASE
   ========================================================= */

const logo =
  new THREE.Mesh(
    new THREE.CircleGeometry(
      0.13,
      48
    ),
    blueMaterial
  );

logo.rotation.x =
  -Math.PI / 2;

logo.position.set(
  0,
  -0.89,
  -0.45
);

laptop.add(
  logo
);


/* =========================================================
   FLOATING RING
   ========================================================= */

const ring =
  new THREE.Mesh(
    new THREE.TorusGeometry(
      2.35,
      0.018,
      16,
      100
    ),
    new THREE.MeshBasicMaterial({
      color: 0x6f94ff,
      transparent: true,
      opacity: 0.65
    })
  );

ring.rotation.x =
  Math.PI / 2.4;

ring.position.y =
  -0.10;

scene.add(
  ring
);


/* =========================================================
   SECOND RING
   ========================================================= */

const ring2 =
  new THREE.Mesh(
    new THREE.TorusGeometry(
      2.7,
      0.012,
      16,
      100
    ),
    new THREE.MeshBasicMaterial({
      color: 0x9a51ff,
      transparent: true,
      opacity: 0.42
    })
  );

ring2.rotation.y =
  Math.PI / 3;

scene.add(
  ring2
);


/* =========================================================
   FLOATING DATA BLOCKS
   ========================================================= */

const dataBlocks =
  new THREE.Group();

scene.add(
  dataBlocks
);


const dataMaterial =
  new THREE.MeshBasicMaterial({
    color: 0x6f94ff,
    transparent: true,
    opacity: 0.35
  });


for (
  let i = 0;
  i < 8;
  i++
) {

  const block =
    new THREE.Mesh(
      new THREE.BoxGeometry(
        0.18,
        0.035,
        0.11
      ),
      dataMaterial
    );


  const angle =
    i *
    Math.PI /
    4;


  const radius =
    2.55 +
    (i % 2) *
    0.25;


  block.position.set(
    Math.cos(angle) *
      radius,
    Math.sin(
      angle * 1.6
    ) * 0.65,
    Math.sin(angle) *
      radius
  );


  dataBlocks.add(
    block
  );

}


/* =========================================================
   PLATFORM
   ========================================================= */

const platform =
  new THREE.Mesh(
    new THREE.CylinderGeometry(
      2.0,
      2.25,
      0.09,
      64
    ),
    new THREE.MeshPhysicalMaterial({
      color: 0x0c111a,
      metalness: 0.85,
      roughness: 0.2
    })
  );

platform.position.y =
  -2.15;

scene.add(
  platform
);


/* =========================================================
   PLATFORM GLOW
   ========================================================= */

const platformGlow =
  new THREE.Mesh(
    new THREE.TorusGeometry(
      1.72,
      0.025,
      16,
      100
    ),
    new THREE.MeshBasicMaterial({
      color: 0x6f96ff,
      transparent: true,
      opacity: 0.8
    })
  );

platformGlow.rotation.x =
  Math.PI / 2;

platformGlow.position.y =
  -2.08;

scene.add(
  platformGlow
);


/* =========================================================
   GRID
   ========================================================= */

const grid =
  new THREE.GridHelper(
    18,
    30,
    0x182a55,
    0x0b1427
  );

grid.position.y =
  -2.05;

scene.add(
  grid
);


/* =========================================================
   PARTICLES
   ========================================================= */

const particleCount =
  650;


const particlePositions =
  new Float32Array(
    particleCount * 3
  );


for (
  let i = 0;
  i < particleCount;
  i++
) {

  particlePositions[
    i * 3
  ] =
    (Math.random() - 0.5) *
    10;

  particlePositions[
    i * 3 + 1
  ] =
    (Math.random() - 0.5) *
    8;

  particlePositions[
    i * 3 + 2
  ] =
    (Math.random() - 0.5) *
    10;

}


const particleGeometry =
  new THREE.BufferGeometry();


particleGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(
    particlePositions,
    3
  )
);


const particles =
  new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      color: 0x7598ff,
      size: 0.018,
      transparent: true,
      opacity: 0.55
    })
  );


scene.add(
  particles
);


/* =========================================================
   MOUSE
   ========================================================= */

let mouseX =
  0;

let mouseY =
  0;


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


/* =========================================================
   ANIMATION
   ========================================================= */

const clock =
  new THREE.Clock();


function animateLaptop() {

  requestAnimationFrame(
    animateLaptop
  );


  const time =
    clock.getElapsedTime();


  /* floating */

  laptop.position.y =
    Math.sin(
      time * 1.25
    ) * 0.09;


  /* rotation */

  laptop.rotation.y +=
    (
      -0.28 +
      mouseX * 0.22 -
      laptop.rotation.y
    ) * 0.025;


  laptop.rotation.x +=
    (
      0.045 +
      mouseY * 0.08 -
      laptop.rotation.x
    ) * 0.025;


  /* rings */

  ring.rotation.z =
    time * 0.25;

  ring2.rotation.x =
    time * 0.18;

  ring2.rotation.z =
    time * 0.12;


  /* data blocks */

  dataBlocks.rotation.y =
    time * 0.10;


  /* particles */

  particles.rotation.y =
    time * 0.008;


  /* glow */

  platformGlow.material.opacity =
    0.55 +
    Math.sin(
      time * 2
    ) * 0.2;


  /* camera movement */

  camera.position.x +=
    (
      0.35 +
      mouseX * 0.22 -
      camera.position.x
    ) * 0.02;


  camera.position.y +=
    (
      0.35 -
      mouseY * 0.12 -
      camera.position.y
    ) * 0.02;


  camera.lookAt(
    0,
    -0.35,
    0
  );


  renderer.render(
    scene,
    camera
  );

}


animateLaptop();


/* =========================================================
   RESIZE
   ========================================================= */

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