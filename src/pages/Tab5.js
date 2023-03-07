import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonCheckbox, IonButton } from '@ionic/react';
import React, {useState} from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab5.css';
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";

function Tab5() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);
  
  const onInputTime = (e) => {
    console.log (e)
  }

  const handleInputChange = (e) => {
      const {id , value} = e.target;
      console.log (e.target)

      if(id === "firstName"){
          setFirstName(value);
      }
      if(id === "lastName"){
          setLastName(value);
      }
      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }
      if(id === "confirmPassword"){
          setConfirmPassword(value);
      }

  }

  const handleSubmit  = () => {
      console.log(firstName,lastName,email,password,confirmPassword);
      let obj = {
              firstName : firstName,
              lastName:lastName,
              email:email,
              password:password,
              confirmPassword:confirmPassword,
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
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonItem fill = "outline">
            <IonLabel position="floating">What is your name?</IonLabel>
            <IonInput  type="text" name="" id="lastName" value={lastName}  className="form__input" onIonChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
          </IonItem>

          <IonItem fill = "outline">
            <IonLabel position="floating">What is your age?</IonLabel>
            <IonInput type="number" value={lastName} onChange = {(e) => handleInputChange(e)} id="lastName" placeholder="000"></IonInput>
          </IonItem>    

          <IonItem fill = "outline">
            <IonLabel position="floating">What is your height?</IonLabel>
            <IonInput type="number" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="000"></IonInput>
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
          <IonButton onClick={()=>handleSubmit()} type="submit" class="btn">Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
