import React from 'react';
import room1 from '../../../images/room/room1.jpg'
import room2 from '../../../images/room/room2.jpg'
import room3 from '../../../images/room/room3.jpg'
import room4 from '../../../images/room/room4.jpg'
import room5 from '../../../images/room/room5.jpg'
import room6 from '../../../images/room/room6.jpg'
import Room from '../Home/Room/Room';
import './Rooms.css'

const Rooms = () => {
    const rooms = [
        {id : 1, name : "SINGEL ROOM", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, repellendus?", price: "200$", img : room1},
        
        {id : 2, name : "PLAY GROUND ROOM", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, repellendus?", price: "200$", img : room2},

        {id : 3, name : "NATERUAL ROOM", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, repellendus?", price: "200$", img : room3},

        {id : 4, name : "GEST ROOM", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, repellendus?", price: "200$", img : room4},

        {id : 5, name : "COOKING ROOM", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, repellendus?", price: "200$", img : room5},

        {id : 6, name : "WEDDING ROOM", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, repellendus?", price: "200$", img : room6},

    ]
    return (
        <div>
            <h2 className='mt-5'>Our Populer Rooms</h2>
           <div className='rooms-container container'>
           {
                rooms.map(room => <Room
                key ={room.id}
                room={room}
                />)
            }
           </div>
        </div>
    );
};

export default Rooms;