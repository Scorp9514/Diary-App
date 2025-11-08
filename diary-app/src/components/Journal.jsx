import "../css/journal.css"

function Journal({day,onClose}){
    return <div id="transparent-bg">
        <div id="note-wrapper">
            {/* 呼叫綁定的onClick事件 */}
            <div id="close-btn" onClick={onClose}>X</div>
            <div id="dayName">{day}</div>
            <textarea id="diary-text"></textarea>
            <button id="save-btn">Save</button>
        </div>
    </div>   
}

export default Journal