import React from 'react'
import {
    Grid,
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Title from './Title'
import Paragraph from './Paragraph'
import imgDetail from '../assets/chipIcon.jpg';
import imgDetail2 from '../assets/milletIcon.jpg';
import imgDetail3 from '../assets/makhanaIcon.jpg';
import imgDetail4 from '../assets/dryFruitsIcon.jpg';
import imgDetail5 from '../assets/seedsIcon.jpg';


const Content = () => {
    return (
        <Grid container spacing={0}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                py: 10,
                px: 2,
            }}
        >
            <Grid item xs={12} sm={12} md={5}
                component='section'
            >
                <Title
                    text={
                        'What We Offer?'
                    }
                    textAlign={'start'}
                />

                <Paragraph
                    text={
                        'A wholesome snacking experience —\
                     roasted, never fried, preservative-free, and full of flavor.\
                     Our range includes millet-based, protein-rich, and vegan-friendly options.'
                    }
                    maxWidth={'75%'}
                    mx={0}
                    textAlign={'start'}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                    }}>
                    <CardContent>
                        <IconButton>
                            <img
                                src={imgDetail}   // 👉 your PNG product image
                                alt="Jowar Chips"
                                style={{
                                    width: 100,   // adjust size
                                    height: 100,
                                    objectFit: "contain"
                                }}
                            />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Chips
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>
                    <CardContent>
                        <IconButton>
                            <img
                                src={imgDetail2}   // 👉 your PNG product image
                                alt="Millets"
                                style={{
                                    width: 100,   // adjust size
                                    height: 100,
                                    objectFit: "contain"
                                }}
                            />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Millets
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={2}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                }}
            >
                <Card
                    square={true}
                    sx={{
                        boxShadow: 'none',
                        minHeight: 180,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                    <CardContent>
                        <ArrowCircleRightRoundedIcon
                            fontSize="large"
                            color="secondary" />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>
                    <CardContent>
                        <IconButton>
                            <img
                                src={imgDetail3}   // 👉 your PNG product image
                                alt="Makhana"
                                style={{
                                    width: 100,   // adjust size
                                    height: 100,
                                    objectFit: "contain"
                                }}
                            />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Makhana
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                    }}
                >
                    <CardContent>
                        <IconButton>
                            <img
                                src={imgDetail4}   // 👉 your PNG product image
                                alt="dryFruits"
                                style={{
                                    width: 100,   // adjust size
                                    height: 100,
                                    objectFit: "contain"
                                }}
                            />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Dry Fruits
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                    }}>
                    <CardContent>
                        <IconButton>
                            <img
                                src={imgDetail5}   // 👉 your PNG product image
                                alt="Seeds"
                                style={{
                                    width: 100,   // adjust size
                                    height: 100,
                                    objectFit: "contain"
                                }}
                            />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Seeds
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Content