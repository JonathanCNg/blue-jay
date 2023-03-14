import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
} from "@ionic/react";

import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { useEffect, useState } from "react";
import { SkeletonDashboard } from "../components/SkeletonDashboard";
import { refreshOutline } from "ionicons/icons";
import { CurrentWeather } from "../components/CurrentWeather";
import { getDatabase, ref, child, get } from "firebase/database";

const Tab2 = () => {
    const [currentWeather, setCurrentWeather] = useState(false);
    const [userData, setUserData] = useState(null);
    const [recommendation, setRecommendation] = useState(null);

    const fetchUserData = () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, "user :)"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setUserData(snapshot.val());
                } else {
                    console.log("No data available");
                }
                if (userData["fitness"] == "") {
                    userData["fitness"] = [];
                }
                if (userData["features"] == "") {
                    userData["features"] = [];
                }
                if (userData["activities"] == "") {
                    userData["activities"] = [];
                }
                if (userData["routes"] == "") {
                    userData["routes"] = [];
                }
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    useEffect(() => {
        if (userData == undefined || userData.length == 0) {
            fetchUserData();
        } 
        else {
            getCurrentPosition();
        }
    }, [userData]);

    const getCurrentPosition = async () => {
        setCurrentWeather(false);
        const coordinates = await Geolocation.getCurrentPosition();
        getAddress(coordinates.coords);
    };

    const getAddress = async (coords) => {
        const query = `${coords.latitude},${coords.longitude}`;
        const days = 10;
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=f93eb660b2424258bf5155016210712&q=${ query }&days=${ days }`
        );
        const data = await response.json();
        console.log(data);
        setCurrentWeather(data);

        let temps = [
            data.forecast.forecastday[0].day.maxtemp_f,
            data.forecast.forecastday[1].day.maxtemp_f,
            data.forecast.forecastday[2].day.maxtemp_f,
        ];
        let temp_array = [
          Math.abs(
            userData["temp"] -
            data.forecast.forecastday[0].day.maxtemp_f
          ),
          Math.abs(
            userData["temp"] -
            data.forecast.forecastday[1].day.maxtemp_f
          ),
          Math.abs(
            userData["temp"] -
            data.forecast.forecastday[2].day.maxtemp_f
          ),
        ];
        let index = temp_array.indexOf(Math.min(...temp_array));
        var closest_temp = temps[index].toString();
        if (index === 0) {
          temp_array =
                " today because the weather will be closest to your liking at with a high of " +
                closest_temp +
                "°F! 🎉";
        } else if (index === 1) {
          temp_array =
                " tomorrow because the weather will be closest to your liking at with a high of " +
                closest_temp +
                "°F! 🎉";
        } else {
          temp_array =
                " the day after tomorrow because the weather will be closest to your liking with a high of " +
                closest_temp +
                "°F! 🎉";
        }
        console.log("temp_array", temp_array);
        setRecommendation(temp_array);
        // data.forecast.forecastday
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My City</IonTitle>

                    <IonButtons slot="end">
                        <IonButton onClick={() => getCurrentPosition()}>
                            <IonIcon icon={refreshOutline} color="primary" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense" style={{ marginBottom: "20px" }}>
                    <IonToolbar>
                        <IonTitle size="large">My City</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* <IonRow className="ion-margin-start ion-margin-end ion-justify-content-center ion-text-center">
          <IonCol size="12">
            <h4>Weather Summary</h4>
          </IonCol>
        </IonRow> */}

                <div style={{ marginTop: "-1.5rem" }}>
                    {currentWeather ? (
                        <CurrentWeather currentWeather={currentWeather} />
                    ) : (
                        <SkeletonDashboard />
                    )}
                </div>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>Remember</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Can't make it to the trail? Walking around your
                        neighborhood is a great way to stay fit! ❤️
                        <br/>
                        <br/>
                        Within the next 3 days, the best day for you to walk your city will be
                        {recommendation}
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
