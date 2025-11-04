import "../css/calendars.css"

function Calendars({monthName,monthDays}){
    return <div className="calendar">
        <h1 className="monthName">{monthName}</h1>
        <h2 className="monthDays">{monthDays}</h2>
    </div>
}

export default Calendars
