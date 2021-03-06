import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MobileStepper, Typography } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import useMediaQuery from '@mui/material/useMediaQuery';
import NextButton from './NextButton';
import BackButton from './BackButton';

const BackNextButton = ({ handleNext, handleBack, activeStep, disableflg, form, totalPageNum }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 画面サイズがsm以下か判定, 以上の場合はdownをupに変える
  const backButtonDisabled = (activeStep > totalPageNum) || (activeStep === 0) /* || (disableflg === true) */;
  const nextButtonDisabled = (activeStep >= totalPageNum) /* || (disableflg === true) */;

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
      steps={totalPageNum + 1}
      position="bottom"
      activeStep={activeStep}
      sx={{
        maxWidth: 600,
        left: isMobile ? "" : "50%",
        transform: isMobile ? "" : "translate(-50%, 0)",
        backgroundColor: 'rgba(255,255,255,0.5)',
      }}
      nextButton={
        <NextButton
          onClick={handleNext}
          disabled={nextButtonDisabled}
          form={form}
          activeStep={activeStep}
        >
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
        <BackButton onClick={handleBack} disabled={backButtonDisabled}>
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
  form: PropTypes.object,
  totalPageNum: PropTypes.number,
};

export default BackNextButton;