import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonItem fill = "outline">
            <IonLabel position="floating">What is your name?</IonLabel>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>

          <IonItem fill = "outline">
            <IonLabel position="floating">What is your age?</IonLabel>
            <IonInput type="number" placeholder="000"></IonInput>
          </IonItem>    

          <IonItem fill = "outline">
            <IonLabel position="floating">What is your height?</IonLabel>
            <IonInput type="number" placeholder="000"></IonInput>
          </IonItem>

          <IonItem fill = "outline">
            <IonLabel position="floating">What is your weight?</IonLabel>
            <IonInput type ="number" placeholder="000"></IonInput>
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
