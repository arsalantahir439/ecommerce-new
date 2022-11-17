import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import img from "../assets/cardimg.jpg"
import "./globle-component.scss"

const cardData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Containerbox() {
  return (
    <Container className='container-wrapper' maxWidth="xl" sx={{ p: "20px" }}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {cardData.map((data) =>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card className='card-main' sx={{ width: '100%', p: 1 }}>
              <CardContent>
                <img className='card-img' src={img} />
                <Typography   >
                HP laptop 15s-du1520TU | Intel Celetron N4020 Dual Core Processor
                </Typography>

                
               <span className='card-price'>
                <p className='price'>RS. 2,000</p>
               <p className='discount-price'>Rs.3,000</p>
               </span>
              </CardContent>
              <Grid container  alignItems="center">
                  <Grid item lg={6} sx={{px:"8px"}}>
                   <FavoriteBorderIcon sx={{mt:1}}/>
                  </Grid>
                  <Grid item lg={6} sx={{px:"10px"}} >
                   <div className="counter">
                    <AddIcon className='iconbtn cursor-pointer' />
                    <span className="showcount" >0</span>
                    <RemoveIcon className='iconbtn cursor-pointer'/>
                   </div>
                  </Grid>
                </Grid>
              <CardActions>
                
                <button className='card-btn btn'  >veiw more</button>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>

    </Container>
  );
}