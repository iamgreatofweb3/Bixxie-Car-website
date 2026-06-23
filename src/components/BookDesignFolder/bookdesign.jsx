import "./bookdesign.css"
import Image from "next/image"
export default function BookDesignCnt() {
    return(
        <>
        <div className="bookDesignCnt">
            <div className="bookcnt">
                <div className="left-part">
                    <h2>Start your Journey Now</h2>
                    <h5>Book your Perfect ride and  
                    enjoy with Bixxie Ridez rental services</h5>
                </div>
                <div className="right-part">
                    <Image src="/car-bg-removed.png" width={430} height={300} alt="SlideImg" className="slideImg"/>
                </div>
            </div>

        </div>
        
        
        
        </>
    )
}