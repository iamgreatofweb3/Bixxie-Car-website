import "./bookdesign.css"
import Link from "next/link"
import Image from "next/image"
import { FaAdjust, FaForward } from "react-icons/fa"
import {ChevronsRightIcon} from "lucide-react"
import { FaDiagramNext, FaFaceGrimace } from "react-icons/fa6"
export default function BookDesignCnt() {
    return(
        <>
        <div className="bookDesignCnt">
            <div className="bookcnt">
                <div className="left-part">
                    <h2>Start your Journey Now</h2>
                    <h5>Book your Perfect ride and  
                    enjoy with Bixxie Ridez rental services</h5>
                     <button>
                                <Link href="booking" className="Links">BOOK NOW <ChevronsRightIcon height={30} width={30}/></Link>
                            </button>
                </div>
                <div className="right-part">
                    <Image src="/car-bg-removed.png" width={300} height={200} alt="SlideImg" className="slideImg"/>
                </div>
            </div>

        </div>
        
        
        
        </>
    )
}