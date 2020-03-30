import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import './CustomBreadCrumbs.scss';

// function handleClick(event: React.MouseEvent<HTMLDivElement>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export const CustomBreadCrumbs: FC = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Home
      </Link>
      <Typography color="textPrimary">Shopping cart</Typography>
    </Breadcrumbs>
  );
};
