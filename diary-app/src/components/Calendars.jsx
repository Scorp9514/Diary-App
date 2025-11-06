import "../css/calendars.css"


function Calendars({monthName,monthDays}){
    
    const daysArray = Array.from({length: monthDays},(_,i)=>i+1)

    return <div className="calendar">
        <div className="monthName">
            <h1>{monthName}</h1>
        </div>
        <div id="weekdaysContainer">
            {["M","T","W","T","F","S","S"].map((w) => (
                <div>
                    {w}
                </div>
            ))}
        </div>
        
        <div className="monthDays">
            {
                daysArray.map((d,i)=>(
                    <ul key={d}>{d}</ul>
                ))
            }
        </div>
        
    </div>
}

export default Calendars
