"use client"
import { motion } from "framer-motion"
export default function AnimateCar() {
    return (
        <>
       <motion.img
        src="/car5.png"
        alt="car"
        loading="eager"
        className="motionImg"
         initial={{ x: -500, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
        
        
        />
        
        </>
    )
}