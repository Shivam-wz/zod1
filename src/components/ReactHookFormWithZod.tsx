import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import simulatedApi from "../api/api"; // Replace with your actual API import
import StepperComponent from "./StepperComponent";
import PersonalStep from "./PersonalStep";
import AddressStep from "./AddressStep";
import AcademicStep from "./AcademicStep";
import DocumentStep from "./DocumentStep";

// Define the Zod schema
const qualificationSchema = z.object({
  degree: z.string().min(1, "Degree/College is required"),
  startDate: z.date().min(new Date("1900-01-01"), "Invalid start date"),
  endDate: z.date().min(new Date("1900-01-01"), "Invalid end date"),
});

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  motherName: z.string().min(1, "Mother's Name is required"),
  fatherName: z.string().min(1, "Father's Name is required"),
  dateOfBirth: z.date().min(new Date("1900-01-01"), "Invalid date of birth"),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender is required",
  }),
  maritalStatus: z.enum(["single", "married", "divorced", "widowed"], {
    message: "Marital Status is required",
  }),
  physicallyChallenged: z.boolean(),
  category: z.string().min(1, "Category is required"),
  religion: z.string().min(1, "Religion is required"),
  nationality: z.string().min(1, "Nationality is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  contactNumber: z
    .string()
    .min(10, "Contact Number must be at least 10 digits")
    .max(15, "Contact Number must be at most 15 digits"),
  guardianName: z.string().min(1, "Guardian Name is required"),
  relationWithGuardian: z.string().min(1, "Relation with Guardian is required"),
  guardianContact: z.string().min(10, "Guardian Contact is required"),
  GuardianAddress: z.string().min(1, "Address Line 1 is required"),
  skills: z
    .array(z.object({ skill: z.string() }))
    .min(1, "At least one skill is required"),
  HouseNumberBuildingName: z
    .string()
    .min(1, "House Number or Building Name is required"),
  FlatNumberandFloor: z.string().min(1, "Flat Number and Floor is required"),
  Country: z.string().min(1, "Country is required"),
  Pincode: z.string().min(1, "Pincode is required"),
  State: z.string().min(1, "State is required"),
  District: z.string().min(1, "District is required"),
  City: z.string().min(1, "City is required"),
  Taluka: z.string().min(1, "Taluka is required"),
  Area: z.string().min(1, "Area is required"),
  landmark: z.string().min(1, "Landmark is required"),
  sameAsPermanentAddress: z.boolean(),
  HouseNumber: z.string().min(1, "House Number is required"),
  FlatNumberandfloor: z.string().min(1, "Flat Number and Floor is required"),
  LevelOfQualification: z.string().min(1, "Level of Qualification is required"),
  DegreeDiplomaCertification: z
    .string()
    .min(1, "Degree/Diploma/Certification is required"),
  fieldOfStudy: z.string().min(1, "Field of Study is required"),
  SchoolCollege: z.string().min(1, "School/College is required"),
  BoardUniversity: z.string().min(1, "Board/University is required"),
  startDate: z.date().min(new Date("1900-01-01"), "Invalid start date"),
  endDate: z.date().min(new Date("1900-01-01"), "Invalid end date"),
  cgpiOrPercentage: z.string().min(1, "CGPI/Percentage is required"),
  inputFieldOfCgpaOrPercentage: z
    .string()
    .min(1, "CGPA/Percentage value is required"),
  qualifications: z.array(qualificationSchema).optional(),
});

type FormData = z.infer<typeof formSchema>;

const LearnerStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateOfBirth: new Date(),
      qualifications: [{ id: Date.now() }], // Initial qualification
    },
  });

  const { handleSubmit, trigger, getValues } = methods;

  const handleNext = async () => {
    let isValid = false;

    // Define the fields to validate based on the current step
    switch (currentStep) {
      case 0: // Personal Step
        isValid = await trigger([
          "firstName",
          "lastName",
          "motherName",
          "fatherName",
          "dateOfBirth",
          "gender",
          "maritalStatus",
          "physicallyChallenged",
          "category",
          "religion",
          "nationality",
          "email",
          "contactNumber",
          "guardianName",
          "relationWithGuardian",
          "guardianContact",
          "GuardianAddress",
          "skills",
        ]);
        break;
      case 1: // Address Step
        isValid = await trigger([
          "HouseNumberBuildingName",
          "FlatNumberandFloor",
          "Country",
          "Pincode",
          "State",
          "District",
          "City",
          "Taluka",
          "Area",
          "landmark",
          "sameAsPermanentAddress",
          "HouseNumber",
          "FlatNumberandfloor",
        ]);
        break;
      case 2: // Academic Step
        isValid = await trigger([
          "LevelOfQualification",
          "DegreeDiplomaCertification",
          "fieldOfStudy",
          "SchoolCollege",
          "BoardUniversity",
          "startDate",
          "endDate",
          "cgpiOrPercentage",
          "inputFieldOfCgpaOrPercentage",
          "qualifications",
        ]);
        break;
      case 3: // Document Step
        // Add fields for document step validation if needed
        isValid = await trigger([
          // Add document fields here
        ]);
        break;
      default:
        break;
    }

    // Proceed to the next step if valid
    if (isValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      await simulatedApi(data); // Replace with your actual API call
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const steps = [
    <PersonalStep key="personal" />,
    <AddressStep key="address" />,
    <AcademicStep key="academic" />,
    <DocumentStep key="document" />,
  ];

  return (
    <FormProvider {...methods}>
      <div style={{ padding: "20px" }}>
        <h1>Stepper Component Example</h1>
        <StepperComponent
          currentStep={currentStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
        <div style={{ marginTop: "20px" }}>{steps[currentStep]}</div>
        {currentStep === steps.length - 1 && (
          <button type="button" onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
        )}
      </div>
    </FormProvider>
  );
};

export default LearnerStepper;
