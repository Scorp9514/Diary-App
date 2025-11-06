import "../css/calendars.css"


function Calendars({monthName,monthDays}){
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
        {/* {monthDays} */}
        <div className="monthDays">

        </div>
        
    </div>
}

export default Calendars
