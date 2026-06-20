import "./Services.css"
import { Accessibility,ArrowLeftRightIcon,AwardIcon,VeganIcon } from "lucide-react"
export default function ServicePage() {
    return (
        <>
        <div className="serviceContainer">
            <h2 className="color-txt">Our Lists Of Professional Services</h2>
            <h5 className="color-txt">Professional Rentals And Chaffeurs</h5>
            <div className="serviceGridContainer">
                <div className="serviceBox">
                    <Accessibility stroke="crimson" width={40} height={40}/>
                    <h2 className="color-txt">Pick Off And Drop Off</h2>
                    <h5>We provide Convenient transport services in terms of 
                        pick up and drop off at any Location.
                    </h5>

                </div>
                <div className="serviceBox">
                    <Accessibility stroke="crimson" width={40} height={40}/>
                    <h2 className="color-txt">Car Rental(Short & Long Term Rental)</h2>
                    <h5> Very easy car renting options for both short terms  time
                        usage and long term usage providing comfort and availability.
                    </h5>

                </div>
                <div className="serviceBox">
                    <Accessibility stroke="crimson" width={40} height={40}/>
                    <h2 className="color-txt">Escorts Services  (VIP Style)</h2>
                    <h5>We provide escort services for both personal and coperate 
                        needs,Providing Security and companionship in grand style. 
                    </h5>

                </div>
                <div className="serviceBox">
                    <ArrowLeftRightIcon stroke="crimson" width={40} height={40}/>
                    <h2 className="color-txt">Intra State Renting</h2>
                    <h5>We provide Convenient transport services for our 
                        cstomers both in the state and outside of it.
                    </h5>

                </div>
                <div className="serviceBox">
                    <Accessibility stroke="crimson" width={40} height={40}/>
                    <h2 className="color-txt">Protocol Services</h2>
                    <h5>We provide protocol services offering VIP 
                        services to our Customers.
                    </h5>

                </div>
                <div className="serviceBox">
                    <VeganIcon stroke="crimson" width={40} height={40}/>
                    <h2 className="color-txt">Shared Pool Services</h2>
                    <h5>Cost Effective and friendly shared ride 
                    </h5>

                </div>



            </div>


        </div>
        </>
    )
}