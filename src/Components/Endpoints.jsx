import { useEffect, useState } from "react";
import { fetchApiEndpoints } from "../api";
import ExampleResponse from "./ExampleResponse";
import '../App.css'
export default function Endpoints() {
  const [endpoints, setEndpoints] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchApiEndpoints().then((apiEndpoints) => {
      setEndpoints(apiEndpoints.endpoints);
      setIsLoading(false);
    });
  }, []);

  const displayEndpoints = () => {
    return (
      <section id='endpoints'>
        <h1>Available Endpoints:</h1>
        {Object.keys(endpoints).map((endpoint) => {
          return(
            <div className="endpoint" key={endpoint} >
              <h3>{endpoint}</h3>
              <p>{endpoints[endpoint].description}</p>
              {endpoints[endpoint].exampleResponse ? <ExampleResponse text={endpoints[endpoint].exampleResponse}/> : null}
            </div>
          )
        })}
      </section>
    );
  };

  return isLoading ? <h1>Loading</h1> : displayEndpoints();
}