const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const newStoriesUrl = `${baseUrl}newstories.json?print=pretty`;

const response = (res) => {
   if (res.ok) {
      return res.json();
   }
   return Promise.reject(`Error ${res.status}`);
};

export const getStoriesIds = async () => {
   return fetch(newStoriesUrl).then(response);
};

export const getData = async (id) => {
   const res = await fetch(`${baseUrl}/item/${id}.json`);
   return response(res);
};
