(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.goods = gems;
    });

    var gems = [
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'This 12 x 5 faceted crystal is great.',
        soldOut: false,
    },
    {
        name: 'LockNar',
        price: 7.47,
        description: 'A luminus green crystal that shines with the glee of greater spheres.',
        soldOut: false,
    }//end of products
    ];
})();