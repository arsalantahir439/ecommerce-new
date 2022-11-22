import { Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import img from "../../assets/cardimg.jpg"
import "./global.scss"
import React from 'react'


interface Props {
  dataArray: number[];
}

const GlobalCard = (props: Props) => {
  const { dataArray } = props;
  return (
    <Container className='container-wrapper' maxWidth="xl" sx={{ p: "20px" }}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {dataArray.map((data) =>
          <Grid item lg={3} md={4} sm={6} xs={12} key={data}>
            <Card className='card-main' sx={{ width: '100%', p: 1 }}>
              <CardContent>
                <img className='card-img' src={img} />
                <Typography   >
                  HP laptop 15s-du1520TU | Intel Celetron N4020 Dual Core Processor
                </Typography>


                <span className='card-price'>
                  <p className='price'>RS. 2,000</p>
                  <s><p className='discount-price'>Rs.3,000</p></s>
                </span>
              </CardContent>
              <Grid container alignItems="center">
                <Grid item lg={6} sx={{ px: "8px" }}>
                  <FavoriteBorderIcon sx={{ mt: 1 }} />
                </Grid>
                <Grid item lg={6} sx={{ px: "10px" }} >
                  <div className="counter">
                    <AddIcon className='iconbtn cursor-pointer' />
                    <span className="showcount" >0</span>
                    <RemoveIcon className='iconbtn cursor-pointer' />
                  </div>
                </Grid>
              </Grid>
              <CardActions>

                <button className='card-btn btn'>veiw more</button>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>

    </Container>
  )
}

export default GlobalCard