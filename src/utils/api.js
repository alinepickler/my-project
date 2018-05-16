const fetchJson = url => fetch(url).then(res => res.json());
const first10 = arr => arr.slice(0, 10);

const BASE = "https://hacker-news.firebaseio.com/v0";

// Items Ids Endpoint https://hacker-news.firebaseio.com/v0/topstories.json
const getItemsIds = () => {
  return fetchJson(`${BASE}/topstories.json`).then(data => first10(data));
};

// Item endpoint https://hacker-news.firebaseio.com/v0/item/8863.json
const getItem = id => {
  return fetchJson(`${BASE}/item/${id}.json`);
};

export const api = {
  getItemsIds,
  getItem
};
