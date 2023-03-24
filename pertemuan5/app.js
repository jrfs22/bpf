var dataProduct = {
    harga: 250000,
    product: [
        {   
            'id' : '1',
            'name' : 'Sweater',
            'description' : 'The Clotilde Sweater is a soft and chunky sweater in a bold diamond lace pattern. Top down and seamless, and worked with large needles and 3 strands together, Clotilde Sweater is a quick knit that will fly off your needles. Simple ribbed edges, short-row back shaping and raglan construction finish a sweater that has all the design elements to become a favorite in your wardrobe.',
            'price' : '399000',
            'image' : 'https://cdn.shopify.com/s/files/1/0044/2286/0867/products/IMG_8963_07c78a4c-411c-4720-9560-d28f07875742_800x.jpg?v=1643626642'
        },
        {   
            'id' : '2',
            'name' : 'Sweater China',
            'description' : 'The Clotilde Sweater is a soft and chunky sweater in a bold diamond lace pattern. Top down and seamless, and worked with large needles and 3 strands together, Clotilde Sweater is a quick knit that will fly off your needles. Simple ribbed edges, short-row back shaping and raglan construction finish a sweater that has all the design elements to become a favorite in your wardrobe.',
            'price' : '199100',
            'image' : 'https://cdn.shopify.com/s/files/1/0044/2286/0867/products/IMG_8963_07c78a4c-411c-4720-9560-d28f07875742_800x.jpg?v=1643626642'
        },
        {   
            'id' : '2',
            'name' : 'Sweater Amerika',
            'description' : 'The Clotilde Sweater is a soft and chunky sweater in a bold diamond lace pattern. Top down and seamless, and worked with large needles and 3 strands together, Clotilde Sweater is a quick knit that will fly off your needles. Simple ribbed edges, short-row back shaping and raglan construction finish a sweater that has all the design elements to become a favorite in your wardrobe.',
            'price' : "199100",
            'image' : 'https://cdn.shopify.com/s/files/1/0044/2286/0867/products/IMG_8963_07c78a4c-411c-4720-9560-d28f07875742_800x.jpg?v=1643626642'
        }
    ]
}

// const { createApp } = Vue

// createApp({
//     data(){
//         return{
//             dataProduct 
//         }
//     },
//     computed: {
//         productOnSale: function(){
//             return this.data.filter(Number(data.product.price) <= data.harga)
//         }
//     }
// }).mount('#app')


var app = new Vue({
    el: '#app',
    data: dataProduct
})