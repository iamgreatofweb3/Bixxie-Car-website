import "./footer.css"
import Link from "next/link"
export default function Footer() {
    return (
        <>
        <footer>
            <h4>
                At Bixxie Ridez Rentals, we are the best because of our
                verified vehicles and flexible plan option tailored for our customer needs.
            </h4>
            <div className="linksContainer">
                <ul>
                    <h3>Insights</h3>
                    <li> <Link href="#" className="footer-links">Support Center</Link></li>
                    <li> <Link href="#" className="footer-links">Customer Support</Link></li>
                    <li> <Link href="#" className="footer-links">About Us Page</Link></li>
                    <li> <Link href="#" className="footer-links">Copyright</Link></li>
                </ul>

                <ul>
                    <h3>Services</h3>
                    <li> <Link href="#" className="footer-links">Our Fleet</Link></li>
                    <li> <Link href="#" className="footer-links">Privacy Policy</Link></li>
                    <li> <Link href="#" className="footer-links">Our Chaffeurs</Link></li>
                    <li> <Link href="#" className="footer-links">Browser Extensions</Link></li>
                </ul>

                <ul>
                    <h3>Career</h3>
                    <li> <Link href="#" className="footer-links">Site Map</Link></li>
                    <li> <Link href="#" className="footer-links">Terms & Conditions</Link></li>
                    <li> <Link href="#" className="footer-links">Return Policy</Link></li>
                </ul>

                <ul>
                    <h3>About Us</h3>
                    <li> <Link href="#" className="footer-links">Press Inquriries</Link></li>
                    <li> <Link href="#" className="footer-links">Social Media</Link></li>
                    <li> <Link href="#" className="footer-links">Directories</Link></li>
                    <li> <Link href="#" className="footer-links">Our Images/Gallery</Link></li>
                </ul>





            </div>
        </footer>
        
        
        </>
    )
}