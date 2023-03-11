import { IonCard, IonCardContent, IonGrid, IonRow, IonText, IonCardTitle } from "@ionic/react";
import { WeatherProperty } from "./WeatherProperty";
export const CurrentWeather = ({currentWeather}) => (

  <IonGrid>
    <IonCard>
      <IonCardContent className="ion-text-center">
      
        <IonText color="primary">
          <h1>{currentWeather.location.region} <span style={{ color: "gray" }}></span></h1>
        </IonText>

        <div className="ion-margin-top">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '10px'}}>
            <img style={{width: "30%"}} alt="condition" src={currentWeather.current.condition.icon.replace("//", "https://")} />
          </div>
          
          <IonText color="dark">
            <h1 style={{fontWeight: "bold"}}>{currentWeather.current.condition.text}</h1>
          </IonText>
          
          <IonText color="medium">
            <p>{new Date(currentWeather.location.localtime).toDateString()}</p>
          </IonText>
        </div>

        <IonCardTitle style={{fontSize: "3rem"}} className="ion-margin-top">{currentWeather.current.temp_f}&#8457;</IonCardTitle>

        <IonGrid className="ion-margin-top">
          <IonRow>
            <WeatherProperty type="wind" currentWeather={currentWeather} />
            <WeatherProperty type="feelsLike" currentWeather={currentWeather} />
          </IonRow>

          <IonRow className="ion-margin-top">
            <WeatherProperty type="indexUV" currentWeather={currentWeather} />
            <WeatherProperty type="pressure" currentWeather={currentWeather} />
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  </IonGrid>
);