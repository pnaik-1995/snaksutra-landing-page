import React,{ useState } from 'react'
// mui
import { 
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'
import imgDetail from '../assets/familyPack.jpg';
import imgDetail2 from '../assets/jars.jpg';
import imgDetail3 from '../assets/singleServe.jpg';
import imgDetail4 from '../assets/travelFriendly.jpg';
import imgDetail5 from '../assets/giftHamper.jpg';


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: imgDetail
        },
        {
            alt: 'image2',
            url: imgDetail2
        },
        {
            alt: "image3",
            url: imgDetail3
        },
        {
            alt: "image4",
            url: imgDetail4
        },
        {
            alt: "image5",
            url: imgDetail5
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Snack Plans & Portions'
                }
                textAlign={'center'}
                />
                <Paragraph text={
                    'Choose from family packs, travel-friendly pouches,\
                    single-serve packs & gift hampers —\
                    designed for every mood and moment. \
                    If you interested, contact us.'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery