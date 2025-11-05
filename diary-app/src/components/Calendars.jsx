import "../css/calendars.css"

function Calendars({monthName,monthDays}){
    return <div className="calendar">
        <div className="monthName">
            <h1>{monthName}</h1>
        </div>
        <div className="monthDays">
            <h2>{monthDays}</h2>
        </div>
        
    </div>
}

export default Calendars
