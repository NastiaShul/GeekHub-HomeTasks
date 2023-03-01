const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchData = ({ url }) => {
   return fetch(`${BASE_URL}/${url}`)
};

export const getUsers = () => {
   const url = "users";
   return fetchData({ url });
};

export const getUser = ({id}) => {
   const url = `users/${id}`;
   return fetchData({ url });
}

export const getPosts = ({id}) => {
   const url = `users/${id}/todos`;
   return fetchData({ url });
}

export const getPost = ({id, postId}) => {
   const url = `users/${id}/todos?id=${postId}`;
   return fetchData({ url });
}
