import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const AcademicStep: React.FC = () => {
  const {
    register,
    control,
    formState: { errors },
    getValues,
    resetField,
  } = useFormContext();

  // Initialize with one qualification
  const [qualificationId] = useState(Date.now());
  const [submittedQualifications, setSubmittedQualifications] = useState([]);

  // States for each field
  const [degree, setDegree] = useState("");
  const [schoolCollege, setSchoolCollege] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [level, setLevel] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [boardUniversity, setBoardUniversity] = useState("");
  const [cgpaOrPercentage, setCgpaOrPercentage] = useState("");

  // Handle submission of a qualification
  const handleSubmitQualification = () => {
    const values = getValues(`qualifications.${qualificationId}`) || {};

    // Add to submitted qualifications
    setSubmittedQualifications([
      ...submittedQualifications,
      {
        degree: values.degree || degree,
        schoolCollege: values.schoolCollege || schoolCollege,
        startDate: values.startDate || startDate,
        endDate: values.endDate || endDate,
        level: values.level || level,
        fieldOfStudy: values.fieldOfStudy || fieldOfStudy,
        boardUniversity: values.boardUniversity || boardUniversity,
        cgpaOrPercentage: values.cgpaOrPercentage || cgpaOrPercentage,
      },
    ]);

    // Reset fields
    resetField(`qualifications.${qualificationId}.degree`);
    resetField(`qualifications.${qualificationId}.schoolCollege`);
    resetField(`qualifications.${qualificationId}.startDate`);
    resetField(`qualifications.${qualificationId}.endDate`);
    resetField(`qualifications.${qualificationId}.level`);
    resetField(`qualifications.${qualificationId}.fieldOfStudy`);
    resetField(`qualifications.${qualificationId}.boardUniversity`);
    resetField(`qualifications.${qualificationId}.cgpaOrPercentage`);

    // Clear local state
    setDegree("");
    setSchoolCollege("");
    setStartDate("");
    setEndDate("");
    setLevel("");
    setFieldOfStudy("");
    setBoardUniversity("");
    setCgpaOrPercentage("");
  };

  // Render preview of a qualification
  const getPreview = (qualification) => {
    const {
      degree = "",
      schoolCollege = "",
      startDate = "",
      endDate = "",
      level = "",
      fieldOfStudy = "",
      boardUniversity = "",
      cgpaOrPercentage = "",
    } = qualification;

    return (
      <Card key={Date.now()} variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">{degree}</Typography>
          <Typography variant="body2">
            <strong>School/College:</strong> {schoolCollege}
          </Typography>
          <Typography variant="body2">
            <strong>Start Date:</strong>{" "}
            {startDate ? new Date(startDate).toLocaleDateString() : "N/A"}
          </Typography>
          <Typography variant="body2">
            <strong>End Date:</strong>{" "}
            {endDate ? new Date(endDate).toLocaleDateString() : "N/A"}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Academic Qualifications
      </Typography>

      <Box sx={{ border: "1px solid #ddd", p: 2, mb: 2, borderRadius: "5px" }}>
        <label>
          Level of Qualification:
          <Controller
            name={`qualifications.${qualificationId}.level`}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Level of Qualification"
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.qualifications?.[qualificationId]?.level && (
            <span>{errors.qualifications[qualificationId].level.message}</span>
          )}
        </label>

        <label>
          Degree / Diploma / Certification:
          <Controller
            name={`qualifications.${qualificationId}.degree`}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Degree/Diploma/Certification"
                value={degree}
                onChange={(e) => {
                  setDegree(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.qualifications?.[qualificationId]?.degree && (
            <span>{errors.qualifications[qualificationId].degree.message}</span>
          )}
        </label>
        <label>
          Field of Study:
          <Controller
            name={`qualifications.${qualificationId}.fieldOfStudy`}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Field of Study"
                value={fieldOfStudy}
                onChange={(e) => {
                  setFieldOfStudy(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.qualifications?.[qualificationId]?.fieldOfStudy && (
            <span>
              {errors.qualifications[qualificationId].fieldOfStudy.message}
            </span>
          )}
        </label>

        <label>
          School / College:
          <Controller
            name={`qualifications.${qualificationId}.schoolCollege`}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="School/College"
                value={schoolCollege}
                onChange={(e) => {
                  setSchoolCollege(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.qualifications?.[qualificationId]?.schoolCollege && (
            <span>
              {errors.qualifications[qualificationId].schoolCollege.message}
            </span>
          )}
        </label>
        <label>
          Board/University:
          <Controller
            name={`qualifications.${qualificationId}.boardUniversity`}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Board/University"
                value={boardUniversity}
                onChange={(e) => {
                  setBoardUniversity(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.qualifications?.[qualificationId]?.boardUniversity && (
            <span>
              {errors.qualifications[qualificationId].boardUniversity.message}
            </span>
          )}
        </label>

        <label>
          Start Date:
          <Controller
            name={`qualifications.${qualificationId}.startDate`}
            control={control}
            render={({ field }) => (
              <input
                type="date"
                {...field}
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.qualifications?.[qualificationId]?.startDate && (
            <span>
              {errors.qualifications[qualificationId].startDate.message}
            </span>
          )}
        </label>

        <label>
          End Date:
          <Controller
            name={`qualifications.${qualificationId}.endDate`}
            control={control}
            render={({ field }) => (
              <input
                type="date"
                {...field}
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.qualifications?.[qualificationId]?.endDate && (
            <span>
              {errors.qualifications[qualificationId].endDate.message}
            </span>
          )}
        </label>

        <label>
          CGPA/Percentage:
          <Controller
            name={`qualifications.${qualificationId}.cgpaOrPercentage`}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="CGPA/Percentage"
                value={cgpaOrPercentage}
                onChange={(e) => {
                  setCgpaOrPercentage(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.qualifications?.[qualificationId]?.cgpaOrPercentage && (
            <span>
              {errors.qualifications[qualificationId].cgpaOrPercentage.message}
            </span>
          )}
        </label>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitQualification}
        >
          Submit Qualification
        </Button>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Qualifications Preview
        </Typography>
        <Grid container spacing={2}>
          {submittedQualifications.map(getPreview)}
        </Grid>
      </Box>
    </Box>
  );
};

export default AcademicStep;
