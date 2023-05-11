import allData from "../../../public/data.json";
import { getJobCart } from "../MyDb/MyDb";

const filteredData = () => {
  let matchingData = [];

  const preAppliedData = getJobCart();
  for (const jobId in preAppliedData) {
    const getStoredData = allData.find((pd) => pd.id === +jobId);
    matchingData.push(getStoredData);
  }

  return matchingData;
};

export { filteredData };
