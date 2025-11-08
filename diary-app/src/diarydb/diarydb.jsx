import { openDB } from 'idb';

const diarydb = openDB("diaries",1,{
    upgrade(db){
        db.createObjectStore('diary')
    }
})

export async function get(key){
    return (await diarydb).get('diary',key)
}

export async function set(val,key){
    return (await diarydb).put('diary',val,key)
}