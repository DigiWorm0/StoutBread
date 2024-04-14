import ShopItem from "./ShopItem.ts";

const BREAD_PRICE = "$3 Mini Loaf • $12 Regular Loaf";

const ShopItemDB: ShopItem[] = [
    {
        id: "BananaBread",
        name: "Banana 🍌",
        tagline: "Classic",
        shortDescription: "The signature flavor",
        description: "Our classic banana bread is a fan favorite. Made with fresh bananas and a hint of cinnamon, this bread is perfect for any time of day.",
        type: "Menu",
        price: BREAD_PRICE
    },
    {
        id: "BananaChocolateChip",
        name: "Banana Chocolate Chip 🍫",
        tagline: "Classic",
        shortDescription: "The signature flavor",
        type: "Menu",
        price: BREAD_PRICE
    },
    {
        id: "BananaWalnut",
        name: "Banana Walnut 🥜",
        tagline: "Season Favorite",
        shortDescription: "A nutty twist on the classic banana bread",
        type: "Menu",
        price: BREAD_PRICE
    },
    {
        id: "LemonPoppyseed",
        name: "Lemon Poppyseed 🍋",
        tagline: "Unique Flavor",
        shortDescription: "A refreshing twist on the classic bread",
        type: "Menu",
        price: BREAD_PRICE,
    },
    {
        id: "LemonBlueberry",
        name: "Lemon Blueberry 🫐",
        tagline: "Unique Flavor",
        shortDescription: "A refreshing twist on the classic bread",
        type: "Menu",
        price: BREAD_PRICE,
    },
    {
        id: "CinnamonSugar",
        name: "Cinnamon Sugar 🍪",
        tagline: "Sugar & Sweet",
        shortDescription: "A sweet treat for any time of day",
        type: "Menu",
        price: BREAD_PRICE,
    },
    {
        id: "Apple",
        name: "Apple Cinnamon 🍎",
        tagline: "Season Favorite",
        shortDescription: "A taste of fall in every bite",
        type: "Menu",
        price: BREAD_PRICE,
    },
    {
        id: "Pumpkin",
        name: "Pumpkin Cream Cheese 🎃",
        tagline: "Season Favorite",
        shortDescription: "A little halloween surprise",
        type: "Menu",
        price: BREAD_PRICE,
    },
    {
        id: "Zucchini",
        name: "Zucchini 🥒",
        tagline: "New Flavor!",
        shortDescription: "A fruity taste of Wisconsin",
        type: "Menu",
        price: BREAD_PRICE
    },
    {
        id: "ZucchiniChocolateChip",
        name: "Zucchini Chocolate Chip 🍫",
        tagline: "New Flavor!",
        shortDescription: "A fruity taste of Wisconsin",
        type: "Menu",
        price: BREAD_PRICE
    },
    {
        id: "ZucchiniWalnut",
        name: "Zucchini Walnut 🥜",
        tagline: "New Flavor!",
        shortDescription: "A fruity taste of Wisconsin",
        type: "Menu",
        price: BREAD_PRICE
    },

    // Apparel
    {
        id: "Snapback-Black",
        name: "Snap Back",
        tagline: "Represent Stout Bread",
        shortDescription: "The summer essential",
        type: "Apparel",
        price: "$25"
    },
    {
        id: "Snapback-Gray",
        name: "Snap Back",
        tagline: "Represent Stout Bread",
        shortDescription: "The summer essential",
        type: "Hidden",
        price: "$25"
    },

    {
        id: "Crewneck-M",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        type: "Apparel",
        price: "$30"
    },
    {
        id: "Crewneck-L",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        type: "Hidden",
        price: "$30"
    },
    {
        id: "Crewneck-XL",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        type: "Hidden",
        price: "$30"
    },

    {
        id: "Beanie-Black",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        type: "Apparel",
        price: "$35"
    },
    {
        id: "Beanie-Gray",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        type: "Hidden",
        price: "$35"
    },
    {
        id: "Beanie-LightGray",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        type: "Hidden",
        price: "$35"
    }
];

export default ShopItemDB;