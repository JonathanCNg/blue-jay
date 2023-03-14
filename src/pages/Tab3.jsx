import { useEffect, useState } from "react";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import "./Tab3.css";
import { IonPage } from "@ionic/react";
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonIcon, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import { getDatabase, ref, child, get } from "firebase/database";
import { starSharp } from 'ionicons/icons';

// import GetWeather from "../components/GetWeather";

function Tab3() {
  const [trailData, setTrailData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [futureWeather, setFutureWeather] = useState(null);

  const imageUrls = [
    // "https://cdn.onlyinyourstate.com/wp-content/uploads/2017/08/30905077521_fe3abda2f3_ck.jpg", 
    "https://cdn.wallpapersafari.com/60/30/TdLse3.jpg",
    "https://www.nps.gov/npgallery/GetAsset/C8B6E3FB-7D27-4348-A47B-CD0A54E7ACD9/proxy/hires",
    "http://ic.pics.livejournal.com/canyonwalker/33413618/128064/128064_original.jpg",
    "https://www.myopencountry.com/wp-content/uploads/2021/02/Best-hikes-in-joshua-tree-featim.jpg",
    "https://www.mercurynews.com/wp-content/uploads/2021/07/SJM-L-TRAVTOPTEN-080-1-01.jpg?w=525",
    "https://i2.wp.com/photos.smugmug.com/photos/i-6zcZxgr/0/fe236b08/L/i-6zcZxgr-L.jpg",
    "https://rangermac.org/wp-content/uploads/2017/12/Hiking-Trails-Near-Me.jpg",
    "https://i.pinimg.com/originals/f2/aa/7b/f2aa7bcd9a4882e37c867c69e49c9e85.jpg",
    "https://img.grouponcdn.com/deal/oqkofUqPZYMhSUq9K3PV/1z-960x576/v1/c870x524.jpg",
    "https://media.blogto.com/articles/2020818-glen.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70",
    "https://www.travelandleisure.com/thmb/CVMvTJr9vBB4Ts6Ov1DZqZeaZUU=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-denver-colorado-lead-DCOHIKES0720-c18048920bb14781bef0b63e8d0ae33e.jpg",
    "https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/05/shutterstock_693876502.jpg",
    "https://cdn.onlyinyourstate.com/wp-content/uploads/2018/04/extra_large_6324321151efd3870fe6f0105028a9c9.jpg",
    "https://i0.wp.com/www.trailsunblazed.com/wp-content/uploads/2019/05/Iceberg-Lake.jpg?w=2048",
    "https://i.redd.it/fqmdu7cp9vc11.jpg",
    "https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/04/Trail-and-flowers-on-Mount-Sentinel-Missoula-Montana.jpg",
    "https://blog.bozemancvb.com/hubfs/Campaigns/Yellowstone/mount-washburn.jpg",
    "https://www.uncovercolorado.com/wp-content/uploads/2017/10/Eldorado-Canyon-Hiking-Trail-Boulder-1280x720.jpg",
    "https://d2uqfpnktc64mn.cloudfront.net/uploads/ckeditor_assets/pictures/24334/content_lgp.jpg",
    "http://takemytrip.com/wp-content/uploads/2015/11/1050_grinnell.jpg",
    "https://i.pinimg.com/originals/9f/bc/21/9fbc214d403d1cd7115a6e2d95b202b4.jpg",
    "https://www.wainnsiders.com/wp-content/uploads/reflection-lakes-trail-mount-rainier.jpg"
  ]
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

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  const fetchUserData = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "user :)")).then((snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val());
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
        console.error(error.message);
    });
  }

  useEffect(() => {
    if (userData == undefined || userData.length == 0) {
      fetchUserData();
    }
    else {
      console.log ("userData:", userData)
      fetchTrailData();
    }
  }, [userData]);

const getWeather = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    const coords = coordinates.coords;
    const query = `${ coords.latitude },${ coords.longitude}`;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f93eb660b2424258bf5155016210712&q=${ query }`);
    const current_data = await response.json();
    const days = 10;
    const forecast_response = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=f93eb660b2424258bf5155016210712&q=${ query }&days=${ days }`);
    const future_data = await forecast_response.json();
    setCurrentWeather (current_data);
    setFutureWeather (future_data);
}

async function getWeatherCoords (coords) {
  const query = `${ coords[0] },${ coords[1]}`;
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f93eb660b2424258bf5155016210712&q=${ query }`);
  const current_data = await response.json();
  const days = 10;
  const forecast_response = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=f93eb660b2424258bf5155016210712&q=${ query }&days=${ days }`);
  const future_data = await forecast_response.json();
  return future_data;
}

  useEffect(() => {
    if (currentWeather == undefined || futureWeather == undefined)
    {
      getWeather();   
    }
    else {
      // console.log ("currentWeather:", currentWeather);
      // console.log ("futureWeather:", futureWeather);
    }
  }, [currentWeather, futureWeather]);

  const fetchTrailData = async () => {
    const position = await Geolocation.getCurrentPosition();
    var radius = "250";
    var count = "12";
    var url = "https://delightful-mushroom-f6ea281114064ec7a6bd48c7ad707e18.azurewebsites.net/nearby-trails?lat=" + position.coords.latitude.toString() + "&long=" + position.coords.longitude.toString() + "&radius=" + radius + "&count=" + count;
    fetch (url)
      .then((response) => response.json())
      .then((actualTrailData) => {

        var temp_array = [];

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

          var latitude = actualTrailData[i]["latitude"];
          var longitude = actualTrailData[i]["longitude"];
          let weather = getWeatherCoords ([latitude, longitude]);
          temp_array.push (weather);
        }

        setTrailData(actualTrailData);
        setWeatherData(temp_array);
        })
        .catch((error) => {
          console.log(error.message);
        });
  };

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Trails</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Trails</IonTitle>
        </IonToolbar>
      </IonHeader>
      {trailData?.map((item, index) => (
        <IonCard key={index}>
          <img
          src={imageUrls[getRandomInt(0, imageUrls.length)]}
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
                {/* <li>{weatherData[index].current.feelslike_f}</li> */}
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
            <IonCardSubtitle>Weather</IonCardSubtitle>
            <IonCardContent>
              The next day with your ideal weather conditions will be 3 days from now on Monday! ☀️
              {console.log ("Current Weather", currentWeather)}
              {console.log ("Future Weather", futureWeather)}
              {console.log ("WeatherData", weatherData)}
              
              {(currentWeather && futureWeather)
                ?
                <div>
                  <p>{currentWeather.current.condition.text}</p>
                  <p>{currentWeather.current.feelslike_f}</p>
                  {/* Only can see three days into the future */}
                  <p>{futureWeather.forecast.forecastday[0].date} : {futureWeather.forecast.forecastday[0].day.avgtemp_f}</p>            
                  <p>{futureWeather.forecast.forecastday[1].date} : {futureWeather.forecast.forecastday[1].day.avgtemp_f}</p>            
                  <p>{futureWeather.forecast.forecastday[2].date} : {futureWeather.forecast.forecastday[2].day.avgtemp_f}</p>
                </div>
                :
                <div> empty :( </div>
                }
              
            </IonCardContent>
          </IonCardContent>
        </IonCard> 
      ))}
    </IonContent>
  </IonPage>
  );
}

export default Tab3;