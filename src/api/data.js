const getSeriesData = async () => {

  // TODO: Feed series ID in as argument
  const seriesId = 'tt5024912';
  const apikey = '6b9b4900';
  const seasonInt = 1;
  const seasonStr = 'Season=' + seasonInt;

  return await fetch("http://www.omdbapi.com/?i=" + seriesId + '&' + seasonStr + "&apikey=" + apikey)
    .then(res => res.json())
    .then(
      (result) => {
        return(result);
      },
      (error) => {
        console.error(error);
        return false;
      }
    )
};

export { getSeriesData };