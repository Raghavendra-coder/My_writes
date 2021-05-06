import React from 'react';

const Wish = () => {
var curDate = new Date();
curDate = curDate.getHours();
var wish = "";
const wish_style= { } ;
if(curDate>= 0 && curDate < 12)
{
 wish ="Morning";
 wish_style.backgroundColor = "chartreuse";
 wish_style.color = "green";
     
 
}
else if(curDate >=12 && curDate < 19)
{
 wish ="Afternoon";
 wish_style.backgroundColor = "yellow";
 wish_style.color = "orange";
}

else{
 wish ="Night";
 wish_style.backgroundColor = "cornflowerblue";
 wish_style.color = "blue";
}
    return (
        <>
         <h1 className="wish_me" style={wish_style}>Good {wish}</h1>
        </> 
    )
}

export default Wish;