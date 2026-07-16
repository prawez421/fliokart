import { NavLink } from "react-router-dom";

const categories = [
    {
        id: 1,
        name: "For You",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/all.svg",
        link: "/",
    },
    {
        id: 2,
        name: "Fashion",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/fashion.svg",
        link: "/fashion",
    },
    {
        id: 3,
        name: "Mobiles",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg",
        link: "/mobiles",
    },
    {
        id: 4,
        name: "Electronics",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/electronics.svg",
        link: "/electronics",
    },
    {
        id: 5,
        name: "Beauty",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/beauty.svg",
        link: "/beauty",
    },
    {
        id: 6,
        name: "Home",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/home-final.svg",
        link: "/home",
    },
    {
        id: 7,
        name: "Appliances",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/tv.svg",
        link: "/appliances",
    },
    {
        id: 8,
        name: "Toys & More",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/toy.svg",
        link: "/toys",
    },
    {
        id: 9,
        name: "Food & H..",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/food.svg",
        link: "/food",
    },
    {
        id: 10,
        name: "Auto Acc..",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/auto-acc.svg",
        link: "/auto",
    },
    {
        id: 11,
        name: "Sports & ..",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/sport.svg",
        link: "/sports",
    },
    {
        id: 12,
        name: "Furniture ",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/furniture.svg",
        link: "/furniture",
    },
    {
        id: 13,
        name: "Book & ...",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/books.svg",
        link: "/book",
    },
    {
        id: 14,
        name: "2 Wheele...",
        image: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/auto-new.svg",
        link: "/2wheele",
    },
];


function CategoryBar() {
    return (
        <div className="bg-white shadow-sm border-b">
            <div className="flex items-center  gap-5 px-3 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide md:justify-between md:max-w-7xl md:mx-auto
        "
            >
                {categories.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.link}
                        className={({ isActive }) =>
                            `flex flex-col items-center flex-shrink-0 transition pb-2 ${isActive
                                ? "text-blue-600 bg-gradient-to-b from-blue-100 to-white  rounded-t-md border-b-2 border-blue-600 font-semibold"
                                : "text-gray-700 hover:text-blue-600"
                            }`
                        }
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-8 h-8  md:w-10 md:h-10 object-contain"
                        />

                        <span className="text-[11px] md:text-sm text-center mt-2 leading-tight">
                            {item.name}
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}


export default CategoryBar;