import React, { useState } from "react";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PersonalStep: React.FC = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill) {
      append({ skill: newSkill });
      setNewSkill("");
    }
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h4>Personal Information</h4>

      {/* Input fields */}
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && (
          <p style={{ color: "orangered" }}>{errors.firstName.message}</p>
        )}
      </div>
      <div>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && (
          <p style={{ color: "orangered" }}>{errors.lastName.message}</p>
        )}
      </div>
      <div>
        <label>Mother's Name</label>
        <input {...register("motherName")} />
        {errors.motherName && (
          <p style={{ color: "orangered" }}>{errors.motherName.message}</p>
        )}
      </div>
      <div>
        <label>Father's Name</label>
        <input {...register("fatherName")} />
        {errors.fatherName && (
          <p style={{ color: "orangered" }}>{errors.fatherName.message}</p>
        )}
      </div>
      <div>
        <label>Date of Birth</label>
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="yyyy/MM/dd"
            />
          )}
        />
        {errors.dateOfBirth && (
          <p style={{ color: "orangered" }}>{errors.dateOfBirth.message}</p>
        )}
      </div>
      <div>
        <label>Gender</label>
        <select {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p style={{ color: "orangered" }}>{errors.gender.message}</p>
        )}
      </div>
      <div>
        <label>Marital Status</label>
        <select {...register("maritalStatus")}>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
        {errors.maritalStatus && (
          <p style={{ color: "orangered" }}>{errors.maritalStatus.message}</p>
        )}
      </div>
      <div>
        <label>Physically Challenged</label>
        <input type="checkbox" {...register("physicallyChallenged")} />
      </div>
      <div>
        <label>Category</label>
        <input {...register("category")} />
        {errors.category && (
          <p style={{ color: "orangered" }}>{errors.category.message}</p>
        )}
      </div>
      <div>
        <label>Religion</label>
        <input {...register("religion")} />
        {errors.religion && (
          <p style={{ color: "orangered" }}>{errors.religion.message}</p>
        )}
      </div>
      <div>
        <label>Nationality</label>
        <input {...register("nationality")} />
        {errors.nationality && (
          <p style={{ color: "orangered" }}>{errors.nationality.message}</p>
        )}
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && (
          <p style={{ color: "orangered" }}>{errors.email.message}</p>
        )}
      </div>
      <div>
        <label>Contact Number</label>
        <input {...register("contactNumber")} />
        {errors.contactNumber && (
          <p style={{ color: "orangered" }}>{errors.contactNumber.message}</p>
        )}
      </div>
      <div>
        <label>Guardian Name</label>
        <input {...register("guardianName")} />
        {errors.guardianName && (
          <p style={{ color: "orangered" }}>{errors.guardianName.message}</p>
        )}
      </div>
      <div>
        <label>Relation with Guardian</label>
        <input {...register("relationWithGuardian")} />
        {errors.relationWithGuardian && (
          <p style={{ color: "orangered" }}>
            {errors.relationWithGuardian.message}
          </p>
        )}
      </div>
      <div>
        <label>Guardian Contact</label>
        <input {...register("guardianContact")} />
        {errors.guardianContact && (
          <p style={{ color: "orangered" }}>{errors.guardianContact.message}</p>
        )}
      </div>
      <div>
        <label>Guardian Address</label>
        <input {...register("GuardianAddress")} />
        {errors.GuardianAddress && (
          <p style={{ color: "orangered" }}>{errors.GuardianAddress.message}</p>
        )}
      </div>
      <div>
        <label>Skills</label>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
          />
          <button type="button" onClick={handleAddSkill}>
            Add Skill
          </button>
        </div>
        <ul>
          {fields.map((item, index) => (
            <li
              key={item.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {item.skill}
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        {errors.skills && (
          <p style={{ color: "orangered" }}>{errors.skills.message}</p>
        )}
      </div>
    </form>
  );
};

export default PersonalStep;
