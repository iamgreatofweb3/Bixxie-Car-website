"use client"
import Image from "next/image"
import "./HeroSection.css"
import Carousel from "../carouselPage/Carousel"

export default function HeroSection() {
    return (
        <>
       <div className="heroSection-Container">
        <div className="left-heroSection">
            <h1>EXPLORE WITH <br /> CONFIDENCE</h1>
            <h3>Drive with Bixxie Ridez Rental Services</h3>
            <p>
                We are Affordable, reliable and hassle-free car rentals for every 
                of your journey.
                Book now for peace of mind!
            </p>
        </div>
        <div className="right-heroSection">
            <Carousel/>
        </div>
       </div>

      
     
        
        
        </>
    )

}