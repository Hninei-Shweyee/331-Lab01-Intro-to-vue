// const {createApp,ref}= Vue
const {createApp,ref,computed}= Vue
    createApp({
        setup(){
            const product=ref('Boots')
            // const description=ref('These are the best boots ever!')
            // const image=ref('./assets/images/socks_green.jpg')
            // const inStock=ref(true)
            const inventory=ref(100)
            const details=ref([
                '50% cotton',
                '30% wool',
                '20% polyester'
            ])
            const saleMessage=computed(()=>{
                return `${brand.value} ${product.value} is on sale`;
            });
            const brand=ref('Nike')
            const variants=ref([
                {
                    id: 2234,color: 'green',image: './assets/images/socks_green.jpg',quantity:50
                },
                {
                    id: 2235,color: 'blue',image: './assets/images/socks_blue.jpg',quantity:0
                }
            ])
            const selectedVariant=ref(0)
            function updateVariant(index){
                selectedVariant.value=index;
            }
            const image=computed(()=>{
                return variants.value[selectedVariant.value].image
            })
            const inStock=computed(()=>{
                return variants.value[selectedVariant.value].quantity
            })
            const cart=ref(0)
            function addToCart(){
                cart.value+=1
            }
            const title=computed(()=>{
                return brand.value+' '+product.value
            })
            function updateImage(variantImage){
                image.value=variantImage
            }
            function toggleStock(){
                inStock.value = !inStock.value;
            }
            const sales=ref(true)
            const cmuLink=ref('https://www.camt.cmu.ac.th')
            return{
                // product,
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
                toggleStock,
                title,
                updateVariant,
                saleMessage,
                brand
            }

        }
    }).mount('#app')
