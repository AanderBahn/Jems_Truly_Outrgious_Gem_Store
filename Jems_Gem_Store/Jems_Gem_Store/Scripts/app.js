(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.goods = gems;
    });

    var gems = [
    {
        name: 'Dodecahedron',
        price: 2,
        description: 'This 12 x 5 faceted crystal is great.',
        soldOut: false,
        images: [
            {
                full: '1D12_Black.jpg',
            },
            {
                full: 'C:\Users\black\Desktop\Jems_Truly_Outrgious_Gem_Store\Jems_Gem_Store\Jems_Gem_Store\Content/images/1D12_Blue.jpg',
            },
            {
                full:'C:\Users\black\Desktop\Jems_Truly_Outrgious_Gem_Store\Jems_Gem_Store\Jems_Gem_Store\Content/images/1D12_green.png',
            },
        ],
    },
    {
        name: 'LockNar',
        price: 7.47,
        description: 'A luminus green crystal that shines with the glee of greater spheres.',
        soldOut: false,
        images: [
            {
                full:'LocNar_1.jpg',
            },
            {
                full:'C:\Users\black\Desktop\Jems_Truly_Outrgious_Gem_Store\Jems_Gem_Store\Jems_Gem_Store\Content/images/LocNar_2.jpg',
            },
            {
                full:'C:\Users\black\Desktop\Jems_Truly_Outrgious_Gem_Store\Jems_Gem_Store\Jems_Gem_Store\Content/images/LocNar_3.jpg',
            },
        ],
    }//end of products
    ];
})();