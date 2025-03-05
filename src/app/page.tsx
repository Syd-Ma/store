"use client"

import Header from "../components/Header/header";
import ProductItem from "../components/ProductItems/ProductItem";
import "./page.css"

interface Item {
    id: number;
    name: string;
    description: string[];
    characteristics: string[];
    img: string;
    price: string;
}

export default function Home() {


    const freshItems: Item[] = [
        {
            id: 1,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
        {
            id: 2,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
        {
            id: 3,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
        {
            id: 4,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },

    ];
    const items: Item[] = [
        {
            id: 1,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
        {
            id: 2,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
        {
            id: 3,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
        {
            id: 4,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
        {
            id: 5,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
        {
            id: 6,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
        {
            id: 7,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
        {
            id: 8,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ','64 Мп','4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },

    ];

    return (
        <div className={"Home"}>
            <div className={"head"}>
            <Header />
            </div>
            <div className={"body"}>
                <div className={"adSlider"}>
                    <div className={"adTextPart"}>
                        <div className={"adMainText"}>Bright gadgets to keep you on trend!</div>
                        <div className={"adText"}>We've gathered the best gadgets from top brands to bring you the
                            latest and greatest from the digital market!
                        </div>
                        <button className={"adBuyButton"}>Shop Now</button>
                    </div>
                    <div className={"adImgPart"}>
                    </div>
                </div>
                <div className={"freshMainText"}>
                    Fresh gadgets of 2025!
                </div>
                <div className="fresh">

                    {freshItems.map((item) => (
                        <ProductItem key={item.id} item={item}/>
                    ))}
                </div>
                <div className={"banners"}>
                    <div className={"banner1"}></div>
                    <div className={"banner2"}></div>
                </div>
                <div className={"freshMainText"}>Catalog</div>
                <div className="fresh">

                    {items.map((item) => (
                        <ProductItem key={item.id} item={item}/>
                    ))}
                </div>
                <div className={"freshMainText"}>About Us</div>
                <div className={"aboutUs"}>
                    <div className={"aboutUsText"}>
                        <div className={"boldText"}>13</div>
                        <div className={"notBoldText"}>IQ workers</div>
                    </div>
                    <div className={"aboutUsText"}>
                        <div className={"boldText"}>1000+</div>
                        <div className={"notBoldText"}>Negative feedbacks</div>
                    </div>
                    <div className={"aboutUsText"}>
                        <div className={"boldText"}>4274</div>
                        <div className={"notBoldText"}>Lost parcels</div>
                    </div>

                    <div className={"aboutUsText"}>

                        <div className={"boldText"}>365</div>
                        <div className={"notBoldText"}>Days of delivery</div>
                    </div>
                </div>
            </div>
        </div>
    );
}