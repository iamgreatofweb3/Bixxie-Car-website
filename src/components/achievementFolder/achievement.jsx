import "./achievement.css"
export default function AchievementPage() {
    return(
        <>
        <div className="achievementCnt">
            <h1 className="color-txt">Our Achievement</h1>
            <h5>Our Journey of Success is a testament of 
                the collective efforts and determination of our 
                professional teams.
            </h5>
           <div className="achievementBox">
            <div className="achievements achievementsBorder">
              <h2 className="color-txt ">4,000+</h2>
              <h2>Active Members</h2>
            </div>
            <div className="achievements achievementsBorder">
              <h2 className="color-txt">70+</h2>
              <h2>Active Cars</h2>
            </div>
            <div className="achievements r">
            <h2 className="color-txt">20+</h2>
              <h2>Positive Reviews</h2>
            </div>


           </div>
        </div>
        
        </>
    )
}