"use client"

import "./ProductItem.css"

interface Item {
    id: number;
    name: string;
    description: string[];
    characteristics: string[];
    img: string;
    price: string;
}




    const items: Item[] = [
        {
            id: 1,
            name: "Xiaomi mi 11 lite",
            description: ['Diag', 'Screen', 'Cam', 'Acum'],
            characteristics: ['6.55"', 'AMOLED ', '64 Мп', '4250 mAh'],
            price: "15000 UAH",
            img: "/items/xiaomi.svg"
        },
    ];

    const ProductItem: React.FC<{ item: Item }> = ({item}) => {
        return (
            <div key={item.id} className="freshItem">
                <div className="freshItemName">{item.name}</div>
                <img src={item.img} alt={item.name} className="freshItemImg"/>
                <div className={"descriptionAndCharacteristics"}>
                    <div className={"freshItemDescription"}>
                        <ul className="frItDesc">
                            {item.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={"freshItemCharacteristics"}>
                        <ul className="frItChar">
                            {item.characteristics.map((char, index) => (
                                <li key={index}>{char}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="freshItemPrice">{item.price}</div>
            </div>
        );
    };

export default ProductItem;