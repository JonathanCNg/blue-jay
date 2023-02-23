import { useEffect, useState } from "react";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import "./Tab4.css";
import { IonPage } from "@ionic/react";

function Tab4() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    // fetch(`https://dummyjson.com/products`)
    const position = await Geolocation.getCurrentPosition();
    var radius = "5";
    var count = "3";
    // https://justcors.com expires at midnight lol
    var cors = "https://justcors.com/tl_85f1dc7/"
    var url = cors + "https://delightful-mushroom-f6ea281114064ec7a6bd48c7ad707e18.azurewebsites.net/nearby-trails?lat=" + position.coords.latitude.toString() + "&long=" + position.coords.longitude.toString() + "&radius=" + radius + "&count=" + count;

    fetch (url)
    // fetch ("https://justcors.com/tl_85f1dc7/https://delightful-mushroom-f6ea281114064ec7a6bd48c7ad707e18.azurewebsites.net/nearby-trails?lat=60.18852&long=-149.63156")
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

export default Tab4;


// // App.js
// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState([]);

//   const fetchData = () => {
//     fetch(`https://dummyjson.com/products`)
//       .then((response) => response.json())
//       .then((actualData) => {
//         console.log(actualData);
//         setData(actualData.products);
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <tbody>
//         <tr>
//           <th>Name</th>
//           <th>Brand</th>
//           <th>Image</th>
//           <th>Price</th>
//           <th>Rating</th>
//         </tr>
//         {data.map((item, index) => (
//           <tr key={index}>
//             <td>{item.title}</td>
//             <td>{item.brand}</td>
//             <td>
//               <img src={item.thumbnail} alt="" height={100} />
//             </td>
//             <td>{item.price}</td>
//             <td>{item.rating}</td>
//           </tr>
//         ))}
//       </tbody>
//     </div>
//   );
// }

// export default App;