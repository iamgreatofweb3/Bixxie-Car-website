import "./process.css"
import { BsCarFront } from "react-icons/bs"
import { FaCar, FaCalendarDay, FaLocationArrow } from "react-icons/fa"
import { Calendar1Icon, LocationEditIcon, CarFront } from "lucide-react"
import { FaCalendarDays, FaLocationDot, FaLocationPin } from "react-icons/fa6"
export default function Process() {
    return (

        <>
        <div className="process-container">
            <h2 className="color-txt">How it Work</h2>
            <h3 className="steptxt">Bixxie Ridez follow 3 working Steps</h3>
            <div className="stepBox">
                <div className="leftStepBox Box">
                    <FaLocationDot width={50} height={70} className="stepIcons"/>

                    <h2 className="color-txt">Choose A Location</h2>
                    <h5>Select your preferred location 
                        and destination for perfect car rental experience.
                    </h5>
                </div>
                <div className="middleStepBox Box">
                     <FaCalendarDays width={50} height={70}  className="stepIcons"/>

                    <h2 className="color-txt">Pick A Date</h2>
                    <h5>PinPoint your travel date 
                        to experience the perfect car rental service 
                        to be offered on your trip.
                    </h5>
                </div>
                
                <div className="rightStepBox Box">
                    <FaCar  width={50} height={70}  className="stepIcons"/>
                    <h2 className="color-txt">Book Your Car</h2>
                    <h5>Reserve your vehicle effortlessly 
                        and embark on your adventureous trip with confidence.
                    </h5>
                </div>
            </div>

        </div>
        
        
        </>
    )
}               
