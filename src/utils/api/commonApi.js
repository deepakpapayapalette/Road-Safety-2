import { __postApiData } from "./index"

const __getCommenApiDataList = async ({
  lookup_type,
  parent_lookup_id,
  isShort,
}) => {
  // console.log("__getCommenApiDataList called with:", { lookup_type, parent_lookup_id, isShort });
  
  return __postApiData(`/api/v1/common/lookuplist`, {
    // lookupcodes: lookup_type.join(","),
     lookup_type: lookup_type.join(","),
    parent_lookup_id: parent_lookup_id || null,
  })
    .then(res => {
      // console.log("Raw API response:", res);
      // console.log(res, "res common/lookuplist.on common API")
      if (res.response && res.response.response_code == "200") {
        const list = res.data.map(item => ({
          id: item._id,
          name: item?.lookup_value,
          ...item,
        }))
        // console.log("Processed list:", list);
        return list
      }
      console.log("No valid response, returning empty array");
      return []
    })
    .catch(error => {
      console.error("Error in __getCommenApiDataList:", error);
      return []
    })
}

export { __getCommenApiDataList }
