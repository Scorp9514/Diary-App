import { useState,useEffect } from "react"
import "../css/journal.css"
import {get,set} from "../diarydb/diarydb"


function Journal({day,onClose}){
    // 用來設定和儲存textarea裡面的字
    const [textAreaText,setTextAreaText] = useState('')
    

    // 當day改變或Journal第一次出現就把textarea的字改變渲染出來
    useEffect(()=>{
        async function searchValue() {
            const txt = await get(day) || ""
            setTextAreaText(txt)
        }
        searchValue()
    },[day])


    // 當save按鈕被按下 將textarea裡面的字存在db裡面
    const handleSave = async()=>{
        await set(textAreaText, day)
    }
    
    return <div id="transparent-bg">
        <div id="note-wrapper">
            {/* 呼叫綁定的onClick事件 */}
            <div id="close-btn" onClick={onClose}>X</div>
            <div id="dayName">{day}</div>

            {/* 當textarea裡面的字改變後就更新state */}
            <textarea id="diary-text" value={textAreaText} onChange={(e)=>setTextAreaText(e.target.value)}></textarea>

            {/* 呼叫handleSave */}
            <button id="save-btn" onClick={handleSave}>Save</button>
        </div>
    </div>   
}

export default Journal