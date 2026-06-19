import "./fleet.css"
import Image from "next/image"
import { Headphones,Locate,MonitorDotIcon,MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
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
                        </div>
                    </div>
<FaWhatsapp size={50}  color="green" />                    <div className="fleetscnt">
                         <Image 
                        src="/Camry-600x398.png"
                        width={300}
                        height={200}
                        alt="Camry Car"
                        loading="eager"
                        />
                        
                    </div>
                    <div className="fleetscnt">
                         <Image 
                        src="/car5.png"
                        width={300}
                        height={200}
                        alt=" Lexus Jeep"
                        loading="eager"
                        />
                    </div>
                    <div className="fleetscnt">
                         <Image 
                        src="/Hiace-Bus-600x351.png"
                        width={300}
                        height={200}
                        alt="Hiace Bus"
                        loading="eager"
                        />
                    </div>
                    <div className="fleetscnt">
                         <Image 
                        src="/Coaster_Bus-600x398.png"
                        width={300}
                        height={200}
                        alt="Coaster Bus"
                        loading="eager"
                        />
                    </div>
                    <div className="fleetscnt">
                         <Image 
                        src="/Escort_van-600x402.png"
                        width={300}
                        height={200}
                        alt="Hilux Jeep"
                        loading="eager"
                        />
                    </div>
                
                   



            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>






        </div>
        
        
        </>
    )
}