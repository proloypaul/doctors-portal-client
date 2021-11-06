import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import contactUsBgImg from '../../../images/appointment-bg.png'

const contactUsBg = {
    background: `url(${contactUsBgImg})`,
    backgroundColor: 'rgb(43, 69, 80, 0.7)',
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    height: "550px",
    backgroundBlendMode: 'darken, luminosity',
    margin: '20px 0px'

}
const ContactUs = () => {
    return (
        <Container style={contactUsBg} sx={{textAlign: 'center', py:10}}>
            <Grid>
                <Typography variant="p" component="div" sx={{fontWeight: 'bold', fontSize: 20, color:'#49F4CE'}}>
                    CONTACT US     
                </Typography>
                <Typography variant="h3" component="div" sx={{color: 'white', mb:5}}>
                    Always Connect with us
                </Typography>
                <form>
                    <div>
                        <input type="text" placeholder="Email Address" style={{width: "50%", padding: "15px"}}/>
                    </div>
                    <div>
                        <input type="text" placeholder="subject" style={{width: "50%", padding: "15px", margin:"10px 0px"}}/>
                    </div>
                    <div>
                        <textarea placeholder="Write Your Message" style={{width: "50%", height:"100px", padding: "15px", }}></textarea>
                    </div>
                    <Button variant="contained">Send</Button>
                </form>
            </Grid>
        </Container>
    );
};

export default ContactUs;