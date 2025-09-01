import React, { useState } from "react";
import { TextField, MenuItem, Radio, RadioGroup, FormControlLabel, CircularProgress } from "@mui/material";
import { stationDataList } from "../../Data/LocalData";
import { Button } from "bootstrap";

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
      <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">Assets Master</h1>
      <div className="flex justify-between items-center">

    <div className="grid grid-cols-12 gap-6 w-full mx-auto ">
      
      {/* Left Form */}
      <div className="bg-white py-3 px-3 rounded-xl shadow-md  col-span-5">
        {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">Asset Master Form</h2> */}
      <form  className="space-y-5">
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
            {/* <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }} 
            >
 
            </Button> */}
            <div className="flex justify-end space-x-3 mt-2">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Save 
              </button>
              </div>
        </form>
      </div>

      {/* Right Preview */}
            <div className="bg-white py-2 rounded-lg  col-span-7">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm border-collapse">
                        <thead>
                          <tr className=" text-white text-left rounded-t-2xl" >
                            <th className="px-1 text-center ps-3 py-2 text-[12px] bg-indigo-600" style={{ borderRadius: '7px 0 0 0' }}>Parent Asset ID</th>
                            <th className="px-1 text-center py-2 text-[12px] bg-indigo-600">Name</th>
                            <th className="px-1 text-center py-2 text-[12px] bg-indigo-600">Designation</th>
                            <th className="px-1 text-center py-2 text-[12px] bg-indigo-600">Date of Birth</th>
                            <th className="px-1 text-center py-2 text-[12px] bg-indigo-600">Gender</th>
                            <th className="px-1 text-center py-2 text-[12px] bg-indigo-600">Phone Number</th>
                            <th className="px-1 text-center py-2 text-[12px] bg-indigo-600">Email Address</th>
                            <th className="px-1 text-center py-2 text-[12px] bg-indigo-600">Password</th>
                            <th className="px-1 text-center py-2 text-[12px] bg-indigo-600 " style={{ borderRadius: '0 7px  0 0' }}>Created On</th>
                          </tr>
                        </thead>
          
                        <tbody>
                          {stationDataList.map((item, index) => (
                            <tr key={item.id} className={`${index % 2 === 0 ? "bg-[#eeeffc]" : "bg-white"
                              } hover:bg-gray-100 transition`}>
                              <td className="px-2 py-2 text-[12px] text-center"> {item.ParentStationID} </td>
                              <td className="px-2 py-2 text-[12px]"> {item.StationType} </td>
                              <td className="px-2 py-2 text-[12px]"> {item.StationName} </td>
                              <td className="px-2 py-2 text-[12px]"> {item.AddressLine1} </td>
                              <td className="px-2 py-2 text-[12px]"> {item.AddressLine2} </td>
                              <td className="px-2 py-2 text-[12px]"> {item.PostalCode} </td>
                              <td className="px-2 py-2 text-[12px]"> {item.City} </td>
                              <td className="px-2 py-2 text-[12px]"> {item.Coordinates} </td>
                              <td className="px-2 py-2 text-[12px]"> {item.CreatedOn} </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
    </div>

    </div>
    </div>

  );
}
