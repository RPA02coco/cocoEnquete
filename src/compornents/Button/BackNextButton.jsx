import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { MobileStepper, Button, Typography } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"

const BackNextButton = ({ handleNext, handleBack, activeStep, disableflg }) => {
  const theme = useTheme();

  const labelProps = {};
  if (disableflg) {
    labelProps.optional = (
      <Typography variant="caption" color="error">
        Alert message
      </Typography>
    );
    labelProps.error = true;
  }
  
  return (
    <MobileStepper
      variant="dots"
      steps={7}
      position="bottom"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={(activeStep === 6) || (disableflg === true)}> 
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={(activeStep === 0) || disableflg}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  )
}

BackNextButton.propTypes = {
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  activeStep: PropTypes.number,
  disableflg: PropTypes.bool,
};

export default BackNextButton;