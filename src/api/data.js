const getSeriesData = async () => {

  const seriesId = 'tt5024912';
  const apikey = '6b9b4900';

  await fetch("http://www.omdbapi.com/?i=" + seriesId + "&apikey=" + apikey)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        return(result);
      },
      (error) => {
        console.error(error);
        return false;
      }
    )
};

export { getSeriesData };