import jsonData from '../data/dataStore.json';

const getData = (query) => {
  const data = jsonData.find((item) => item.hasOwnProperty(query))?.[query];
  console.log(data);
  return data;
};

export default getData;
