(function () {
    var app = angular.module('store', []);


    //// Manages the Products and Goods ///
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
                full: '~/Content/images/1D12_Black.jpg',
                thumb: ''
            },
            {
                full: '~/Content/images/1D12_Blue.jpg',
                thumb: ''
            },
            {
                full: '~/Content/images/1D12_green.png',
                thumb: ''
            },
        ],
        reviews: [
            {
                stars: 5,
                body: "This is so rad!!!",
                author: "bob@gmail.com"
            },
            {
                stars: 1,
                body: "Kinda...Meh. D20 is where its at",
                author: "larry@gmail.com"
            },
        ]
    },
    {
        name: 'LockNar',
        price: 7.47,
        description: 'A luminus green crystal that shines with the glee of greater spheres.',
        soldOut: false,
        images: [
            {
                full: '~/Content/images/LocNar_1.jpg',
                thumb:''
            },
            {
                full: '~/Content/images/LocNar_2.jpg',
                thumb: ''
            },
            {
                full: '~/Content/images/LocNar_3.jpg',
                thumb: ''
            },
        ],
    }//end of products
    ];

    //// Managing Product and and Info Tabs
    app.controller("PanelController", function () {
        //Sets the tab to 1 on load
        this.tab = 1;

        //Makes the tab clicked, the tab that's shown
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        //
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };

    });///End of the Panel Controller

})();