'use client'

import Image from 'next/image'
import { Box, Grid, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { UnselectableImage } from '@/utils/commonComponent';

const govern = [
    { name: '台北市資料大平台', description: '包含了各種與台北市相關的公開資料，如交通資料、文化資料、環境資料等。', url: '#' },
    { name: '政府資料開放平臺', description: 'test test test', url: '#' },
    { name: '行政院資料開放平台', description: 'test test test', url: '#' },
    { name: '司法院資料開放平台', description: 'test test test', url: '#' },
    { name: '立法院資料開放平台', description: 'test test test', url: '#' },
    { name: '監察院資料開放平台', description: 'test test test', url: '#' },
];
const api = [
    { name: '天氣 API', description: '提供世界各地的天氣紀錄', url: '#' },
    { name: 'NASA', description: 'test test test', url: '#' },
];
const tool = [
    { name: 'GitHub Student Developer Pack', description: 'GitHub 提供給學生的開發包、涵蓋各種開發工具和軟體。', url: '#' },
];

const buttonText = {
    fontWeight: '500',
}

interface CardProps {
    chosen: number,
    setChosen: Dispatch<SetStateAction<number>>,
    data: {
        name: string;
        description: string;
        url: string;
    }[],
    title: string
}

function Illustrate({ title }: { title: string }) {
    const size = '300';
    let src: string;
    let offset: string;
    if (title === '政府單位開放資料平台') {
        offset = '30px';
        src = "/2024/images/resources/pic1.svg";
    }
    else if (title === '實用 API') {
        offset = '-330px';
        src = "/2024/images/resources/pic2.svg";
    }
    else {
        offset = '30px';
        src = "/2024/images/resources/pic3.svg";
    }

    return <UnselectableImage src={src} width={size} height={size} alt="插圖" style={{
        position: 'absolute',
        marginTop: '-200px',
        marginLeft: offset,
    }} />
}
function Card({ chosen, setChosen, data, title}: CardProps) {
    return (
        <Grid container gap='56px' direction='column' marginTop='97px'>
            <Grid item>
                <Typography variant='h2' fontWeight='bold'>
                    {title}
                </Typography>
            </Grid>
            <Grid item marginLeft='28px' container direction='row' justifyContent='space-between'>
                <Grid item container gap='16px' direction='column' width='30%'>
                    { data.map(({ name }, index) => {
                        return (
                            <div onClick={(e) => setChosen(index)} style={{ cursor: 'pointer' }}>
                                <Grid container key={index} direction='row' flexWrap='nowrap'>
                                    <Box>
                                        {index == chosen ? <FaCheck size='26px' /> : <Box width='26px' height='26px' />}
                                    </Box>
                                    <Box>
                                        {index == chosen ?
                                            <Typography variant='h4' fontWeight='bold' marginLeft='12px'>
                                                {name}
                                            </Typography> :
                                            <Typography variant='h4' fontWeight='bold' marginLeft='12px' color='#EFEFEF8F'>
                                                {name}
                                            </Typography>
                                        }
                                    </Box>
                                </Grid>
                            </div>
                        );
                    }) }
                </Grid>
                <Grid item width='55%' container alignItems='center' direction='column' sx={{borderTop: 'solid', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0) 19.29%)'}}>
                    <Illustrate title={title} />
                    <Box margin='30px 50px'>
                        <Typography variant='body1'>
                            {data[chosen].description}
                        </Typography>
                    </Box>
                    <a className='btn-color' href={data[chosen].url} style={{padding: '5px 15px'}}>
                        <Box>
                            <Typography variant='body2' sx={{buttonText}}>
                                website
                            </Typography>
                        </Box>
                    </a>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default function ResourceCard() {
    const [governChosen, setGovernChosen] = useState(0);
    const [apiChosen, setApiChosen] = useState(0);
    const [toolChosen, setToolChosen] = useState(0);
    return (
        <Grid>
            <Card chosen={governChosen} setChosen={setGovernChosen} data={govern} title='政府單位開放資料平台'/>
            <Card chosen={apiChosen} setChosen={setApiChosen} data={api} title='實用 API'/>
            <Card chosen={toolChosen} setChosen={setToolChosen} data={tool} title='開發工具'/>
        </Grid>
    );
}