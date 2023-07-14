import { useRef, useState, useEffect } from 'react';
import { firestore, db } from '../firebase.js';
import { addDoc, collection } from '@firebase/firestore'


export default function SaveChat(message) {
    console.log("the is the message in save chat: " + message)
    const messageRef = useRef();
    const colRef = collection(firestore, 'messages')

    
//Save message
    const handleSave = async(e) => {
        e.preventDefault();
        //console.log(messageRef.current.value);
        let data = {
            message: messageRef.current.value,
        }
        try {
            addDoc(colRef, data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
      <div>
        <form onSubmit={handleSave}>
           <input type="text" ref={messageRef} />
            <button type="submit">Save</button>
        </form>
      </div>
    )
  }