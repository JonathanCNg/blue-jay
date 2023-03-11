import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { useEffect, useState } from 'react';
import { SkeletonDashboard } from '../components/SkeletonDashboard';
import { refreshOutline } from 'ionicons/icons';
import { CurrentWeather } from '../components/CurrentWeather';

const Tab2 = () => {

  const [currentWeather, setCurrentWeather] = useState(false);

  useEffect(() => {

    getCurrentPosition();
  }, []);

  const getCurrentPosition = async () => {

    setCurrentWeather(false);
    const coordinates = await Geolocation.getCurrentPosition();
    getAddress(coordinates.coords);
  }

  const getAddress = async (coords) => {

    const query = `${ coords.latitude },${ coords.longitude}`;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f93eb660b2424258bf5155016210712&q=${ query }`);
    
    const data = await response.json();
    console.log(data);
    setCurrentWeather(data);
  }

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

        <IonHeader collapse="condense" style={{marginBottom: '20px'}}>
          <IonToolbar>
            <IonTitle size="large">My City</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* <IonRow className="ion-margin-start ion-margin-end ion-justify-content-center ion-text-center">
          <IonCol size="12">
            <h4>Weather Summary</h4>
          </IonCol>
        </IonRow> */}

        <div style={{marginTop: "-1.5rem"}}>
          {currentWeather ? <CurrentWeather currentWeather={currentWeather} /> : <SkeletonDashboard />}
        </div>

        <IonHeader>Can't make it to the trail? Walking around your neighborhood is a great way to stay fit!</IonHeader>
        <IonContent>The next day with your ideal weather conditions will be 3 days from now on Monday! ☀️</IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;