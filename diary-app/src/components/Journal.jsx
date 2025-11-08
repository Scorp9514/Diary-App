import "../css/journal.css"

function Journal({day,onClose,onSave}){
    return <div id="transparent-bg">
        <div id="note-wrapper">
            {/* 呼叫綁定的onClick事件 */}
            <div id="close-btn" onClick={onClose}>X</div>
            <div id="dayName">{day}</div>
            <textarea id="diary-text"></textarea>
            <button id="save-btn" onClick={onSave}>Save</button>
        </div>
    </div>   
}

export default Journal