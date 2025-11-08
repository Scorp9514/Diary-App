import { useState,useEffect } from "react"
import "../css/journal.css"
import {get,set} from "../diarydb/diarydb"


function Journal({day,onClose}){
    const [textareaText,setTextAreaText] = useState('')
    // console.log(day)
    useEffect(()=>{
        async function getDiaryText(){
            const txt = await get(day) || ""
            console.log(txt)
            setTextAreaText(txt)
        }
        getDiaryText()
    },[day])
    const handleSave = async()=>{
        await set(textareaText,day)
    }
    const diarytext = get(day) || ""
    return <div id="transparent-bg">
        <div id="note-wrapper">
            {/* 呼叫綁定的onClick事件 */}
            <div id="close-btn" onClick={onClose}>X</div>
            <div id="dayName">{day}</div>
            <textarea id="diary-text" value={textareaText} onChange={(e)=>setTextAreaText(e.target.value)}></textarea>
            <button id="save-btn" onClick={handleSave}>Save</button>
        </div>
    </div>   
}

export default Journal