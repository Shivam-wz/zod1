import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const AddressStep: React.FC = () => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useFormContext();

  // Watch the value of "sameAsPermanentAddress" checkbox
  const sameAsPermanentAddress = watch("sameAsPermanentAddress");

  useEffect(() => {
    if (sameAsPermanentAddress) {
      // Fill current address fields with permanent address values
      setValue("HouseNumber", getValues("HouseNumberBuildingName"));
      setValue("FlatNumberandfloor", getValues("FlatNumberandFloor"));
    } else {
      // Clear current address fields if checkbox is unchecked
      setValue("HouseNumber", "");
      setValue("FlatNumberandfloor", "");
    }
  }, [sameAsPermanentAddress, getValues, setValue]);

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h4>Permanent Address</h4>
      <label>
        House Number / Building Name:
        <input {...register("HouseNumberBuildingName")} />
        {errors.HouseNumberBuildingName && (
          <span>{errors.HouseNumberBuildingName.message}</span>
        )}
      </label>

      <label>
        Flat Number and Floor:
        <input {...register("FlatNumberandFloor")} />
        {errors.FlatNumberandFloor && (
          <span>{errors.FlatNumberandFloor.message}</span>
        )}
      </label>

      <label>
        Country:
        <input {...register("Country")} />
        {errors.Country && <span>{errors.Country.message}</span>}
      </label>

      <label>
        Pincode:
        <input {...register("Pincode")} />
        {errors.Pincode && <span>{errors.Pincode.message}</span>}
      </label>

      <label>
        State:
        <input {...register("State")} />
        {errors.State && <span>{errors.State.message}</span>}
      </label>

      <label>
        District:
        <input {...register("District")} />
        {errors.District && <span>{errors.District.message}</span>}
      </label>

      <label>
        City:
        <input {...register("City")} />
        {errors.City && <span>{errors.City.message}</span>}
      </label>

      <label>
        Taluka:
        <input {...register("Taluka")} />
        {errors.Taluka && <span>{errors.Taluka.message}</span>}
      </label>

      <label>
        Area:
        <input {...register("Area")} />
        {errors.Area && <span>{errors.Area.message}</span>}
      </label>

      <label>
        Landmark:
        <input {...register("landmark")} />
        {errors.landmark && <span>{errors.landmark.message}</span>}
      </label>

      <h4>Current Address</h4>
      <label>
        Same as Permanent Address:
        <input type="checkbox" {...register("sameAsPermanentAddress")} />
      </label>

      {!sameAsPermanentAddress && (
        <>
          <label>
            House Number:
            <input {...register("HouseNumber")} />
            {errors.HouseNumber && <span>{errors.HouseNumber.message}</span>}
          </label>

          <label>
            Flat Number and Floor:
            <input {...register("FlatNumberandfloor")} />
            {errors.FlatNumberandfloor && (
              <span>{errors.FlatNumberandfloor.message}</span>
            )}
          </label>
        </>
      )}
    </form>
  );
};

export default AddressStep;
