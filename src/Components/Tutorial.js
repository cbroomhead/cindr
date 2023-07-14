
import { useRef, useState, useEffect } from 'react';
import { firestore, db } from '../firebase.js';
import { addDoc, collection, getDocs, deleteDoc, doc } from '@firebase/firestore'

export default function Tutorial() {
    const messageRef = useRef();

    const ref = collection(firestore, 'messages')
//Save message

    const handleSave = async(e) => {
        e.preventDefault();
        console.log(messageRef.current.value);
        let data = {
            message: messageRef.current.value,
        }
        try {
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }
    };

//Fetch message
    const [chats, setChats] = useState([]);
    const fetchChats = async(e) => {
        getDocs(ref).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                chats.push({ ...doc.data(), id: doc.id, })
            })
        console.log(chats)
        })
        .catch(err =>{
            console.log(err.message)
        })
    };

    useEffect(() => {
            fetchChats();
        }, [])

//Delete message


    return (
      <div>
        <form onSubmit={handleSave}>
            <label> Enter Message</label>
           <input type="text" ref={messageRef} />
            <button type="submit">Save</button>
        </form>

        <div> 
           Hello Fetch Chats
        </div>

      </div>
    )
  }