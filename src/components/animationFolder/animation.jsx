import "./animation.css"
import Image from "next/image"
import AnimateCar from "../animatedImg/animate"
import { PhoneCall,Tags,Clock,MedalIcon,CarFront,Award,Star } from "lucide-react"
import { FaCar,FaTags,FaMedal } from "react-icons/fa"
import { FaClockRotateLeft,FaPhone,FaAward } from "react-icons/fa6"
export default function AnimationArea() {
    return (
        <>
        <div className="animateBody">
            <div className="leftBody">
               <AnimateCar/>
            </div>
            <div className="rightBody">
                <h2>Why We Are The First Choice Of Many 
                Coperate Bodies And Organizations In Nigeria.</h2>
                <p>
                    We Stand As Your Trusted Partner,Our Selfless Aim Towards 
                    Customer Satisfaction And Quality Of Service 
                    Sets Us Apart.
                </p>
                 <div className="grid-box">
                        <div className="first-grid">
                            {/* <li> <Award stroke="crimson" strokeWidth={1} width={40} height={40} className="iconAnimate"/> Professional and well trained chauffeurs</li> */}
                            <li> <Award color="crimson"   className="iconAnimate " style={{width:"40px",height:"40px"}}/> Professional  chauffeurs</li>
                             <li><FaTags color="crimson"  width={80} height={140} className="iconAnimate " style={{width:"40px",height:"40px"}}/> Excellent Services</li>
                            <li><FaClockRotateLeft color="crimson"className="iconAnimate " style={{width:"40px",height:"40px"}}/>Pucntuality</li>
                        </div>
                        <div className="second-grid">
                            <li> <FaMedal   className="iconAnimate" color="crimson"  style={{width:"40px",height:"40px"}}/> Dedication and Certanity</li>
                            <li> <FaPhone  color="crimson" className="iconAnimate " style={{width:"40px",height:"40px"}}/> Excellent customer support</li>
                            <li><FaCar  color="crimson"  width={80} height={140} className="iconAnimate " style={{width:"40px",height:"40px"}}/>Well Maintained Vehicles</li>
                        </div>
                    </div>
            </div>
            </div>        
        </>
    )
}