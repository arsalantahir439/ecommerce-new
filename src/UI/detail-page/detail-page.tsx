import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import img from "../../assets/cardimg.jpg"
import "./detail.scss"
const DetailPage = () => {
    return (
        <Container className='detail-wrapper' maxWidth="xl" >danish
            <Grid container >
                <Grid item md={2} xs={12} sx={{ border: "1px solid black" }}>

                    <Box display='flex' alignItems='center' justifyContent='center' flexDirection={{ md: 'column', xs: 'row' }} sx={{ background: 'red', }}>
                        <div>asfsgag</div>
                        <div>asfsgag</div>
                        <div>asfsgag</div>

                    </Box>

                </Grid>

                <Grid item md={4} xs={12} sx={{}}>
                    <div > <img className='card-img' src={img} /></div>
                </Grid>


                <Grid item md={5} xs={12} sx={{ padding: "0px 40px" }}>
                    <div className="detail-sec">
                        <p className='detail-heading'>BOTANICAL VIRSA</p>
                        <div className="detail-span-div">
                            <span className='detail-span'>SKU CH3937-Navy-Blu-2 </span>
                            <span>In-stock</span>
                            <span className='detail-price'>Rs: 3,000.00</span>
                        </div>
                        <label >
                            <input type="radio" name='radio-btn' value='small' />
                            small
                        </label >
                        <label className='detail-label'>
                            <input type="radio" name='radio-btn' value='medium' />
                            medium
                        </label>
                        <label className='detail-label'>
                            <input type="radio" name='radio-btn' value='large' />
                            large
                        </label>
                        <label className='detail-label'>
                            <input type="radio" name="radio-btn" value='xl-large' />
                            xl-large
                        </label>

                        <div className="description-div">
                            <h2 className='description-heading'>Description</h2>
                            <hr />
                            <h4 className='description-heading'>BOTANICAL VIRSA</h4>
                            <span className='description-span'>Shirt: Embroidered Karandi Lawn 2.50 Meter<br />
                                Dupatta: Embroidered Chiffon Self 2.50 Meter<br />
                                Shalwar: Plain Karandi Lawn 2.50 Meter</span>
                        </div>
                        <div className="detail-btns">
                            <button className='descripton-btn buy-now-btn' >BUY NOW</button>
                            <button className='descripton-btn'>Add To Cart</button>
                        </div>
                    </div>
                </Grid>


            </Grid>
        </Container>
    )
}

export default DetailPage