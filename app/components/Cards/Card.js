import React from 'react';
import { CardWrapper, Img, CardHeader, CardDiscription, CardFooter, CardWaterMark } from "./Card.styled";
import { getImage } from "../../Utils/imageUtils";

function WorkerCard({worker, isCarousal=false}) {
    return (
    <CardWrapper isCarousal={isCarousal}>
        <Img src={getImage(worker.image)} width='100%' />
        <CardHeader>
            {worker.name}
        </CardHeader>
        <CardDiscription>
            {worker.days}, <br/> {worker.oldCharges} 
        </CardDiscription>
        <CardFooter>
            {worker.Price}
        </CardFooter>
        <CardWaterMark>
            {worker.state}
        </CardWaterMark>
    </CardWrapper>
    )
}

export default WorkerCard;