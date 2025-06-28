const {createApp,reactive,toRefs,ref,computed}= Vue
const app=createApp({
    setup(){
            
            const state = reactive({
      cart: [],
      reviews: [],
      premium: false
    });
            
            function updateCart() {
      state.cart.push(state.cart.length);
    }

                function removeFromCart() {
      if (state.cart.length > 0) {
        state.cart.splice(state.cart.length - 1, 1);
      }
    }

            
             function addReview(review) {
      state.reviews.push(review); // ✅ fixed here
      console.log(state.reviews);
    }
            return {
      ...toRefs(state),
      updateCart,
      removeFromCart,
      addReview
    };

        }
    });
    app.component('product-display',productDisplay)
    app.component('product-details',productDetails)
    app.component('review-form',reviewForm)
    app.component('review-list',reviewList)
    app.mount('#app')
    
        
