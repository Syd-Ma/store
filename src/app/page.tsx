"use client"

import Header from "../components/Header/header";
import "./page.css"
import Slider from "../components/Slider/slider";

export default function Home() {
    return (
        <div className={"Home"}>
            <div className={"head"}>
            <Header />
            </div>
            <div className={"body"}>
                <div className={"adSlider"}>
                    <div className={"adTextPart"}>
                        <div className={"adMainText"}>Bright gadgets to keep you on trend!</div>
                        <div className={"adText"}>We've gathered the best gadgets from top brands to bring you the latest and greatest from the digital market!</div>
                        <button className={"adBuyButton"}>Shop Now</button>
                    </div>
                    <div className={"adImgPart"}>
                    </div>
                </div>
            </div>
        </div>
    );
}