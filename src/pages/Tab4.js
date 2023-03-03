import './Tab4.css';
// import handleSubmit from '../handles/handlesubmit-old';
// import { useRef } from 'react';
import { IonPage } from '@ionic/react';
import RegistrationForm from '../components/registrationForm';
  
import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());
get(child(dbRef, "user :)")).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
  
function Tab4() {
  // const dataRef = useRef()
  // const submithandler = (e) => {
  //   e.preventDefault()
  //   handleSubmit(dataRef.current.value)
  //   dataRef.current.value = ""
  // }


  return (
    <IonPage>
      <RegistrationForm />
    </IonPage>
    );
}

export default Tab4;