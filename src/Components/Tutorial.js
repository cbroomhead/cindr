
import SavedChat from './SavedChat.js'

import { useRef, useState, useEffect } from 'react';
import { firestore, db } from '../firebase.js';
import { addDoc, collection, getDocs, deleteDoc, doc } from '@firebase/firestore'

export default function Tutorial() {
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

//Fetch message
    const [chats, setChats] = useState([]);

    window.addEventListener('load', () => {
        fetchChats();
    });

    const fetchChats = async() => {
        const savedmessages = await getDocs(colRef)
             const chats = savedmessages.docs.map((chat) => {
                const data = chat.data()
                    data.id = chat.id
                    return data
            })
             console.log(chats)
             setChats(chats)
    };

    // code below works
    // useEffect(() => {
    //         //fetchChats();
    //     ;(async () => {
    //         const snapshots = await getDocs(colRef)
    //         const docs = snapshots.docs.map((doc) => doc.data())
    //         console.log(docs)
    //     })()
        
    //     }, [])

//Delete message


    return (
      <div>
        <form onSubmit={handleSave}>
            <label> Enter Message</label>
           <input type="text" ref={messageRef} />
            <button type="submit">Save</button>
        </form>

        <div> 
           Saved messages below
        </div>
        <div>
            {
            chats.map((chat, index) => (
                /*<div> {chat.message}</div>*/
                <SavedChat key={index} chat={chat.message}/>

            ))
            }
        </div>

      </div>
    )
  }