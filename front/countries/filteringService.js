function filterData(data, input) {
  return data.filter(element => element.toLowerCase().indexOf(input) === 0);
}

export default function filterValues(currentFilter, nextFilter, filteredData, allData) {
  const normalizedFilter = nextFilter.toLowerCase();

  const dataToFilter = normalizedFilter.indexOf(currentFilter.toLowerCase()) === 0 ? filteredData : allData;

  return filterData(dataToFilter, normalizedFilter);
}
