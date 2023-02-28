import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonCheckbox } from '@ionic/react';
import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
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
            <IonLabel>Fitness Level</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true}>
              <IonSelectOption value="beg">Beginner</IonSelectOption>
              <IonSelectOption value="int">Intermediate</IonSelectOption>
              <IonSelectOption value="ad">Advanced</IonSelectOption>
              <IonSelectOption value="ex">Expert</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Favorite Trail Views</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true}>
              <IonSelectOption value="beach">Beach</IonSelectOption>
              <IonSelectOption value="lake">Lake</IonSelectOption>
              <IonSelectOption value="water">Waterfall</IonSelectOption>
              <IonSelectOption value="city">City</IonSelectOption>
              <IonSelectOption value="wild">Wildlife</IonSelectOption>
              <IonSelectOption value="forest">Forest</IonSelectOption>
              <IonSelectOption value="historic">Historic Sites</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>


          <IonItem>
            <IonLabel>Favorite Trail Activites</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true}>
              <IonSelectOption value="Walking">Walking</IonSelectOption>
              <IonSelectOption value="Biking">Biking</IonSelectOption>
              <IonSelectOption value="Kayaking">Kayaking</IonSelectOption>
              <IonSelectOption value="Rock Climbing">Rock Climbing</IonSelectOption>
              <IonSelectOption value="Canoeing">Canoeing</IonSelectOption>
              <IonSelectOption value="Horseback riding">Horseback riding</IonSelectOption>
              <IonSelectOption value="Hiking">Hiking</IonSelectOption>
              <IonSelectOption value="Backpaking">Backpaking</IonSelectOption>
              <IonSelectOption value="Fishing">Fishing</IonSelectOption>
              <IonSelectOption value="Paddle Boarding">Paddle Boarding</IonSelectOption>
              <IonSelectOption value="Bird Watching">Bird Watching</IonSelectOption>
              <IonSelectOption value="Mountain Biking">Mountain Biking</IonSelectOption>
              <IonSelectOption value="Surfing">Surfing</IonSelectOption>
              <IonSelectOption value="Camping">Camping</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Favorite Route Types</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true}>
              <IonSelectOption value="loop">Loop</IonSelectOption>
              <IonSelectOption value="out/back">Out and Back</IonSelectOption>
              <IonSelectOption value="point">Point to Point</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;
