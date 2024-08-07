import React from "react";
import { useFormContext } from "react-hook-form";

const DocumentStep: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h4>Document Upload</h4>

      {/* Input fields */}
      <div>
        <label>Document Type</label>
        <input {...register("documentType")} />
        {errors.documentType && (
          <p style={{ color: "orangered" }}>{errors.documentType.message}</p>
        )}
      </div>
      <div>
        <label>Document File</label>
        <input type="file" {...register("documentFile")} />
        {errors.documentFile && (
          <p style={{ color: "orangered" }}>{errors.documentFile.message}</p>
        )}
      </div>
    </form>
  );
};

export default DocumentStep;
