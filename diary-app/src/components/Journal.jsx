import "../css/journal.css"

function Journal({day,onClose}){
    return <div id="transparent-bg">
        <div id="note-wrapper">
            <div id="close-btn" onClick={onClose}>X</div>
            <div id="dayName">{day}</div>
            
        </div>
    </div>   
}

export default Journal