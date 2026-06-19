'use client'
import "./Navbar.css"
import Image from "next/image"
import {  AlignJustifyIcon, XIcon } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
export default function NavBar() {
    const [open,setOpen] = useState(false)
    return (
        <>
       <header>
        <div className="left-header">
          <Image src="/Bixie-logo.png"
          width={100}
          height={80}
          alt="Logo"
          loading="eager"
          className="logo-icon"
          />
        </div>
        <div className="right-header" id="mobile-nav">
             {open ? (
    <XIcon size={35}  onClick={()=>setOpen(!open)} cursor="pointer"/>
  ) : (
    <AlignJustifyIcon size={35} onClick={()=>setOpen(!open)} cursor="pointer" />
  )}
            { open && (
              <div className="menu-dropdown">
                <ul>
                <Link  href="/" className="links">HOME</Link>
                 <Link href="booking" className="links">BOOK A CAR</Link>
                 <Link href="aboutPage" className="links">ABOUT US</Link>
                 <Link href="faq" className="links">FAQ</Link>
                 <Link href="feedbacks" className="links">CUSTOMER FEEDBACK</Link>
                 <Link href="contactUs" className="links">CONTACT US</Link>
                </ul>
              </div>
            )}
        </div>
        <div className="desktop-nav">
          <ul>
                <Link  href="/" className="links">HOME</Link>
                 <Link href="booking" className="links">BOOK A CAR</Link>
                 <Link href="aboutPage" className="links">ABOUT US</Link>
                 <Link href="faq" className="links">FAQ</Link>
                 <Link href="feedbacks" className="links">CUSTOMER FEEDBACK</Link>
                 <Link href="contactUs" className="links">CONTACT US</Link>
                </ul>
        </div>
       </header>
     </>
    )
}