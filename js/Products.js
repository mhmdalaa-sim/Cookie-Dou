// Products data for Cookie Dou bakery
const products = [
    {
        id: 1,
        name: "Maamoul with Date Paste",
        description: "معمول العجوة أو الملبن الكلاسيكي بطعم بيتي أصيل ❤️ عجينة طرية بتذوب في الفم، وحشوة عجوة غنية بنكهة التمر الطبيعي وحشوة الملبن اللذيذة. مذاق دافي بيكمّل كل لحظة قهوة ☕🍪",
        price: 8.99,
        image: "images/Products/Prod1.jpg"
    },
    {
        id: 2,
        name: "Chocolate Hazelnut Cookies",
        description: "كويرات بسكويت مغطاة بالشوكولاتة الغنية ومحشوة بقطع البندق المقرمشة… مزيج مثالي بين القوام المقرمش والطعم الشوكولاتي الفاخر.",
        price: 7.99,
        image: "images/Products/Prod2.jpg"
    },
    {
        id: 3,
        name: "Sable Cookies with Jam",
        description: "سابليه هش بحشوة غنية من المربى أو الشوكولاتة، طعم كلاسيكي يذوب في الفم ويكمل لحظاتك الحلوة.",
        price: 6.99,
        image: "images/Products/Prod3.jpg"
    },
    {
        id: 4,
        name: "Premium Butter Sable",
        description: "سابليه فاخر بنكهة الزبدة، محشو بشوكولاتة غنية ومغطى بالشوكولاتة ولمسة مقرمشة من المكسرات.",
        price: 9.99,
        image: "images/Products/Prod4.jpg"
    },
    {
        id: 5,
        name: "Caramel Chocolate Cookies",
        description: "بسكويت مقرمش مع طبقة كراميل ناعمة ومغطى بشوكولاتة غنية.",
        price: 8.49,
        image: "images/Products/Prod5.jpg"
    },
    {
        id: 6,
        name: "Milk Chocolate Cookies",
        description: "بسكويت هش ومقرمش مع طبقة شوكولاتة بالحليب.. طعم التسعينات الأصلي!",
        price: 10.99,
        image: "images/Products/Prod6.jpg"
    },
    {
        id: 7,
        name: "Cheese & Spice Cookies",
        description: "بسكويت مالح بطعم الجبنة والتوابل الخاصة .. لمحبى الساليزونات والمقرمشات",
        price: 12.99,
        image: "images/Products/Prod7.jpg"
    },
    {
        id: 8,
        name: "Premium Butter Cookies",
        description: "بسكويت الزبدة الأصلى بطعم فاخر لا يقاوم",
        price: 14.99,
        image: "images/Products/Prod8.jpg"
    },
    {
        id: 9,
        name: "Chocolate Chip Cookies",
        description: "كل قطمه مليانه شوكولاتة . تشوكليت شيبس كوكيز عند كوكى دو غير اى كوكيز",
        price: 16.99,
        image: "images/Products/Prod9.jpg"
    },
    {
        id: 10,
        name: "Coffee Bean Cookies",
        description: "بسكويت حبيبات القهوة طعم لا يقاوم . لعشاق القهوة",
        price: 18.99,
        image: "images/Products/Prod10.jpg"
    },
    {
        id: 11,
        name: "Petit Four Mix",
        description: "بيتى فور كوكى دو .. انعم قطعة حلويات ممكن تدوقها ف حياتك ميكس أطعم غنى فى كل قطعة",
        price: 18.99,
        image: "images/Products/Prod11.jpg"
    },
    {
        id: 13,
        name: "Choco Vanilla Cookies",
        description: "بسكويت فانيليا و بسكويت كاكاو و حشوة نوتيلا. شوكو فانيلا كوكيز",
        price: 18.99,
        image: "images/Products/Prod13.jpg"
    }
];

// Function to get all products
function getAllProducts() {
    return products;
}

// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Function to get products by price range
function getProductsByPriceRange(minPrice, maxPrice) {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, getAllProducts, getProductById, getProductsByPriceRange };
}