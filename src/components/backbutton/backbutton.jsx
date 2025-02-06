/* Back Button component done by: Tan Jun Wei */

/* 
    This component allows users to navigate back to the previous page, regardless of which page they came from.
    For example, both the Home page and the Recipes page can allow users to navigate to the individual recipe pages.
    Using this button, users can easily return to the previous page they were on.
*/

'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import { IoIosArrowBack } from 'react-icons/io';  // Import the back arrow icon from React Icons

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <Button 
      onClick={handleBack} 
      variant="contained" 
      color="primary"  
      startIcon={<IoIosArrowBack />} 
      sx={{ padding: '10px 20px', fontSize: '16px', textTransform: 'none'}}  // Material UI sx prop for styling
    >
      Return
    </Button>
  );
};

export default BackButton;


