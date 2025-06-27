const {createApp,ref,computed}= Vue
const app=createApp({
    setup(){
            
            const cart=ref([])
            const premium=ref(false)
            function updateCart(){
                cart.value.push(cart.value.length)
            }
            function removeFromCart(){
                 if (cart.value.length > 0) {
                 cart.value.splice(cart.value.length - 1, 1); // remove last item
      }
            }
            return{
                
                cart,
                premium,
                updateCart,
                removeFromCart
                
            };

        }
    });
    app.component('product-display',productDisplay)
    app.component('product-details',productDetails)
    app.mount('#app')
    
        
