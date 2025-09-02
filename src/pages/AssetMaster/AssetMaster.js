
import { useEffect, useState } from "react";
import { __postApiData } from "../../utils/api";
import { __getCommenApiDataList } from "../../utils/api/commonApi";
import { toast } from "react-toastify";
import { __formatDate } from "../../utils/function";
import LoadingScreen from "../../components/Loading/LoadingScreen";

import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Menu
} from "@mui/material";

export default function AssetMasterForm() {
  const [state, setstate] = useState({
    AssetTypeId: "",
    AssetType: [],
    AssetSection: "Individual", // Set Individual as default
    assetName: "",
    gender: "",
    DOB: "",
    DateOfJoining: "",
    BloodGroup: "",
    ReportingAssetID: "",
    DesignationTypeId: "",
    DepartmentTypeId: "",
    FleetTypeId: "",
    RegistrationNumber: "",
    EngineNumber: "",
    ChassisNumber: "",
    Model: "",
    Make: "",
    Manufacturer: "",
    Year: "",
    Color: "",
    FuelTypeId: "", 
    ParentAssetId: '', 
    FuelType: [],
    DepartmentType: [],
    parentAssetsType: [], 
    IndividualAsset: [],
    VehicleAssets: [],
    error: "",
    success: "",
    isLoading: false,
  
  });

  const {
   
    AssetSection,
    ParentAssetId,
    AssetTypeId, 
    parentAssetsType,
    AssetType,
    assetName,
    gender,
    DOB,
    DateOfJoining,
    BloodGroup,
    ReportingAssetID,
    DesignationTypeId,
    DepartmentTypeId,
    FleetTypeId,
    RegistrationNumber,
    EngineNumber,
    ChassisNumber,
    Model,
    Make,
    Manufacturer,
    Year,
    Color,
    FuelTypeId,
    FuelType,
    DepartmentType,
    IndividualAsset,
    VehicleAssets,
    error,
    success,
    isLoading,
  } = state;


  console.log(IndividualAsset, "IndividualAssetx")

  const updateState = (data) => setstate((prevState) => ({ ...prevState, ...data }));
  // =================RESET=FORM==========================================
  const resetForm = () => {
    updateState({
      AssetTypeId: "",
      AssetType: [],
      AssetSection: "Individual", // Reset to Individual
      assetName: "",
      gender: "",
      DOB: "",
      DateOfJoining: "",
      BloodGroup: "",
      ReportingAssetID: "",
      DesignationTypeId: "",
      DepartmentTypeId: "",
      FleetTypeId: "",
      RegistrationNumber: "",
      EngineNumber: "",
      ChassisNumber: "",
      Model: "",
      Make: "",
      Manufacturer: "",
      Year: "",
      Color: "",
      FuelTypeId: "",
      error: "",
      success: "",
      IsActive: true,
      IndividualAsset: [],
      VehicleAssets: [],
    });
  };
  // ================END=RESET=FORM==========================================

  const fetchData = async (lookupTypes, stateKey, parent_lookup_id) => {
    updateState({ isLoading: true });
    try {
      const data = await __getCommenApiDataList({
        lookup_type: lookupTypes,
        parent_lookup_id: parent_lookup_id || null,
      });



      if (data && Array.isArray(data) && data.length > 0) {
        updateState({ [stateKey]: data, isLoading: false });
      }
      else if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {
        updateState({ [stateKey]: data.data, isLoading: false });
      } else if (data && data.list && Array.isArray(data.list) && data.list.length > 0) {
        updateState({ [stateKey]: data.list, isLoading: false });
      }
      else {
        // console.warn(`No data found for ${stateKey}:`, data);
        updateState({ [stateKey]: [], isLoading: false });
      }
    } catch (error) {
      console.error(`Error fetching ${stateKey}:`, error);
      updateState({ [stateKey]: [], isLoading: false });
    }
  };
 
  const fetchIndividual = () => {
    updateState({ isLoading: true });
    __postApiData("/api/v1/admin/AssetList", {
      "page": 1,
      "limit": 20,
      // "search": ""
      // AssetTypeId: "",
      //"ParentAssetId": "",
    })
   .then((res) => { 
        updateState({ isLoading: false });  
        if (res.response && res.response.response_code === "200") {
          console.log(res.data.list, "res.data.list");
          updateState({
            IndividualAsset: res.data.list || [], 
            // VehicleAssets: res.data.list || [],
            isLoading: false,
          });
        } else {
          const errorMsg =
            res.response?.message || res.message || "Failed to fetch stations";
          updateState({ error: errorMsg, isLoading: false });
          toast.error(errorMsg);
        } 
      })
    .catch((error) => {
      console.error("Error fetching stations:", error);
      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        "An error occurred while fetching stations";
      updateState({ error: errorMsg, isLoading: false });
      toast.error(errorMsg);
    });

  };


  useEffect(() => { 
    fetchData(["fuel_type"], "FuelType");
    fetchData(["asset_type"], "AssetType");
    fetchData(["department_type"], "DepartmentType");
    fetchIndividual();
  }, []);




  const __handleSave = (e) => {
    e.preventDefault();

    if (AssetSection === "Individual") {
      handleIndividualAPI();
    } else if (AssetSection === "Vehicle") {
      handleVehicleAPI();
    }
  };

  const handleIndividualAPI = () => {
    const payload = {
      ...(AssetTypeId ? { AssetTypeId } : { AssetTypeId: "68b5429c7c888e09e7af1cc5" }),
      ParentAssetId: ParentAssetId || null,
      AssetName: assetName,
      Gender: gender,
      DOB: DOB,
      DateOfJoining: DateOfJoining,
      BloodGroup: BloodGroup,
      ReportingAssetID: ReportingAssetID || null,
      DesignationTypeId: DesignationTypeId || null,
      DepartmentTypeId: DepartmentTypeId || null
    };
    updateState({ isLoading: true });
    __postApiData('/api/v1/admin/SaveIndividualAsset', payload)
      .then((res) => {
        // console.log(res, "SaveIndividualAsset")
        if (res.response && res.response.response_code === "200") {
          toast.success("Individual Asset saved successfully!");
          updateState({
            success: "Individual Asset saved successfully!",
            isLoading: false
          });
          resetForm();
        } else {
          const errorMsg = res.response?.message || res.message || "Failed to save individual asset";
          console.error("API Error Response:", res);
          updateState({
            error: errorMsg,
            isLoading: false
          });
          toast.error(errorMsg);
        }
      })
      .catch((error) => {
        console.error("Error saving individual asset:", error);
        const errorMsg = error.response?.data?.message || error.message || "An error occurred while saving the individual asset";
        updateState({
          error: errorMsg,
          isLoading: false
        });
        toast.error(errorMsg);
      });
  };
  // =================handle=Vehicle=API=fn=========================
  const handleVehicleAPI = () => {
    const payload = {
      ...(AssetTypeId ? { AssetTypeId } : { AssetTypeId: "" }),
      ParentAssetId: ParentAssetId || null,
      FleetTypeId: FleetTypeId,
      RegistrationNumber: RegistrationNumber,
      EngineNumber: EngineNumber,
      ChassisNumber: ChassisNumber,
      Model: Model,
      Make: Make,
      Manufacturer: Manufacturer,
      Year: Year,
      Color: Color,
      FuelTypeId: FuelTypeId
    }; 
    __postApiData('/api/v1/admin/SaveVehicleAsset', payload)
      .then((res) => {
        console.log(res, "SaveVehicleAsset");
        if (res.response && res.response.response_code === "200") {
          toast.success("Vehicle Asset saved successfully!");
          updateState({
            success: "Vehicle Asset saved successfully!",
            isLoading: false
          });
          resetForm();
        } else {
          const errorMsg = res.response?.message || res.message || "Failed to save vehicle asset";
          console.error("API Error Response:", res);
          updateState({
            error: errorMsg,
            isLoading: false
          });
          toast.error(errorMsg);
        }
      })
      .catch((error) => {
        console.error("Error saving vehicle asset:", error);
        const errorMsg = error.response?.data?.message || error.message || "An error occurred while saving the vehicle asset";
        updateState({
          error: errorMsg,
          isLoading: false
        });
        toast.error(errorMsg);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTabChange = (tab) => {
    updateState({ AssetSection: tab });
  };


  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Assets Master</h1>
      <div className="flex justify-between items-center">

        <div className="grid  grid-cols-12 gap-6 w-full mx-auto">
          <div className="bg-white py-3 px-3 rounded-xl border  col-span-5">
            <form
              onSubmit={__handleSave}
              className="bg-white  rounded-2xl p-2 w-full max-w-2xl space-y-4"
            >
              <FormControl fullWidth>
                <InputLabel id="assets-master-label">Parent Assets ID</InputLabel>
                <Select
                  MenuProps={{
                    disablePortal: true,
                    disableScrollLock: true,
                  }}
                  labelId="assets-master-label"
                  name="ParentAssetId"
                  value={ParentAssetId}
                  onChange={handleChange}
                  label=" Parent Asset Id"
                >
                  <MenuItem value="">
                    <em>Select Parent Assets id</em>
                  </MenuItem>
                  {AssetType?.map((el) => (
                    <MenuItem
                      key={el._id} value={el._id}
                    >
                      <span className="text"></span>  {el.name || ""}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* <FormControl fullWidth>
                <InputLabel id="assets-type-id">Asset ID</InputLabel>
                <Select
                  MenuProps={{
                    disablePortal: true,
                    disableScrollLock: true,
                  }}
                  labelId="assets-type-id"
                  name="AssetTypeId"
                  value={AssetTypeId}
                  onChange={handleChange}
                  label="Asset Type*"
                >
                  {AssetType?.map((el) => (
                    <MenuItem key={el.id} value={el.id}>
                      {el?.lookup_value || 'No Name'}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}

              {/* Asset Type Selection */}
              <FormControl fullWidth>
                <InputLabel id="assets-section-id">Asset Type</InputLabel>
                <Select
                  MenuProps={{
                    disablePortal: true,
                    disableScrollLock: true,
                  }}
                  labelId="assets-section-id"
                  name="AssetSection"
                  value={AssetSection}
                  onChange={handleChange}
                  label="Asset Type*"
                >
                  <MenuItem value="Individual">Individual</MenuItem>
                  <MenuItem value="Vehicle">Vehicle</MenuItem>
                </Select>
              </FormControl>

              {/* ====================== INDIVIDUAL FIELDS ====================== */}
              {AssetSection === "Individual" && (
                <>
                  <TextField
                    label="Asset Name"
                    name="assetName"
                    value={assetName}
                    onChange={handleChange}
                    fullWidth
                  />
                  <FormControl fullWidth>
                    <InputLabel id="input-gen">Gender</InputLabel>
                    <Select
                      labelId="input-gen"
                      name="gender"
                      label="Gender"
                      value={gender}
                      onChange={handleChange}
                      MenuProps={{
                        disablePortal: true,
                        disableScrollLock: true,
                      }}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    type="date"
                    label="Date of Birth"
                    name="DOB"
                    value={DOB}
                    onChange={handleChange}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />

                  <TextField
                    type="date"
                    label="Date of Joining"
                    name="DateOfJoining"
                    value={DateOfJoining}
                    onChange={handleChange}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />

                  <FormControl fullWidth>
                    <InputLabel>Blood Group</InputLabel>
                    <Select
                      name="BloodGroup"
                      label="Blood Group"
                      value={BloodGroup}
                      onChange={handleChange}
                      MenuProps={{
                        disablePortal: true,
                        disableScrollLock: true,
                      }}
                    >
                      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                        (bg) => (
                          <MenuItem key={bg} value={bg}>
                            {bg}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Reporting Asset</InputLabel>
                    <Select
                      name="ReportingAssetID"
                      label="Reporting Asset"
                      value={ReportingAssetID}
                      onChange={handleChange}
                      MenuProps={{
                        disablePortal: true,
                        disableScrollLock: true,
                      }}
                    >
                      <MenuItem value="1">Asset A</MenuItem>
                      <MenuItem value="2">Asset B</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Designation</InputLabel>
                    <Select
                      name="DesignationTypeId"
                      label="Designation"
                      value={DesignationTypeId}
                      onChange={handleChange}
                      MenuProps={{
                        disablePortal: true,
                        disableScrollLock: true,
                      }}
                    >
                      <MenuItem value="1">Manager</MenuItem>
                      <MenuItem value="2">Engineer</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Department</InputLabel>
                    <Select
                      MenuProps={{
                        disablePortal: true,
                        disableScrollLock: true,
                      }}
                      label="Department"
                      name="DepartmentTypeId"
                      value={DepartmentTypeId}
                      onChange={handleChange}
                    >{DepartmentType?.map((el) => (
                      <MenuItem key={el.id} value={el.id}>
                        {el?.lookup_value || 'No Name'}
                      </MenuItem>
                    ))}
                    </Select>
                  </FormControl>
                </>
              )}

              {/* ====================== VEHICLE FIELDS ====================== */}
              {AssetSection === "Vehicle" && (
                <>
                  <FormControl fullWidth>
                    <InputLabel>Fleet Type</InputLabel>
                    <Select
                      name="FleetTypeId"
                      value={null}
                      onChange={handleChange}
                      label="Fleet Type"
                      MenuProps={{
                        disablePortal: true,
                        disableScrollLock: true,
                      }}
                    >

                      <MenuItem value="1">Truck</MenuItem>

                    </Select>
                  </FormControl>

                  <TextField
                    label="Registration Number"
                    name="RegistrationNumber"
                    value={RegistrationNumber}
                    onChange={handleChange}
                    fullWidth
                  />

                  <TextField
                    label="Engine Number"
                    name="EngineNumber"
                    value={EngineNumber}
                    onChange={handleChange}
                    fullWidth
                  />

                  <TextField
                    label="Chassis Number"
                    name="ChassisNumber"
                    value={ChassisNumber}
                    onChange={handleChange}
                    fullWidth
                  />

                  <TextField
                    label="Model"
                    name="Model"
                    value={Model}
                    onChange={handleChange}
                    fullWidth
                  />

                  <TextField
                    label="Make"
                    name="Make"
                    value={Make}
                    onChange={handleChange}
                    fullWidth
                  />

                  <TextField
                    label="Manufacturer"
                    name="Manufacturer"
                    value={Manufacturer}
                    onChange={handleChange}
                    fullWidth
                  />

                  <TextField
                    label="Year"
                    type="number"
                    name="Year"
                    value={Year}
                    onChange={handleChange}
                    fullWidth
                  />

                  <TextField
                    label="Color"
                    name="Color"
                    value={Color}
                    onChange={handleChange}
                    fullWidth
                  />

                  <FormControl fullWidth>
                    <InputLabel>Fuel Type</InputLabel>
                    <Select
                      name="FuelTypeId"
                      value={FuelTypeId}
                      onChange={handleChange}
                      label="Fuel Type"
                      MenuProps={{
                        disablePortal: true,
                        disableScrollLock: true,
                      }}
                    >
                      {FuelType?.map((el) => (
                        <MenuItem key={el.id} value={el.id}>
                          {el?.lookup_value || 'No Name'}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </>
              )}

              {/* Submit */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full"
              >
                Submit
              </Button>
            </form>
          </div>

          <div className="bg-white pb-2 rounded-lg  col-span-7 border">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse">
                <thead>
                  <tr className=" text-white text-left rounded-t-2xl" >
                    {AssetSection === "Individual" ? (
                      <>
                        <th className="px-1 text-center ps-3 py-2 text-[12px] bg-[#525fe1]" style={{ borderRadius: '7px 0 0 0' }}>Parent Asset ID</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Asset Name</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Gender</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Designation</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Date_of_Birth</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Date_of_Joining</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Blood Group</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Reporting Asset</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Designation</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]" >Department</th>
                         <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Created_At </th>
                          <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]" style={{ borderRadius: '0 7px  0 0' }}>Updated_At</th>
                      </>
                    ) : (
                      <>
                        <th className="px-1 text-center ps-3 py-2 text-[12px] bg-[#525fe1]" style={{ borderRadius: '7px 0 0 0' }}>Parent Asset ID</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Registration No.</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Engine No.</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Chassis No.</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Model</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Make</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Manufacturer</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Year</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Color</th>
                        <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1] " style={{ borderRadius: '0 7px  0 0' }}>Fuel Type</th>
                      </>
                    )}
                  </tr>
                </thead> 
                <tbody> 

                  {AssetSection === "Individual" ? (
                    isLoading ? (
                      <table width={"100%"} height={"100%"}>
                        <tr>
                          <td>
                            <LoadingScreen />
                          </td>
                        </tr>
                      </table>
                    ) : (
                      IndividualAsset?.map((el, index) => (
                        <tr key={el._id} className={`${index % 2 === 0 ? " bg-white" : "bg-[#f2f3fc]"
                          } hover:bg-gray-100 transition`}>
                          <td className="px-1 text-center py-2 ps-2">{el.AssetTypeId.lookup_value || ''}</td>
                          {/* <td className="px-1 text-center py-2">{el.AssetTypeId._id || ''}</td> */}
                          <td className="px-1 text-center py-2">{el.AssetName || ''}</td>
                          <td className="px-1 text-center py-2">{el.Gender || ''}</td>
                          <td className="px-1 text-center py-2">{el.designation || ''}</td>
                          <td className="px-1 text-center py-2">{__formatDate(el.DOB) || ''}</td>
                          <td className="px-1 text-center py-2">{__formatDate(el.DateOfJoining) || ''}</td>
                          <td className="px-1 text-center py-2">{el.BloodGroup || ''}</td>
                          <td className="px-1 text-center py-2">{el.ReportingAssetID || ''}</td>
                          <td className="px-1 text-center py-2">{el.DesignationTypeId || ''}</td>
                          <td className="px-1 text-center py-2">{el.DepartmentTypeId?.lookup_value || ''}</td>
                          <td className="px-1 text-center py-2">{__formatDate(el.createdAt) || ''}</td>
                          <td className="px-1 text-center py-2">{__formatDate(el.updatedAt) || ''}</td>
                        </tr>
                      )
                      )
                    ) 
                  ) : (
                    VehicleAssets?.map((el) => (
                      <tr key={el.id} className="border-b hover:bg-gray-100">
                          <td className="px-1 text-center py-2">test</td>
                        {/* <td className="px-1 text-center py-2">{el.parentAssetId || ''}</td>
                        <td className="px-1 text-center py-2">{el.RegistrationNumber || ''}</td>
                        <td className="px-1 text-center py-2">{el.EngineNumber || ''}</td>
                        <td className="px-1 text-center py-2">{el.ChassisNumber || ''}</td>
                        <td className="px-1 text-center py-2">{el.Model || ''}</td>
                        <td className="px-1 text-center py-2">{el.Make || ''}</td>
                        <td className="px-1 text-center py-2">{el.Manufacturer || ''}</td>
                        <td className="px-1 text-center py-2">{el.Year || ''}</td>
                        <td className="px-1 text-center py-2">{el.Color || ''}</td>
                        <td className="px-1 text-center py-2">{el.FuelType || ''}</td> */}
                      </tr>
                    ))
                  )}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


