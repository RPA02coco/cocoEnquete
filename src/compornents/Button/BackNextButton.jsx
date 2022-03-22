import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MobileStepper, Button, Typography } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import useMediaQuery from '@mui/material/useMediaQuery';
import NextButton from './NextButton';
import BackButton from './BackButton';

const BackNextButton = ({ handleNext, handleBack, activeStep, disableflg }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 画面サイズがsm以下か判定, 以上の場合はdownをupに変える
  const backButtonEnabled = (activeStep > 6) || (activeStep === 0) || (disableflg === true);
  const nextButtonEnabled = (activeStep >= 6) || (disableflg === true);

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
      sx={{
        maxWidth: 600,
        left: isMobile ? "" : "50%",
        transform: isMobile ? "" : "translate(-50%, 0)",
      }}
      nextButton={
        <NextButton onClick={handleNext} disabled={nextButtonEnabled}>
          {
            theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )
          }
        </NextButton >
      }
      backButton={
        <BackButton onClick={handleBack} disabled={backButtonEnabled}>
          {
            theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )
          }
        </BackButton >
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