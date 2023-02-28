import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
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

          <IonItem>
            <IonLabel>Select Fitness Level</IonLabel>
            <IonSelect placeholder="Make a Selection">
              <IonSelectOption value="beg">Beginner</IonSelectOption>
              <IonSelectOption value="int">Intermediate</IonSelectOption>
              <IonSelectOption value="ad">Advanced</IonSelectOption>
              <IonSelectOption value="ex">Expert</IonSelectOption>
            </IonSelect>
          </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;
