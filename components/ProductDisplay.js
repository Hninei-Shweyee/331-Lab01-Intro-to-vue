const productDisplay={
    template: `

    <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                   
                     <img :src="image">
                     
                </div>
            </div>

        
            <div class="product-info">
                  <h1>{{title}}</h1>
                <p v-if="inventory>10">In stock</p>
                <p v-else-if="inventory<=10 && inventory>0">Almost out of stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{shipping}}</p>
                <product-details :details="details"></product-details>
                
                <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">

                </div>
                   
                
                <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton:!inStock}">Add to Cart</button>
                <button class="button" @click="removeFromCart">
                Remove from Cart
                    </button>
                </div>
                
                
                <review-form @review-submitted="forwardReview"></review-form>
                <review-list v-if="reviews.length" :reviews="reviews"></review-list>
                </div>
                `,
                props:{
                    premium:Boolean,
                    reviews: Array },
                    setup(props,{emit}){
                        const reviews = props.reviews;
                        const shipping = computed(() => (props.premium ? "Free" : "$2.99"));
    const product = ref("Boots");
    const brand = ref("SE 331");
    const inventory = ref(100);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
      { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 }
    ]);
    const selectedVariant = ref(0);

    const image = computed(() => variants.value[selectedVariant.value].image);
    const inStock = computed(() => variants.value[selectedVariant.value].quantity);
    const title = computed(() => brand.value + " " + product.value);

    function updateVariant(index) {
      selectedVariant.value = index;
    }

    function addToCart() {
      emit("add-to-cart");
    }

    // ✅ New method to remove from cart
    function removeFromCart() {
      emit("remove-from-cart");
    }
    function forwardReview(review) {
  emit('review-submitted', review);
}

    return {
      image,
      inStock,
      inventory,
      details,
      variants,
      selectedVariant,
      addToCart,
      removeFromCart, // 👈 expose this method
      updateVariant,
      shipping,
      title,
      forwardReview,
      reviews
    };
  },
};

