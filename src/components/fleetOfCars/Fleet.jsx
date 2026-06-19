import "./fleet.css"
import Link from "next/link"
import Image from "next/image"
import { Headphones,Locate,MonitorDotIcon,MapPin } from "lucide-react"
import { FaWhatsapp,FaBluetooth, FaDoorOpen, FaSitemap, FaSatellite, FaWifi } from "react-icons/fa"

export default function FleetSection() {
    return (
        <>
        <div className="fleetContainer">
            <div>
                <h2 className="color-txt">Plan Your Trip Now</h2>
                <h1>Explore Our Top Deal</h1>
            </div>
            <div className="fleetGrid">
                    <div className="fleetscnt">
                        <h2>Mini Suv Car</h2>
                        <Image 
                        src="/KIA_Sorento-600x386.png"
                        width={300}
                        height={200}
                        alt="KIA Car"
                        loading="eager"
                        />
                        <div className="icon-txt">
                            <p><Headphones stroke="grey"/>Music</p>
                            <p><Locate stroke="grey"/>GPS</p>
                            <p><MonitorDotIcon stroke="grey"/>TV</p> 
                            <p><FaWifi color="grey"/>Wifi</p>        
                        </div>
                        <div className="priceBookCnt">
                            <p>&#8358;170,000.00/Day</p>
                            <button>
                                <Link href="booking" className="Link">BOOK NOW</Link>
                            </button>
                        </div>
                    </div>
                    
                   <div className="fleetscnt">
                    <h2>Sedan Executive Car</h2>
                         <Image 
                        src="/Camry-600x398.png"
                        width={300}
                        height={200}
                        alt="Camry Car"
                        loading="eager"
                        />
                         <div className="icon-txt">
                            <p><Headphones stroke="grey"/>Music</p>
                            <p><Locate stroke="grey"/>GPS</p>
                            <p><MonitorDotIcon stroke="grey"/>TV</p> 
                            {/* <p><FaWifi color="grey"/>Wifi</p>         */}
                        </div>
                        <div className="priceBookCnt">
                            <p>&#8358;80,000.00/Day</p>
                            <button>
                                <Link href="booking" className="Link">BOOK NOW</Link>
                            </button>
                        </div>
                    </div>
                    <div className="fleetscnt">
                        <h2>Executive SUV </h2>
                         <Image 
                        src="/car5.png"
                        width={300}
                        height={200}
                        alt=" Lexus Jeep"
                        loading="eager"
                        />
                        <div className="icon-txt">
                            <p><Headphones stroke="grey"/>Music</p>
                            <p><Locate stroke="grey"/>GPS</p>
                            <p><MonitorDotIcon stroke="grey"/>TV</p> 
                            <p><FaBluetooth color="grey"/>Bluetooth</p>
                            <p><FaWifi/>Wifi</p>        
                        </div>
                        <div className="priceBookCnt">
                            <p>&#8358;150,000.00/Day</p>
                            <button>
                                <Link href="booking" className="Link">BOOK NOW</Link>
                            </button>
                        </div>
                    </div>
                    <div className="fleetscnt">
                        <h2>Hiace Bus</h2>
                         <Image 
                        src="/Hiace-Bus-600x351.png"
                        width={300}
                        height={200}
                        alt="Hiace Bus"
                        loading="eager"
                        />
                         <div className="icon-txt">
                            <p><Headphones stroke="grey"/>Music</p>
                            <p><Locate stroke="grey"/>GPS</p>
                            <p><MonitorDotIcon stroke="grey"/>TV</p> 
                            <p><FaBluetooth color="grey"/>Bluetooth</p>
                        </div>
                        <div className="priceBookCnt">
                            <p>&#8358;190,000.00/Day</p>
                            <button>
                                <Link href="booking" className="Link">BOOK NOW</Link>
                            </button>
                        </div>
                    </div>
                    <div className="fleetscnt">
                        <h2>Coaster Bus</h2>
                         <Image 
                        src="/Coaster_Bus-600x398.png"
                        width={300}
                        height={200}
                        alt="Coaster Bus"
                        loading="eager"
                        />
                         <div className="icon-txt">
                            <p><Headphones stroke="grey"/>Music</p>
                            <p><Locate stroke="grey"/>GPS</p>
                            <p><MonitorDotIcon stroke="grey"/>TV</p> 
                            <p><FaWifi/>Wifi</p>        
                        </div>
                        <div className="priceBookCnt">
                            <p>&#8358;200,000.00/Day</p>
                            <button>
                                <Link href="booking" className="Link">BOOK NOW</Link>
                            </button>
                        </div>
                    </div>
                    <div className="fleetscnt">
                        <h2>SUV Hilux</h2>
                         <Image 
                        src="/Escort_van-600x402.png"
                        width={300}
                        height={200}
                        alt="Hilux Jeep"
                        loading="eager"
                        />
                         <div className="icon-txt">
                            <p><Headphones stroke="grey"/>Music</p>
                            <p><Locate stroke="grey"/>GPS</p>
                            <p><MonitorDotIcon stroke="grey"/>TV</p> 
                            <p><FaBluetooth color="grey"/>Bluetooth</p>
                            <p><FaWifi/>Wifi</p>        
                        </div>
                        <div className="priceBookCnt">
                            <p>&#8358;140,000.00/Day</p>
                            <button>
                                <Link href="booking" className="Link">BOOK NOW</Link>
                            </button>
                        </div>
                    </div>
                
                   



            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>






        </div>
        
        
        </>
    )
}