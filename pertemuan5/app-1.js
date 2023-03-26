var dataProduct = {
    harga: 200000,
    product: [
        {
            "id" : "1",
            "name": "Sweater",
            "description": "lorem",
            "price": "199999",
            "image": "https://img.okezone.com/content/2020/08/21/320/2265466/eksistensi-logo-ayam-di-dunia-bisnis-dari-restoran-hingga-jamu-97G9P2QKv1.png" 
        },
        {
            "id" : "2",
            "name": "Sweater 2",
            "description": "lorem",
            "price": "199999",
            "image": "https://img.okezone.com/content/2020/08/21/320/2265466/eksistensi-logo-ayam-di-dunia-bisnis-dari-restoran-hingga-jamu-97G9P2QKv1.png" 
        },
        {
            "id" : "3",
            "name": "Sweater 3",
            "description": "lorem",
            "price": "199999",
            "image": "https://img.okezone.com/content/2020/08/21/320/2265466/eksistensi-logo-ayam-di-dunia-bisnis-dari-restoran-hingga-jamu-97G9P2QKv1.png" 
        }
    ]
}

var app = new Vue({
    el: '#app',
    data: {
        name: "Josep",
        baju: dataProduct
    }
})
