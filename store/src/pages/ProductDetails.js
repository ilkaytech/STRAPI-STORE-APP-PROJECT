import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function ProductDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/products" + id
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <div>
      <h1>{data.data.attributes.name}</h1>
      <h1>{data.data.attributes.price.toLocalString}</h1>
      <h1>{data.data.attributes.details}</h1>
    </div>
  );
}
