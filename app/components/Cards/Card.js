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
            {worker.village}, <br/> {worker.panchayat} 
        </CardDiscription>
        <CardFooter>
            {worker.contact}
        </CardFooter>
        <CardWaterMark>
            {worker.skill}
        </CardWaterMark>
    </CardWrapper>
    )
}

export default WorkerCard;