import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';


const CustomCard = (props) => {
    return (
        <>
            <MDBCard>
                <MDBCardImage src={props.image} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>{props.title}</MDBCardTitle>
                    <MDBCardTitle>{props.discription}</MDBCardTitle>

                    <MDBCardText>
                        {props.rating.rate}
                    </MDBCardText>
                    <MDBCardTitle>{props.price}</MDBCardTitle>


                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </>
    );
};
export default CustomCard;