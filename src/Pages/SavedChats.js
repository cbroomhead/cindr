import Tutorial from '../Components/Tutorial.js'
import SavedChat from '../Components/SavedChat.js'

import { useRef, useState, useEffect } from 'react';
import { firestore, db } from '../firebase.js';
import { collection, getDocs, deleteDoc, doc } from '@firebase/firestore'


export default function SavedChats() {

  const colRef = collection(firestore, 'messages')

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


  return (
    <div>
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