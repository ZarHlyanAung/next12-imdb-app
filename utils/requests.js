const api_key = process.env.api_key;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${api_key}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  },
};
