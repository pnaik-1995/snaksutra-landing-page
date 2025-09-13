import React from 'react' 
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/jowarImg.jpg';
import imgDetail2 from '../assets/makhanaImg.jpg';
import imgDetail3 from '../assets/channa.jpg';
import imgDetail4 from '../assets/millet.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
        <Grid 
            container 
            spacing={{ xs: 4, sm: 4, md: 0 }}   
            sx={{
                py: 10,
                px: 2,
            }}
        >
            {/* Section 1 - Text Left / Image Right */}
            <CustomGridItem item xs={12} sm={8} md={6}>
                <Box component='article' sx={{ px: 4 }}>
                    <Title
                        text="We make snacking easy and healthy."
                        textAlign="start"
                    />
                    <CustomTypography>
                        Our snacks are roasted,<br />
                        never fried,<br />
                        so you can munch guilt-free anytime, anywhere.
                    </CustomTypography> 
                </Box>
            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="snack-img-1" style={{ width: '100%' }} />
            </Grid>

            {/* Section 2 - Image Left / Text Right */}
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail2} alt="snack-img-2" style={{ width: '100%' }} />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}>
                <Box component='article' sx={{ px: 4 }}>
                    <Title
                        text="We bring tradition to your taste buds"
                        textAlign="start"
                    />
                    <CustomTypography>
                        From ancient grains to modern flavors,<br /> 
                        we craft snacks that are wholesome and delicious.
                    </CustomTypography>
                </Box>
            </CustomGridItem>

            {/* Section 3 - Text Left / Image Right */}
            <CustomGridItem item xs={12} sm={8} md={6}>
                <Box component='article' sx={{ px: 4 }}>
                    <Title
                        text="We care about what goes into your body."
                        textAlign="start"
                    />
                    <CustomTypography>
                        100% natural, preservative-free,<br /> 
                        packed with protein and fiber in every bite.
                    </CustomTypography>
                </Box>
            </CustomGridItem>

            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail3} alt="snack-img-3" style={{ width: '100%' }} />
            </Grid>

            {/* Section 4 - Image Left / Text Right */}
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail4} alt="snack-img-4" style={{ width: '100%' }} />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}>
                <Box component='article' sx={{ px: 4 }}>
                    <Title
                        text="We believe snacking should be joyful, not guilty."
                        textAlign="start"
                    />
                    <CustomTypography>
                        With makhana, millet, channa, and veggie chips,<br /> 
                        there’s always a smarter way to munch.
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;
