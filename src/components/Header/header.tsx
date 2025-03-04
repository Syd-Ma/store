"use client"

import React, {useEffect, useState} from "react";
import "./header.css";
import { SlBasket } from "react-icons/sl";
import { FaLaptopCode } from "react-icons/fa6";

export default function Header() {

    const [total, setTotal] = useState<number>(0);

    return (
        <div className="header">
            <div className={"logo"}>
                <div className={"img"}></div>
                <div className={"n"}>
                    <div className={"name"}>React Killer</div>
                    <div className={"underName"}>Gadgets of your dream</div>
                </div>
            </div>
            <div className={"profile"}>
                <div className={"ava"}></div>                           {/*доробить коли зробим акаунти і логін*/}
                <div className={"profileName"}>Profile Name</div>
            </div>
            <div className={"cartAndPhone"}>
                <div className={"phone"}>+380 97 407 1505</div>
                <div className={"cart"}>
                    <div className={"cartIcon"}><SlBasket /></div>
                    <div className={"total"}>{total} UAH</div>
                </div>
            </div>
        </div>
    )
}