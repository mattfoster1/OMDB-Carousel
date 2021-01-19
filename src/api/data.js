const getSeasonData = async (args) => {
  const { seriesId, apikey, seasonInt } = args;
  const seasonStr = 'Season=' + seasonInt;

  try {
    let response = await fetch(
      "http://www.omdbapi.com/?i=" + seriesId + '&' + seasonStr + "&apikey=" + apikey
    )
    let data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  }
};

// Needed only as season-specific call does not return show synopsis
const getShowData = async (args) => {
  const { seriesId, apikey } = args;

  try {
    let response = await fetch(
      "http://www.omdbapi.com/?i=" + seriesId + "&apikey=" + apikey
    )
    let data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  }
};

const getEpisodeData = async (args, episodeId) => {
  const { apikey } = args;
  const episodeStr = 'Episode=' + episodeId;

  try {
    let response = await fetch(
      "http://www.omdbapi.com/?i=" + episodeId + '&' + episodeStr + "&apikey=" + apikey
    )
    let data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  }
};

export { getSeasonData, getShowData, getEpisodeData };