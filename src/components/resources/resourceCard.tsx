'use client';

import { Box, Grid, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { UnselectableImage } from '@/utils/commonComponent';
import govern from '@/data/json/govern.json';
import api from '@/data/json/api.json';
import tool from '@/data/json/tool.json';

const buttonText = {
  fontWeight: '500'
};

interface CardProps {
  chosen: number;
  setChosen: Dispatch<SetStateAction<number>>;
  data: {
    name: string;
    description: string;
    url: string;
  }[];
  title: string;
}

function Illustrate({ title }: { title: string }) {
  const size = '300';
  let src: string;
  let offset: string;
  if (title === '政府單位開放資料平台') {
    offset = '2vw';
    src = '/2024/images/resources/pic1.svg';
  } else if (title === '實用 API') {
    offset = '-28vw';
    src = '/2024/images/resources/pic2.svg';
  } else {
    offset = '3vw';
    src = '/2024/images/resources/pic3.svg';
  }

  return (
    <UnselectableImage
      src={src}
      width={size}
      height={size}
      alt="插圖"
      style={{
        position: 'absolute',
        marginTop: '-31vh',
        marginLeft: offset
      }}
    />
  );
}
function Card({ chosen, setChosen, data, title }: CardProps) {
  return (
    <Grid container gap="9vh" direction="column" marginTop="14vh">
      <Grid item>
        <Typography variant="h2" fontWeight="bold" id={title}>
          {title}
        </Typography>
      </Grid>
      <Grid item marginLeft="2vw" container direction="row" justifyContent="space-between">
        <Grid item container gap="3vh" direction="column" width="30%">
          {data.map(({ name }, index) => {
            return (
              <div key={index} onClick={(e) => setChosen(index)} style={{ cursor: 'pointer' }}>
                <Grid container key={index} direction="row" flexWrap="nowrap">
                  <Box>
                    {index == chosen ? <FaCheck size="26px" /> : <Box width="26px" height="26px" />}
                  </Box>
                  <Box>
                    {index == chosen ? (
                      <Typography variant="h4" fontWeight="bold" marginLeft="1vw">
                        {name}
                      </Typography>
                    ) : (
                      <Typography variant="h4" fontWeight="bold" marginLeft="1vw" color="#EFEFEF8F">
                        {name}
                      </Typography>
                    )}
                  </Box>
                </Grid>
              </div>
            );
          })}
        </Grid>
        <Grid
          item
          width="55%"
          container
          alignItems="center"
          direction="column"
          sx={{
            borderTop: 'solid',
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0) 19.29%)'
          }}
        >
          <Illustrate title={title} />
          <Box margin="5vh 4vw">
            <Typography variant="body1">{data[chosen].description}</Typography>
          </Box>
          <a
            className="btn-color"
            href={data[chosen].url}
            style={{ padding: '5px 15px' }}
            target="_blank"
          >
            <Box>
              <Typography variant="body2" sx={{ buttonText }}>
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
      <Card
        chosen={governChosen}
        setChosen={setGovernChosen}
        data={govern}
        title="政府單位開放資料平台"
      />
      <Card chosen={apiChosen} setChosen={setApiChosen} data={api} title="實用 API" />
      <Card chosen={toolChosen} setChosen={setToolChosen} data={tool} title="開發工具" />
    </Grid>
  );
}
