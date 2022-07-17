import React from 'react';
import { CircledCardWrapper, ProfileCardWrapper, ProfImg, CardHeader, CardDiscription, CardFooter, CardWaterMark } from "./Card.styled";
import { getImage } from "../../Utils/imageUtils";

function WorkerCard({ profile, isCarousal = false }) {
    return (
        <ProfileCardWrapper isCarousal={isCarousal}>
            <ProfImg src={getImage(profile.img)} />
            <CardHeader>
                {profile.text}
            </CardHeader>
        </ProfileCardWrapper>
    )
}

export default WorkerCard;