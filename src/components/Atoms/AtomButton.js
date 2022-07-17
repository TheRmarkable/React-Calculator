import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function AtomButton({ text, variant, color, onClick, classes }) {

  return (
    <Stack spacing={2} direction="row">
      <Button 
        variant={variant}
        color={color}
        onClick={onClick}
        classes={classes}
        >
            {text}
      </Button>
    </Stack>
  );
}

AtomButton.defaultProps = {
    variant: "contained"
}


