const {createApp,ref,computed}= Vue
const app=createApp({
    setup(){
            
            const cart=ref([])
            const reviews=ref([])
            const premium=ref(false)
            function updateCart(){
                cart.value.push(cart.value.length)
            }
            function removeFromCart(){
                 if (cart.value.length > 0) {
                 cart.value.splice(cart.value.length - 1, 1); // remove last item
      }
            
            }
            function addReview(review){
                reviews.value.push(review);
                console.log(review);
            }
            return{
                
                cart,
                premium,
                reviews,
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
    
        
