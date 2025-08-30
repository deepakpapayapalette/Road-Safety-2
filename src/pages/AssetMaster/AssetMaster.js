import React, { useState } from "react";
import { TextField, MenuItem, Radio, RadioGroup, FormControlLabel } from "@mui/material";

export default function AssetMasterForm() {
  const [formData, setFormData] = useState({
    assetId: "",
    assetTypeId: "",
    parentAssetId: "",
    name: "",
    designation: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    createdOn: "",
  });

  const assetTypeIds = ["AT001", "AT002", "AT003"];
  const parentAssetIds = ["PA001", "PA002", "PA003"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 rid-cols-1 gap-6 w-full  mx-auto ">
      
      {/* Left Form */}
      <div className="bg-white p-3  rounded-xl shadow-md space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Asset Master Form</h2>

        <TextField
        sx={{ display: 'none' }}
          label="Asset ID"
          name="assetId"
          value={formData.assetId}
          onChange={handleChange}
          fullWidth
        />

        {/* Asset Type ID - Select */}
        <TextField
            SelectProps={{
            MenuProps: {
              disablePortal: true,
              disableScrollLock: true,
            },}}

          select
          label="Asset Type ID"
          name="assetTypeId"
          value={formData.assetTypeId}
          onChange={handleChange}
          fullWidth
        >
          {assetTypeIds.map((id) => (
            <MenuItem key={id} value={id}>
              {id}
            </MenuItem>
          ))}
        </TextField>

        {/* Parent Asset ID - Select */}
        <TextField
            SelectProps={{
            MenuProps: {
              disablePortal: true,
              disableScrollLock: true,
            },}}
          select
          label="Parent Asset ID"
          name="parentAssetId"
          value={formData.parentAssetId}
          onChange={handleChange}
          fullWidth
        >
          {parentAssetIds.map((id) => (
            <MenuItem key={id} value={id}>
              {id}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          type="date"
          label="Date of Birth"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* Gender Radio */}
        <div>
          <p className="text-gray-700 text-sm mb-1">Gender</p>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>

        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Email Address (optional)"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          type="date"
          label="Created On"
          name="createdOn"
          value={formData.createdOn}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      {/* Right Preview */}
      <div className="bg-white  rounded-xl shadow-md p-3">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Preview</h2>
        <div className="space-y-5 text-sm">
          {/* <p><span className="text-gray-500">Asset ID:</span> <span className="text-gray-900">{formData.assetId || "-"}</span></p> */}
          <p><span className="text-gray-500">Asset Type ID:</span> <span className="text-gray-900">{formData.assetTypeId || "-"}</span></p>
          <p><span className="text-gray-500">Parent Asset ID:</span> <span className="text-gray-900">{formData.parentAssetId || "-"}</span></p>
          <p><span className="text-gray-500">Name:</span> <span className="text-gray-900">{formData.name || "-"}</span></p>
          <p><span className="text-gray-500">Designation:</span> <span className="text-gray-900">{formData.designation || "-"}</span></p>
          <p><span className="text-gray-500">Date of Birth:</span> <span className="text-gray-900">{formData.dob || "-"}</span></p>
          <p><span className="text-gray-500">Gender:</span> <span className="text-gray-900">{formData.gender || "-"}</span></p>
          <p><span className="text-gray-500">Phone:</span> <span className="text-gray-900">{formData.phone || "-"}</span></p>
          <p><span className="text-gray-500">Email:</span> <span className="text-gray-900">{formData.email || "-"}</span></p>
          <p><span className="text-gray-500">Password:</span> <span className="text-gray-900">{formData.password ? "********" : "-"}</span></p>
          <p><span className="text-gray-500">Created On:</span> <span className="text-gray-900">{formData.createdOn || "-"}</span></p>
        </div>
      </div>
    </div>
  );
}
