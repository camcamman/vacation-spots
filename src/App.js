import React from "react";
import info from "./info";
import Card from "./Card";


export default function Main () {
    const cardLooped = info.map(item => {
        console.log(info)
        return(
            <Card
                key={item.place}
                item={item}
            />
        )
    })

    return (
       <div>{cardLooped}</div> 
    )
}