import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";

export default function StationForm() {
  const [formData, setFormData] = useState({
    stationId: "",
    parentStationId: "",
    stationType: "",
    stationName: "",
    address1: "",
    address2: "",
    postalCode: "",
    city: "",
    geoLocation: "",
    createdOn: "",
  });

  const stationIds = ["ST001", "ST002", "ST003"];
  const parentStationIds = ["PST001", "PST002", "PST003"];
  const stationTypes = ["Head Office", "Regional Office", "Depot"];
  const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto "> 
      {/* Left Side Form */}
      <div className="bg-white p-3 rounded-xl shadow-md space-y-4 ">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Station Form</h2>

        {/* Station ID Select */}
        <TextField
        sx={{ display: 'none' }}
          select
          label="Station ID"
          name="stationId"
          value={formData.stationId}
          onChange={handleChange}
          fullWidth
            SelectProps={{
            MenuProps: {
              disablePortal: true,
              disableScrollLock: true,
            },}}
        >
          {stationIds.map((id) => (
            <MenuItem key={id} value={id}>
              {id}
            </MenuItem>
          ))}
        </TextField>

        {/* Parent Station ID Select */}
        <TextField
          select
          label="Parent Station ID"
          name="parentStationId"
          value={formData.parentStationId}
          onChange={handleChange}
          fullWidth

              SelectProps={{
            MenuProps: {
              disablePortal: true,
              disableScrollLock: true,
            },
          }}
        >
          {parentStationIds.map((id) => (
            <MenuItem key={id} value={id}>
              {id}
            </MenuItem>
          ))}
        </TextField>

        {/* Station Type Select */}
        <TextField
        
          label="Station Type"
          name="stationType"
          value={formData.stationType}
          onChange={handleChange}
          fullWidth
        />
    

        <TextField
          label="Station Name"
          name="stationName"
          value={formData.stationName}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Address 1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Address 2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Postal Code"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          fullWidth
        />

        {/* City Select */}
        <TextField
          select
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          fullWidth
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="GeoLocation"
          name="geoLocation"
          value={formData.geoLocation}
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
      {/* Right Side Preview */}
      <div className="bg-white p-3 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Preview</h2>
        <div className="space-y-5 text-sm">
          {/* <p><span className="text-gray-500">Station ID:</span> <span className="text-gray-900">{formData.stationId || "-"}</span></p> */}
          <p><span className="text-gray-500">Parent Station ID:</span> <span className="text-gray-900">{formData.parentStationId || "-"}</span></p>
          <p><span className="text-gray-500">Station Type:</span> <span className="text-gray-900">{formData.stationType || "-"}</span></p>
          <p><span className="text-gray-500">Station Name:</span> <span className="text-gray-900">{formData.stationName || "-"}</span></p>
          <p><span className="text-gray-500">Address 1:</span> <span className="text-gray-900">{formData.address1 || "-"}</span></p>
          <p><span className="text-gray-500">Address 2:</span> <span className="text-gray-900">{formData.address2 || "-"}</span></p>
          <p><span className="text-gray-500">Postal Code:</span> <span className="text-gray-900">{formData.postalCode || "-"}</span></p>
          <p><span className="text-gray-500">City:</span> <span className="text-gray-900">{formData.city || "-"}</span></p>
          <p><span className="text-gray-500">GeoLocation:</span> <span className="text-gray-900">{formData.geoLocation || "-"}</span></p>
          <p><span className="text-gray-500">Created On:</span> <span className="text-gray-900">{formData.createdOn || "-"}</span></p>
        </div>
      </div>
    </div>
  );
}
