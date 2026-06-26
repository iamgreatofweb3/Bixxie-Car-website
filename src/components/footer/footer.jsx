import "./footer.css"
import Link from "next/link"
export default function Footer() {
    const fullYear = new Date().getFullYear()
    return (
        <>
         <footer>
            <div className="footerCnt">

            <div className="leftFooter">
                <h3>At Bixxie Ridez, We stand out with personalized
                    services that are so flexible for our customers.
                </h3>
            </div>
            <div className="right-footer">
                <div>
                    <h3>Insights</h3>
                    <Link href="/" className="links">Support Link</Link>
                    <Link href="/" className="links">Customer Support</Link>
                    <Link href="/" className="links">About Page</Link>
                </div>

                <div>
                    <h3>Services</h3>
                    <Link href="/" className="links">Our data</Link>
                    <Link href="/" className="links">Our Chaffeurs</Link>
                    <Link href="/" className="links">Privacy Policy</Link>
                    <Link href="/" className="links">Our Data</Link>
                </div>

                <div>
                    <h3>Career</h3>
                    <Link href="/" className="links">Return Policy</Link>
                    <Link href="/" className="links">Terms & Conditions</Link>
                    <Link href="/"className="links">Site Map</Link>
                    <Link href="/" className="links">Privacy Policy</Link>

                </div>

                <div>
                    <h3>About Us</h3>
                    <Link href="/" className="links">Press Inquiries</Link>
                    <Link href="/" className="links">Social Media</Link>
                    <Link href="/" className="links">Images & Rolls</Link>
                    <Link href="/" className="links">Our Documentary</Link>
                </div>
            </div>
            </div>
            <div className="date">
                 <h3> ©{fullYear} Bixxie Ridez.All Rights Reserved.</h3>
            </div>

        </footer> 


        
        
        </>
    )
}