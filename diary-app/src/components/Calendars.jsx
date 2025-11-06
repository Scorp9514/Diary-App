import "../css/calendars.css"


function Calendars({monthName,monthDays}){
    {
        const mD = document.querySelector('.monthDays')
        for(let i=1;i<monthDays;i++){
            
            console.log(monthDays)
            let day = document.createElement('ul')
            day.classList.add(`day-${i+1}`)
            mD.appendChild(day)
        }
    }
    
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

        </div>
        
    </div>
}

export default Calendars
