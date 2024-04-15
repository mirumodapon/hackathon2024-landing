'use client'

import Award from '@/components/events/Award';
import Issue from '@/components/events/Issue';
import Workshop from '@/components/events/Workshop';
import Schedule from '@/components/events/Schedule';
import Criterion from '@/components/events/Criterion';
import guideline, { theme } from '@/app/guideline';
import ContestResource from '@/components/events/ContestResource';

import { createTheme, ThemeProvider, Typography, Box, CssBaseline } from '@mui/material';
import { WithGradient } from '@/utils/commonComponent';

const styles = {
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '72px'
    },
    flexInnerContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
};

export default function Events() {
    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box sx={styles.flexContainer} width='80%' margin='auto'>
            <WithGradient color={guideline.primary}>
                <Typography variant='h1' fontWeight='bold'>黑客松活動</Typography>
            </WithGradient>
            <Schedule/>
            <Issue/>
            <ContestResource/>
            <Workshop/>
            <Criterion/>
            <Award/>
        </Box>
    </ThemeProvider>
}