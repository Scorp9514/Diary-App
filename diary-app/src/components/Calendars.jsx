import "../css/calendars.css"
import { useState } from "react"
import Journal from "./Journal"


function Calendars({monthName,monthDays}){
    // Array.from=>把其他東西變成陣列,
    // length:陣列的長度 生成出一個只有長度 裡面沒東西的物件, 
    // (_,i)前面是我們要賦予陣列的值的名稱, 後面是他的index的名稱,相當於python裡面for i,v in enumerate(li)但是iv反過來
    // 陣列的每一格依他的index填入i+1
    const daysArray = Array.from({length: monthDays},(_,i)=>i+1)

    let journalDB;
    const journalDBreq = indexedDB.open('journals',1)

    journalDBreq.onupgradeneeded = (e) =>{
        journalDB = e.target.result
        
    }

    const [selectedDay,setSeletedDay] = useState(null)
    return <div className="calendar">
        <div className="monthName">
            <h1>{monthName}</h1>
        </div>
        <div id="weekdaysContainer">
            {/* for v,i in enumerate(["M","T","W","T","F","S","S"])  */}
            {["M","T","W","T","F","S","S"].map((w,i) => (
                <div key={i}>
                    {w}
                </div>
            ))}
        </div>
        
        <div className="monthDays">
            {
                // for d in daysArray
                daysArray.map((d)=>(
                    // 生成表示日子的ul元素並賦予selectedDay一個值
                    <ul key={d} className="days" onClick={()=>setSeletedDay(monthName+String(d))}>{d}</ul>
                ))
            }
        </div>

        {/* 判斷selectedDay有沒有值 如果有值就顯示Journal元件並傳值進去並綁定事件 */}
        {selectedDay && <Journal day={selectedDay} onClose={()=>setSeletedDay(null)}/>}
        
    </div>
}

export default Calendars
