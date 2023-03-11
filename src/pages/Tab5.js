import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonCheckbox, IonButton } from '@ionic/react';
import React, {useState} from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab5.css';
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";

function Tab5() {
  const [firstName, setFirstName] = useState(null);
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [fitness, setFitness] = useState(null);
  const [days, setDays] = useState(null);
  const [weather, setWeather] = useState(null);
  const [features, setFeatures] = useState(null);
  const [activities, setActivities] = useState(null);
  const [routes, setRoutes] = useState(null);

  const handleInputChange = (e) => {
      const {id , value} = e.target;

      if(id === "firstname"){
          setFirstName(value);
      }
      if(id === "age"){
          setAge(value);
      }      
      if(id === "height"){
          setHeight(value);
      }
      if(id === "weight"){
          setWeight(value);
      }
      if(id === "fitness"){
          setFitness(e.detail.value);
      }
      if(id === "days"){
          setDays(e.detail.value);
      }
      if(id === "weather"){
        setWeather(e.detail.value);
    }
      if(id === "features"){
          setFeatures(e.detail.value);
      }
      if(id === "activities"){
          setActivities(e.detail.value);
      }
      if(id === "routes"){
          setRoutes(e.detail.value);
      }
  }

  const handleSubmit  = () => {
      console.log(firstName, age, height, weight, fitness, days, weather, features, activities, routes);
      let obj = {
              firstName: (firstName ? firstName : ""),
              age: (age ? age : 0),
              height: (height ? height : ""),
              weight: (weight ? weight : 0),
              fitness: (fitness ? fitness : ""),
              days: (days ? days : ""),
              weather: (weather ? weather : ""),
              features: (features ? features :""),
              activities: (activities ? activities : ""),
              routes: (routes ? routes : "")
          }       
      // const newPostKey = push(child(ref(database), 'posts')).key;
      const updates = {};
      // updates['/' + newPostKey] = obj
      updates["user :)"] = obj
      return update(ref(database), updates);
  }
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
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonItem fill = "outline">
            <IonLabel position="floating">What is your name?</IonLabel>
            <IonInput type="text" id="firstname" value={firstName} onIonChange = {(e) => handleInputChange (e)} placeholder="John"/>
          </IonItem>

          <IonItem fill = "outline">
            <IonLabel position="floating">What is your age?</IonLabel>
            <IonInput type="number" id="age" value={age} onIonChange = {(e) => handleInputChange (e)} placeholder="21"/>
          </IonItem>    

          <IonItem fill = "outline">
            <IonLabel position="floating">What is your height?</IonLabel>
            <IonInput type="number" id="height" value={height} onIonChange = {(e) => handleInputChange (e)} placeholder="59"></IonInput>
          </IonItem>

          <IonItem fill = "outline">
            <IonLabel position="floating">What is your weight?</IonLabel>
            <IonInput type="number" id="weight" value={weight} onIonChange = {(e) => handleInputChange (e)} placeholder="150"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Fitness Level</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true} onIonChange = {(ev) => setFitness (ev.detail.value)}>
              <IonSelectOption value="1">Beginner</IonSelectOption>
              <IonSelectOption value="2">Intermediate</IonSelectOption>
              <IonSelectOption value="3">Advanced</IonSelectOption>
              <IonSelectOption value="4">Expert</IonSelectOption>
              <IonSelectOption value="5">Extreme</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Favorite Days to Hike</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true} onIonChange = {(ev) => setDays (ev.detail.value)}>
              <IonSelectOption value="monday">Monday</IonSelectOption>
              <IonSelectOption value="tuesday">Tuesday</IonSelectOption>
              <IonSelectOption value="wednesday">Wednesday</IonSelectOption>
              <IonSelectOption value="thursday">Thursday</IonSelectOption>
              <IonSelectOption value="friday">Friday</IonSelectOption>
              <IonSelectOption value="saturday">Saturday</IonSelectOption>
              <IonSelectOption value="sunday">Sunday</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Favorite Weather Conditions</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true} onIonChange = {(ev) => setDays (ev.detail.value)}>
              <IonSelectOption value="sunny">Sunny</IonSelectOption>
              <IonSelectOption value="cloudy">Cloudy</IonSelectOption>
              <IonSelectOption value="windy">Windy</IonSelectOption>
              <IonSelectOption value="rainy">Rainy</IonSelectOption>
              <IonSelectOption value="stormy">Stormy</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Favorite Trail Features</IonLabel>
            <IonSelect placeholder="Make a Selection" multiple={true} onIonChange = {(ev) => setFeatures (ev.detail.value)}>
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
            <IonSelect placeholder="Make a Selection" multiple={true} onIonChange = {(ev) => setActivities (ev.detail.value)}>
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
            <IonSelect placeholder="Make a Selection" multiple={true} onIonChange = {(ev) => setRoutes (ev.detail.value)}>
              <IonSelectOption value="loop">Loop</IonSelectOption>
              <IonSelectOption value="out and back">Out and Back</IonSelectOption>
              <IonSelectOption value="point to point">Point to Point</IonSelectOption>
              <IonCheckbox slot="end"></IonCheckbox>
            </IonSelect>
          </IonItem>

          <IonButton onClick={()=>handleSubmit()} type="submit" class="btn">Register</IonButton>
     
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
