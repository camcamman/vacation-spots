import React from "react";


export default function Main (prop) {
    return(
        <div>
            <h1>this is {prop.item.place}</h1>
            <h1>it costs {prop.item.price}</h1>
            <h1>the best time to go is {prop.item.timeToGo}</h1>
        </div>
    )
}


// {
//     place: "Meridian, Idaho",
//     price: 40,
//     timeToGo: "Spring"
//   },{