import { useEffect, useState } from "react";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import "./Tab3.css";
import { IonPage } from "@ionic/react";

function Tab3() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const position = await Geolocation.getCurrentPosition();
    var radius = "250";
    var count = "3";
    var url = "https://delightful-mushroom-f6ea281114064ec7a6bd48c7ad707e18.azurewebsites.net/nearby-trails?lat=" + position.coords.latitude.toString() + "&long=" + position.coords.longitude.toString() + "&radius=" + radius + "&count=" + count;

    fetch (url)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
  <IonPage>
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Trail ID</th>
            <th>Name</th>
            <th>Area Name</th>
            <th>City Name</th>
            <th>State Name</th>
            <th>Country Name</th>
            {/* <th>Geoloc</th> */}
            <th>Popularity</th>
            <th>Elevation Gain</th>
            <th>Difficulty Rating</th>
            <th>Route Type</th>
            {/* <th>Visitor Usage</th> */}
            <th>Average Rating</th>
            <th>Number of Reviews</th>
            <th>Features</th>
            <th>Activities</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{item.trail_id}</td>
            <td>{item.name}</td>
            <td>{item.area_name}</td>
            <td>{item.city_name}</td>
            <td>{item.state_name}</td>
            <td>{item.country_name}</td>
            {/* <td>{item._geoloc}</td> */}
            <td>{item.popularitylengt}h</td>
            <td>{item.elevation_gain}</td>
            <td>{item.difficulty_rating}</td>
            <td>{item.route_type}</td>
            {/* <td>{item.visitor_usage}</td> */}
            <td>{item.avg_rating}</td>
            <td>{item.num_reviews}</td>
            <td>{item.features}</td>
            <td>{item.activities}</td>
            <td>{item.units}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </IonPage>
  );
}

export default Tab3;