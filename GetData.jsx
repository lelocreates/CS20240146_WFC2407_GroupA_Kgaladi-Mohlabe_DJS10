import React from 'react';
import useSWR from 'swr';

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  // Use SWR for data fetching
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  // Handle error and loading states
  if (error) return <div>Error loading data: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Posts</h1>
        {data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p> 
          </div>
        ))}
    </div>
  );
};

export default App;