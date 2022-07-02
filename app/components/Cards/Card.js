import React from 'react';
import { CardWrapper, Img, CardHeader, CardDiscription, CardFooter, CardWaterMark } from "./Card.styled";
import { getImage } from "../../Utils/imageUtils";

function WorkerCard({ worker, isCarousal = false }) {
    return (
        <CardWrapper isCarousal={isCarousal}>
            <Img src={getImage(worker.img)} width='100%' />
            <CardHeader>
                {worker.text}
            </CardHeader>
            <CardDiscription>
                {worker.days}, <br /> {worker.oldCharges}
            </CardDiscription>
            <CardFooter>
                {worker.charges}
            </CardFooter>
            <CardWaterMark>
                {worker.state}
            </CardWaterMark>
        </CardWrapper>
    )
}

export default WorkerCard;