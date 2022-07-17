import styled from "styled-components";

export const Img = styled.img`
    width: 100%;
    height: 50%;
    border-radius: 0.5em 0.5em 0 0;
`
export const ProfImg = styled.img`
    // width: 50%;
    height: 50%;
    border-radius:50%;
`
export const CardWrapper = styled.div`
    width: ${props => props.isCarousal ? '90%' : '9em'};
    height: 13em;
    max-width: 10em;
    min-width: 6em;
    border: solid 2px wheat;
    border-radius: 0.5em;
    position: relative;
    margin: 10px;
`;

export const ProfileCardWrapper = styled.div`
    width: 6em;
    height: 9em;
    max-width: 10em;
    min-width: 6em;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const EmptyCardWrapper = styled(CardWrapper)`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`;

export const CircledCardWrapper = styled.div`
   width: 6em;
   height: 6em;
   // border: solid 2px wheat;
   border-radius: 50%;
   background-color: rgb(12, 12, 114);
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`;

export const CardHeader = styled.div`
    font-size: 0.7em;
`
export const CardDiscription = styled.div`
    font-size: 0.65em;
    font-weight: 300;
`
export const CardWaterMark = styled.div`
background-color: black;
color: rgb(160, 132, 54);
font-size: 0.65em;
font-weight: 800;
position: absolute;
top: 0;
right: 0;
padding: 2px 4px;
border-radius: 0 0.5em 0 0;
z-index: 2;
transform:  rotateX(30);
`
export const CardFooter = styled.div`
  color: rgb(160, 132, 54);
  font-size: 0.65em;
  font-weight: 600;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);

`