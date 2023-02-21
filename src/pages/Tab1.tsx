import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import GeolocationButton from "../components/GeolocationButton";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Geolocation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Can I have your location uWuUuWuWu 🫣🙃🫣</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="geo-button">
          <GeolocationButton />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
