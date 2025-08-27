import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';

export default function AlertBox({ value, clr }) {
  return (
      <Alert sx={{ position: 'fixed', top: 0, left: 50, width: '90%', zIndex: 1100 }} icon={<CheckIcon fontSize="inherit" />} severity={clr}>
        {value}
      </Alert>
  );
}
