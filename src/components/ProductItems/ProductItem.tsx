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
                <div className={"priceAndArrow"}>
                <div className="freshItemPrice">{item.price}</div>
                <div className={"arr"}><img src="/icons/arrow.svg" /></div>
                </div>
            </div>
        );
    };

export default ProductItem;