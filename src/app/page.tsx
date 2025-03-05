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
                <div className="fresh">
                    {items.map((item) => (
                        <ProductItem key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
}