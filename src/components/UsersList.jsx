import { useFetch } from './useFetch';

export default function UsersList() {
   const footUrl = "/footballers.json"
   const countryUrl = "/countries.json"
   const {data, loading, error } = useFetch(footUrl);
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error}</p>;
    
  function goToF(){
    const { data, loading, error } = useFetch(footUrl);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  }
  function goToC(){
    const { data, loading, error } = useFetch(countryUrl);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  }



  return (
    <ul>
        <button onClick={goToC}>Country</button>
        <button onClick={goToF}>Footballers</button>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
