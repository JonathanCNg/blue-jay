import { useEffect, useState } from "react";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import "./Tab3.css";
import { IonPage } from "@ionic/react";
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent } from '@ionic/react';

function Tab3() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const position = await Geolocation.getCurrentPosition();
    var radius = "250";
    var count = "12";
    var url = "https://delightful-mushroom-f6ea281114064ec7a6bd48c7ad707e18.azurewebsites.net/nearby-trails?lat=" + position.coords.latitude.toString() + "&long=" + position.coords.longitude.toString() + "&radius=" + radius + "&count=" + count;
    console.log (url)
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
    <IonContent fullscreen>
      {data?.map((item, index) => (
        <IonCard key={index}>
          <img alt="Silhouette of mountains" src="https://ewscripps.brightspotcdn.com/dims4/default/c76d7fd/2147483647/strip/true/crop/2048x1152+0+192/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F70%2Feb%2F1749bc944b21aa12d751d1ef54a5%2Fscuppernong-nature-trail.jfif" />
          <IonCardHeader>
            <IonCardTitle>{item.name}</IonCardTitle>
            <IonCardSubtitle>{item.distance.toFixed(1) + " mi"}</IonCardSubtitle>
            <IonCardSubtitle>{item.route_type}</IonCardSubtitle>
            <IonCardSubtitle>{item.city_name}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonCardSubtitle>Features</IonCardSubtitle>
            <ul>
              {item.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <IonCardSubtitle>Activities</IonCardSubtitle>
            <ul>
              {item.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </IonCardContent>
        </IonCard> 
      ))}
    </IonContent>
  </IonPage>
  );
}

export default Tab3;