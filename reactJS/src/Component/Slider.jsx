import React, { useState } from 'react';
// import React, { useState } from 'react';

import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
// import { useState } from 'react';

export default function App() {
    const [openBasic, setOpenBasic] = useState(false);
    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>KINJAL</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenBasic(!openBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar open={openBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Dropdown
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>Action</MDBDropdownItem>
                                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                                        <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true'>
                                    Disabled
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>


                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                            <MDBBtn color='primary'>Search</MDBBtn>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>


            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem itemId={1}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={3}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>
        </>
    );
}