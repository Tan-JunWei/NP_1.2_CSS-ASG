/* Copy to clipboard button component done by: Tan Jun Wei */

'use client'; // Ensures this component runs in the browser since it uses navigator.clipboard

import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  fontSize: '16px',
  textTransform: 'none',
  transition: 'background-color 0.3s ease',
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false); // Creates a state to track if the text is copied

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000); // Resets the copied state after 5 seconds to provide user feedback
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <StyledButton 
      variant="contained" 
      sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' }, width: '240px'}} // sx prop can be used to override default style
      onClick={copyToClipboard}
    >
      {copied ? "Recipe Copied to Clipboard!" : "Copy Recipe to Clipboard"}
    </StyledButton>
  );
}
