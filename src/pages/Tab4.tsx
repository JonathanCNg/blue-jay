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
            <IonLabel>Favorite Trail Features</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true}>
              <IonSelectOption value="beach">Beach</IonSelectOption>
              <IonSelectOption value="lake">Lake</IonSelectOption>
              <IonSelectOption value="waterfall">Waterfall</IonSelectOption>
              <IonSelectOption value="city-walk">City</IonSelectOption>
              <IonSelectOption value="wildlife">Wildlife</IonSelectOption>
              <IonSelectOption value="forest">Forest</IonSelectOption>
              <IonSelectOption value="historic-site">Historic Sites</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>


          <IonItem>
            <IonLabel>Favorite Trail Activites</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true}>
              <IonSelectOption value="walking">Walking</IonSelectOption>
              <IonSelectOption value="road-biking">Road biking</IonSelectOption>
              <IonSelectOption value="whitewater-kayaking">Kayaking</IonSelectOption>
              <IonSelectOption value="rock-climbing">Rock Climbing</IonSelectOption>
              <IonSelectOption value="canoeing">Canoeing</IonSelectOption>
              <IonSelectOption value="horseback-riding">Horseback riding</IonSelectOption>
              <IonSelectOption value="hiking">Hiking</IonSelectOption>
              <IonSelectOption value="backpaking">Backpaking</IonSelectOption>
              <IonSelectOption value="fishing">Fishing</IonSelectOption>
              <IonSelectOption value="paddle-sports">Paddle Boarding</IonSelectOption>
              <IonSelectOption value="birding">Bird Watching</IonSelectOption>
              <IonSelectOption value="mountain-biking">Mountain Biking</IonSelectOption>
              <IonSelectOption value="surfing">Surfing</IonSelectOption>
              <IonSelectOption value="camping">Camping</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Favorite Route Types</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true}>
              <IonSelectOption value="loop">Loop</IonSelectOption>
              <IonSelectOption value="out and back">Out and Back</IonSelectOption>
              <IonSelectOption value="point to point">Point to Point</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;
