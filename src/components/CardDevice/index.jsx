import React, { useState } from 'react'; 
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material'; 
import Switch from '@mui/material/Switch'; 
import { useTheme, makeStyles } from '@mui/styles';

import Iconify from '../../components/Iconify';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: props.color,
    backgroundColor: props.background
  }),
  iconDevice: (props) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    fontSize: '0.1rem',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: props.color,
    backgroundImage: `linear-gradient(135deg, ${alpha(props.color, 0)} 0%, ${alpha(
      props.color,
      0.24
    )} 100%)`
  })
}));

const CardDevice = (props) => {
  const { checked, onChange,title, icon } = props;
  const theme = useTheme();

  const styles = {
    active: {
      background: theme.palette.warning.lighter,
      color: theme.palette.warning.dark
    },
    disabled: {
      background: theme.palette.info.lighter,
      color: theme.palette.info.dark
    }
  };
  const stylesColor = checked ? { ...styles.active } : { ...styles.disabled };

  const classes = useStyles({ ...props, ...stylesColor });
  return (
    <Card className={classes.root}>
      <div className={classes.iconDevice}>
        <Iconify icon={icon||"carbon:light"} width={24} height={24} />
      </div>
      <Typography variant="h3">
        <Switch checked={checked} onChange={onChange} color="warning" />
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title||'Light'}
      </Typography>
    </Card>
  );
};

export default CardDevice;