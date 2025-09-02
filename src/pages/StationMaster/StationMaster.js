

import { useEffect, useState } from "react";
import { __getApiData, __postApiData } from "../../utils/api";
import { __getCommenApiDataList } from "../../utils/api/commonApi";
import { toast } from "react-toastify"
import { __formatDate } from "../../utils/function";


import {
  TextField,
  MenuItem,
  Button,
  InputLabel,
  Select,
  FormControl,
  Alert,
  CircularProgress,
  Menu
} from "@mui/material";


import { HiDotsVertical } from "react-icons/hi";

import { MdDeleteForever } from "react-icons/md";
import LoadingScreen from "../../components/Loading/LoadingScreen";
export default function StationMaster() {


  const [state, setState] = useState({
    isLoading: false,
    ParentStationId: "",
    StationTypeId: "",
    StationName: "",
    AddressLine1: "",
    AddressLine2: "",
    PostalCode: "",
    CityId: "",
    // CreatedOn: "",
    error: "",
    success: "",
    IsActive: true,
    CityType: [],
    StationType: [], 
    GeoLocation: {
      type: "Point",
      coordinates: ["", ""], 
    },

  parentStationType: [],
  stationList: [],
  })
  // console.log(state.stationList,"__formatDate")



  const {
    isLoading,
    ParentStationId,
    StationTypeId,
    StationName,
    AddressLine1,
    AddressLine2,
    PostalCode,
    CityId,
    // CreatedOn,
    IsActive,
    CityType,
    StationType,
    error,
    success,
    stationList,
    parentStationType
  } = state

  const updateState = (data) => setState((prevState) => ({ ...prevState, ...data }))





  const __handleSave = (e) => {
    e.preventDefault()
    // if (!StationName.trim()) {
    //   updateState({ error: "Station Name is required" });
    //   return;
    // }
    // if (!AddressLine1.trim()) {
    //   updateState({ error: "Address Line 1 is required" });
    //   return;
    // }
    // if (!PostalCode.trim()) {
    //   updateState({ error: "Postal Code is required" });
    //   return;
    // }
    // if (!StationTypeId) {
    //   updateState({ error: "Station Type is required" });
    //   return;
    // }
    // if (!CityId) {
    //   updateState({ error: "City is required" });
    //   return;
    // } 

    const payload = {
      ...(ParentStationId ? { ParentStationId } : { ParentStationId: null }),
      ...(StationTypeId ? { StationTypeId } : { StationTypeId: null }),
      StationName: StationName.trim(),
      AddressLine1: AddressLine1.trim(),
      AddressLine2: AddressLine2.trim() || null,
      PostalCode: PostalCode.trim(),
      ...(CityId ? { CityId } : { CityId: null }),
      GeoLocation: state.GeoLocation,
      IsActive,
    }

    updateState({ isLoading: true })
    __postApiData("/api/v1/admin/SaveStation", payload)
      .then((res) => {
        // console.log("API Response:", res); 

        if (res.response && res.response.response_code === "200") {
          toast.success("Station saved successfully!");
          updateState({
            success: "Station saved successfully!",
            isLoading: false
          });
          // Reset form after successful save
          resetForm();
          //  fetchStations();
        } else {
          const errorMsg = res.response?.message || res.message || "Failed to save station";
          console.error("API Error Response:", res);
          updateState({
            error: errorMsg,
            isLoading: false
          });
          toast.error(errorMsg);
        }
      })
      .catch((error) => {
        console.error("Error saving station:", error);
        console.error("Error details:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status
        });
        const errorMsg = error.response?.data?.message || error.message || "An error occurred while saving the station";
        updateState({
          error: errorMsg,
          isLoading: false
        });
        toast.error(errorMsg);
      }) 
    // setTimeout(() => { 
    //   resetForm();
    // }, 2000); 
  } 

  const fetchData = async (lookupTypes, stateKey, parent_lookup_id) => {
    updateState({ isLoading: true })
    try {
      const data = await __getCommenApiDataList({
        lookup_type: lookupTypes,
        parent_lookup_id: parent_lookup_id || null,
      })

      if (data && data.length > 0) {
        updateState({ [stateKey]: data, isLoading: false });
      }
    } catch (error) {
      console.error(`Error fetching ${stateKey}:`, error);
    }
  }

  const fetchStations = () => {
    updateState({ isLoading: true });
    __postApiData("/api/v1/admin/StationList", { page: 1, limit: 10, search: "" })
      .then((res) => {
        // console.log("  __postApiData Response:", res.d);
        updateState({ isLoading: false }); 
        
        if (res.response && res.response.response_code === "200") {
          updateState({
            stationList: res.data.list || [],
            isLoading: false,
          });
        } else {
          const errorMsg =
            res.response?.message || res.message || "Failed to fetch stations";
          updateState({ error: errorMsg, isLoading: false });
          toast.error(errorMsg);
        }

      })
    // .catch((error) => {
    //   console.error("Error fetching stations:", error);
    //   const errorMsg =
    //     error.response?.data?.message ||
    //     error.message ||
    //     "An error occurred while fetching stations";
    //   updateState({ error: errorMsg, isLoading: false });
    //   toast.error(errorMsg);
    // });

  };
    const fetchStationsParent = () => {
    updateState({ isLoading: true });
    __postApiData("/api/v1/admin/StationList", { })
      .then((res) => {
        // console.log("  __postApiData Response:", res.d);
        updateState({ isLoading: false }); 
        
        if (res.response && res.response.response_code === "200") {
          updateState({
            parentStationType: res.data.list || [],
            isLoading: false,
          });
        } else {
          const errorMsg =
            res.response?.message || res.message || "Failed to fetch stations";
          updateState({ error: errorMsg, isLoading: false });
          toast.error(errorMsg);
        }

      })
    // .catch((error) => {
    //   console.error("Error fetching stations:", error);
    //   const errorMsg =
    //     error.response?.data?.message ||
    //     error.message ||
    //     "An error occurred while fetching stations";
    //   updateState({ error: errorMsg, isLoading: false });
    //   toast.error(errorMsg);
    // });

  };

  useEffect(() => {
    fetchData(["city"], "CityType");
    fetchData(["station_type"], "StationType"); 
    fetchStations();
    fetchStationsParent();
  }, []);


  const resetForm = () => {
    updateState({
      ParentStationId: "",
      StationTypeId: "",
      StationName: "",
      AddressLine1: "",
      AddressLine2: "",
      PostalCode: "",
      CityId: "",
      // CreatedOn: "",
      error: "",
      success: "",
      IsActive: true,
      // GeoLocation: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateState({ [name]: value });
  };

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log(StationType,"StationType");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Station Master</h1>
        {/* <div className="flex gap-2">
          <Button
            variant="outlined"
            onClick={resetForm}
            disabled={isLoading}
          >
            New Station
          </Button>
        </div> */}
      </div>

      {error && (
        <Alert severity="error" onClose={() => updateState({ error: "" })}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" onClose={() => updateState({ success: "" })}>
          {success}
        </Alert>
      )}

      <div className="grid  grid-cols-12 gap-6 w-full mx-auto">  
        <div className="bg-white py-3 px-3 rounded-xl border  col-span-5">
          <form onSubmit={__handleSave} className="space-y-5"> 
             <FormControl fullWidth>
              <InputLabel id="station-type-label">Parent Station ID</InputLabel>
              <Select
                MenuProps={{
                  disablePortal: true,
                  disableScrollLock: true,
                }}
                labelId="station-type-label"
                name="ParentStationId"
                value={ParentStationId || "" }
                onChange={handleChange}
                label="ParentStationId"
                required
              >
                <MenuItem value="">
                  <em>Select Station Type</em>
                </MenuItem>
                {parentStationType?.map((el) => (
                  <MenuItem key={el._id} value={el._id}>
                    {el?.StationName|| el?.lookup_value|| 'No Name'}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> 

            <FormControl fullWidth>
              <InputLabel id="station-type-label">Station Type *</InputLabel>
              <Select
                MenuProps={{
                  disablePortal: true,
                  disableScrollLock: true,
                }}
                labelId="station-type-label"
                name="StationTypeId"
                value={StationTypeId}
                onChange={handleChange}
                label="Station Type *"
                required
              >
                <MenuItem value="">
                  <em>Select Station Type</em>
                </MenuItem>
                {StationType.map((el) => (
                  <MenuItem key={el.id} value={el.id}>
                    {el?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Station Name"
              name="StationName"
              value={StationName}
              onChange={handleChange}
              fullWidth
              required
              placeholder="Enter station name"
            />

            <TextField
              label="Address Line 1"
              name="AddressLine1"
              value={AddressLine1}
              onChange={handleChange}
              fullWidth
              required
              placeholder="Enter address line 1"
            />

            <TextField
              label="Address Line 2"
              name="AddressLine2"
              value={AddressLine2}
              onChange={handleChange}
              fullWidth
              placeholder="Enter address line 2 (optional)"
            />

            <TextField
              label="Postal Code"
              name="PostalCode"
              value={PostalCode}
              onChange={handleChange}
              fullWidth
              required
              placeholder="Enter postal code"
            />

            <FormControl fullWidth>
              <InputLabel id="city-label">City *</InputLabel>
              <Select
                labelId="city-label"
                name="CityId"
                value={CityId}
                onChange={handleChange}
                label="City *"
                required
                MenuProps={{
                  disablePortal: true,
                  disableScrollLock: true,
                }}
              >
                <MenuItem value="">
                  <em>Select City</em>
                </MenuItem>
                {CityType.map((city) => (
                  <MenuItem key={city.id} value={city.id}>
                    {city?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


            <TextField
              label="Latitude"
              value={state.GeoLocation.coordinates[1] || ""}
              onChange={(e) =>
                updateState({
                  GeoLocation: {
                    ...state.GeoLocation,
                    coordinates: [
                      state.GeoLocation.coordinates[0],
                      e.target.value,
                    ],
                  },
                })
              }
              fullWidth
              placeholder="Enter latitude (e.g., 28.6142)"
            />
            <TextField
              label="Longitude"
              value={state.GeoLocation.coordinates[0] || ""}
              onChange={(e) =>
                updateState({
                  GeoLocation: {
                    ...state.GeoLocation,
                    coordinates: [
                      e.target.value,
                      state.GeoLocation.coordinates[1],
                    ],
                  },
                })
              }
              fullWidth
              placeholder="Enter longitude (e.g., 77.2095)"
            />


            <TextField
              type="date"
              label="Created On"
              name="CreatedOn"
              // value={CreatedOn}
              // onChange={handleChange}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Station"}
              {isLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: 'white',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Button>
          </form> 
        </div> 
        {/* Right Side Table */}
        <div className="bg-white pb-2 rounded-xl border col-span-7">
          <div className="overflow-x-auto">
       
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className=" text-white text-left rounded-t-2xl" >
                  <th className="px-1 text-center ps-3 py-2 text-[12px] bg-[#525fe1]" style={{ borderRadius: '7px 0 0 0' }}>Parent Station</th>
                  <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Station Type</th>
                  <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Station Name</th>
                  <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Address Line 1</th>
                  <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Address Line 2</th>
                  <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">Postal Code</th>
                  <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">City</th>
                  <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1]">GeoLocation</th>
                  <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1] ">Created At</th>
                  <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1] " >Updated At</th>
                  <th className="px-1 text-center py-2 text-[12px] bg-[#525fe1] " style={{ borderRadius: '0 7px  0 0' }}>Actions</th>
                </tr>
              </thead> 
              <tbody> 
                  {isLoading ? ( 
                       <table width={"100%"} height={"100%"}>
                        <tr>
                          <td>
                            <LoadingScreen />
                          </td>
                        </tr>
                       </table> 
                    ) : (
                  stationList.map((item, index) => (
                  <tr key={item._id} className={`${index % 2 === 0 ? " bg-white" : "bg-[#f2f3fc]"
                    } hover:bg-gray-100 transition`}> 
                    <td className="px-2 py-2 text-[12px] text-center"> {item.ParentStationId?.StationName || ""} </td>
                    <td className="px-2 py-2 text-[12px]"> {item?.StationTypeId?.lookup_value} </td>
                    <td className="px-2 py-2 text-[12px]"> {item.StationName} </td>
                    <td className="px-2 py-2 text-[12px]"> {item.AddressLine1} </td>
                    <td className="px-2 py-2 text-[12px]"> {item.AddressLine2} </td>
                    <td className="px-2 py-2 text-[12px]"> {item.PostalCode} </td>
                    <td className="px-2 py-2 text-[12px]"> {item?.CityId?.lookup_value || ""} </td>
                    <td className="px-2 py-2 text-[12px]"> {item.GeoLocation.coordinates[0]}, {item.GeoLocation.coordinates[1]} </td>
                    <td className="px-2 py-2 text-[12px]"> {( __formatDate(item.createdAt))} </td>
                    <td className="px-2 py-2 text-[12px]"> {( __formatDate(item.updatedAt))} </td> 
                    <td className="px-2 py-2 text-[16px]"> {<span>
                      <HiDotsVertical className="cursor-pointer" 
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      />
                      <Menu
                        MenuProps={{
                          disablePortal: true,
                          disableScrollLock: true,
                        }}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        // slotProps={{
                        //   list: {
                        //     'aria-labelledby': 'basic-button',
                        //   },
                        // }}
                      >
                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                      </Menu>
                    </span>}
                    </td>
                  </tr>

                ))
                 )} 
               
              </tbody>
            </table>
                 
           
          </div>
        </div> 
      </div>
    </div>
  );
}
