import { useEffect, useState } from "react";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import "./Tab3.css";
import { IonPage } from "@ionic/react";
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonIcon } from '@ionic/react';

import { getDatabase, ref, child, get } from "firebase/database";
import { starSharp } from 'ionicons/icons';

function Tab3() {
  const [trailData, setTrailData] = useState([]);
  const [userData, setUserData] = useState([]);
  const featureName = {
    "" : "",
    "beach" : "Beach",
    "rails-trails" : "Rails Trails",
    "paved" : "Paved",
    "lake" : "Lake",
    "strollers" : "Strollers",
    "partially-paved" : "Partially Paved",
    "river" : "River",
    "wildlife" : "Wildlife",
    "wild-flowers" : "Wild Flowers",
    "cave" : "Cave",
    "ada" : "ADA",
    "dogs" : "Dogs Allowed",
    "views" : "Views",
    "city-walk" : "City Walk",
    "kids" : "Kids",
    "dogs-no" : "Dog-Free",
    "hot-springs" : "Hot Springs",
    "forest" : "Forest",
    "waterfall" : "Waterfall",
    "historic-site" : "Historic Site",
    "dogs-leash" : "Dogs on Leash"
  }
  const activityName = {
    "road-biking" : "Road Biking",
    "fly-fishing" : "Fly Fishing",
    "rails-trails" : "Rails Trails",
    "walking" : "Walking",
    "whitewater-kayaking" : "Whitewater Kayaking",
    "rock-climbing" : "Rock Climbing",
    "canoeing" : "Canoeing",
    "off-road-driving" : "Off Road Driving",
    "horseback-riding" : "Horseback Riding",
    "bike-touring" : "Bike Touring",
    "hiking" : "Hiking",
    "backpacking" : "Backpacking",
    "sea-kayaking" : "Sea Kayaking",
    "skiing" : "Skiing",
    "snowboarding" : "Snowboarding",
    "cross-country-skiing" : "Cross Country Skiing",
    "snowshoeing" : "Snowshoeing",
    "nature-trips" : "Nature Trips",
    "fishing" : "Fishing",
    "paddle-sports" : "Paddle Sports",
    "ice-climbing" : "Ice Climbing",
    "birding" : "Birding",
    "mountain-biking" : "Mountain Biking",
    "surfing" : "Surfing",
    "camping" : "Camping",
    "trail-running" : "Trail Running",
    "scenic-driving" : "Scenic Driving"
  }
  const routeName = {
    "loop" : "Loop",
    "out and back" : "Out and Back",
    "point to point" : "Point to Point"
  }
  const fitnessName = {
    "1" : "Beginner",
    "2" : "Intermediate",
    "3" : "Advanced",
    "4" : "Expert",
    "5" : "Extreme",
  }

  const fetchTrailData = async () => {
    const position = await Geolocation.getCurrentPosition();
    var radius = "250";
    var count = "12";
    var url = "https://delightful-mushroom-f6ea281114064ec7a6bd48c7ad707e18.azurewebsites.net/nearby-trails?lat=" + position.coords.latitude.toString() + "&long=" + position.coords.longitude.toString() + "&radius=" + radius + "&count=" + count;
    fetch (url)
      .then((response) => response.json())
      .then((actualTrailData) => {
        console.log(actualTrailData);
        for (var i = 0; i < actualTrailData.length; i++) {
          var trail = actualTrailData[i];
          var trailFeatures = trail["features"];
          var trailActivities = trail["activities"];
          let featureIntersection = trailFeatures.filter(x => userData["features"].includes(x));
          let featureDifferences = trailFeatures.filter(x => !userData["features"].includes(x));
          let activityIntersection = trailActivities.filter(x => userData["activities"].includes(x));
          let activityDifferences = trailActivities.filter(x => !userData["activities"].includes(x));
          actualTrailData[i]["features"] = featureIntersection.concat(featureDifferences);
          actualTrailData[i]["activities"] = activityIntersection.concat(activityDifferences);
        }
        setTrailData(actualTrailData);
        console.log("trailData", trailData);
        })
        .catch((err) => {
          console.log(err.message);
        });
  };


  
  useEffect(() => {
    fetchTrailData();
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
          />
          <IonCardHeader class="coolHeader">
            <IonCardSubtitle>
              <ul id="firstLineDetails">
                {userData["fitness"].includes(item.difficulty_rating.toString()) 
                ? <div class="favorite">
                  <li>{fitnessName[item.difficulty_rating]}</li>
                </div> 
                : <div class="non-favorite">
                  <li>{fitnessName[item.difficulty_rating]}</li>
                </div>}
                <div><li>{" • "}</li></div>
                {userData["routes"].includes(item.route_type)
                ? <div class="favorite">
                  <li>{routeName[item.route_type]}</li>
                </div>
                : <div class="non-favorite">
                  <li>{routeName[item.route_type]}</li>
                </div>}
                <div><li>{" • "}</li></div>
                <li><IonIcon icon={starSharp} color="grey"/>{" " + item.avg_rating.toFixed(1) + " (" + item.num_reviews + ")"}</li>
              </ul>
            </IonCardSubtitle>
            <IonCardTitle>{item.name}</IonCardTitle>
            <IonCardSubtitle>
              {item.distance.toFixed(1) + " miles away in " + item.city_name}
            </IonCardSubtitle>
          </IonCardHeader>
          {() => {if (userData["fitness"].includes(item.difficulty_rating.toString())) {
              return (<div class="favorite"><li>{fitnessName[item.difficulty_rating]}</li></div>)
            } else {
              return (<div class="non-favorite"><li>{fitnessName[item.difficulty_rating]}</li></div>)
            }}}
          <IonCardContent>
            <IonCardSubtitle>Features</IonCardSubtitle>
            <div class="h-scrollable">
              <ul class="features-list">
                {item.features.map((feature, index) => {
                  if (userData["features"].includes(feature)) {
                    return <div class="fav-feature"><li key={index}>{featureName[feature]}</li></div>
                  } else {
                    return <div class="reg-feature"><li key={index}>{featureName[feature]}</li></div>
                  }
                })}
              </ul>
            </div>
            <IonCardSubtitle>Activities</IonCardSubtitle>
            <div class="h-scrollable">
              <ul class="activities-list">
                {item.activities.map((activity, index) => {
                    if (userData["activities"].includes(activity)) {
                      return <div class="fav-activity"><li  key={index}>{activityName[activity]}</li></div>
                    } else {
                      return <div class="reg-activity"><li  key={index}>{activityName[activity]}</li></div>
                    }
                })}
              </ul>
            </div>
          </IonCardContent>
        </IonCard> 
      ))}
    </IonContent>
  </IonPage>
  );
}

export default Tab3;