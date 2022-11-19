import { Grid } from '@mui/material';
import React from 'react';
import Header from '../../component/layout/header/header';

interface Props {
    className: string;
    children?: any;
}

const GlobalContainer = (props: Props) => {
    const { className, } = props;
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default GlobalContainer