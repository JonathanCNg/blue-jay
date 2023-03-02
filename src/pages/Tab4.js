import './Tab4.css';
import handleSubmit from '../handles/handlesubmit';
import { useRef } from 'react';
import { IonPage } from '@ionic/react';

function Tab4() {
  const dataRef = useRef()
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
  
  return (
    <IonPage>
    <div className="App">
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form>
    </div>
    </IonPage>
    );
}

export default Tab4;