import { useEffect, useState } from "react";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import "./Tab3.css";
import { IonPage } from "@ionic/react";
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent } from '@ionic/react';

import { getDatabase, ref, child, get } from "firebase/database";

function Tab3() {
  const [trailData, setTrailData] = useState([]);
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    const position = await Geolocation.getCurrentPosition();
    var radius = "250";
    var count = "12";
    var url = "https://delightful-mushroom-f6ea281114064ec7a6bd48c7ad707e18.azurewebsites.net/nearby-trails?lat=" + position.coords.latitude.toString() + "&long=" + position.coords.longitude.toString() + "&radius=" + radius + "&count=" + count;
    fetch (url)
      .then((response) => response.json())
      .then((actualTrailData) => {
        console.log(actualTrailData);
        setTrailData(actualTrailData);
        console.log(trailData);
        })
        .catch((err) => {
          console.log(err.message);
        });
  };


  
  useEffect(() => {
    fetchData();
    const dbRef = ref(getDatabase());
    get(child(dbRef, "user :)")).then((snapshot) => {
        if (snapshot.exists()) {
        //   console.log(snapshot.val());
        setUserData(snapshot.val());
        console.log ("user Data:", userData)
        } else {
        console.log("No data available");
        }
        if (userData["fitness"] == "") {
          userData["fitness"] = []
        }
        if (userData["features"] == "") {
          userData["features"] = []
        }
        if (userData["activities"] == "") {
          userData["activities"] = []
        }
        if (userData["routes"] == "") {
          userData["routes"] = []
        }
    }).catch((error) => {
        console.error(error);
    });
  }, []);
  
  return (
  <IonPage>
    <IonContent fullscreen>
      {trailData?.map((item, index) => (
        <IonCard key={index}>
          <img
          src="https://ewscripps.brightspotcdn.com/dims4/default/c76d7fd/2147483647/strip/true/crop/2048x1152+0+192/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F70%2Feb%2F1749bc944b21aa12d751d1ef54a5%2Fscuppernong-nature-trail.jfif" 
          
            /*Math.floor(Math.random() * 10)*/
          
          />
          <IonCardHeader>
            <IonCardTitle>{item.name}</IonCardTitle>
            <IonCardSubtitle>{item.city_name + ", " + item.state_name + ", " + item.country_name}</IonCardSubtitle>
          </IonCardHeader>
          <ul class="subheader">
            <div>
              <li>{item.distance.toFixed(1) + " mi"}</li>
            </div>
            <div>
              <li>{item.route_type}</li>
            </div>
            <div>
              <li>{
                  item.avg_rating
                }</li>
            </div>
          </ul>

          <IonCardContent>
            <IonCardSubtitle>Features</IonCardSubtitle>
            <ul class="features-list">
              {item.features.map((feature, index) => {
                if (userData["features"].includes(feature)) {
                  return <div class="fav-feature"><li key={index}>{feature} {" 💖"}</li></div>
                } else {
                  return <div class="reg-feature"><li key={index}>{feature} {" 🤷"}</li></div>
                }
              })}
            </ul>
            <IonCardSubtitle>Activities</IonCardSubtitle>
            <ul class="activities-list">
              {item.activities.map((activity, index) => {
                  if (userData["activities"].includes(activity)) {
                    return <div class="fav-activity"><li  key={index}>{activity} {" 💖"}</li></div>
                  } else {
                    return <div class="reg-activity"><li  key={index}>{activity} {" 🤷"}</li></div>
                  }
              })}
            </ul>
          </IonCardContent>
        </IonCard> 
      ))}
    </IonContent>
  </IonPage>
  );
}

export default Tab3;