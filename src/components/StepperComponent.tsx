import React from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";

const StepperComponent = ({ currentStep, handleNext, handleBack }) => {
  const steps = ["Personal Details", "Address", "Academic Details", "Document"];

  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <Stepper activeStep={currentStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          disabled={currentStep === 0}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {currentStep < steps.length - 1 ? "Next" : "Submit"}
        </Button>
      </Box>
    </Box>
  );
};

export default StepperComponent;
