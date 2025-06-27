const {createApp,ref}= Vue
    createApp({
        setup(){
            const product=ref('Boots')
            // const description=ref('These are the best boots ever!')
            const image=ref('./assets/images/socks_green.jpg')
            const inStock=ref(true)
            const inventory=ref(100)
            const details=ref([
                '50% cotton',
                '30% wool',
                '20% polyester'
            ])
            const variants=ref([
                {
                    id: 2234,color: 'green',image: './assets/images/socks_green.jpg'
                },
                {
                    id: 2235,color: 'blue',image: './assets/images/socks_blue.jpg'
                }
            ])
            const cart=ref(0)
            function addToCart(){
                cart.value+=1
            }
            function updateImage(variantImage){
                image.value=variantImage
            }
            function toggleStock(){
                inStock.value = !inStock.value;
            }
            const sales=ref(true)
            const cmuLink=ref('https://www.camt.cmu.ac.th')
            return{
                product,
                image,
                cmuLink,
                inStock,
                inventory,
                sales,
                details,
                variants,
                sizes: ['S', 'M', 'L'],
                cart,
                addToCart,
                updateImage,
                toggleStock
            }

        }
    }).mount('#app')
