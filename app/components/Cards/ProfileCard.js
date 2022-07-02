import React from 'react';
import { CircledCardWrapper, CardWrapper, ProfImg, CardHeader, CardDiscription, CardFooter, CardWaterMark } from "./Card.styled";
import { getImage } from "../../Utils/imageUtils";

function WorkerCard({ profile, isCarousal = false }) {
    return (
        <CardWrapper isCarousal={isCarousal}>
            <ProfImg src={getImage(profile.img)} />
            <CardHeader>
                {profile.text}
            </CardHeader>
        </CardWrapper>
    )
}

export default WorkerCard;