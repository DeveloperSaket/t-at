import React from 'react';
import { Img, EmptyCardWrapper, CircledCardWrapper } from "./Card.styled";
import { getImage } from "../../utils/imageUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";

function ActionCard({ onAction, actionType, isCarousal = false }) {
    switch (actionType) {
        case 'add':
            return (
                <EmptyCardWrapper isCarousal={isCarousal}>
                    <FontAwesomeIcon icon={faPlus} onClick={()=>{onAction('aaa')}} cursor='pointer' />
                </EmptyCardWrapper>
            )

        case 'moreDetails':
            return (
                <CircledCardWrapper isCarousal={isCarousal}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={onAction.bind(this, 'ddd')} cursor='pointer' />
                </CircledCardWrapper>
            )

        default:
            return null;
    }
}

export default ActionCard;