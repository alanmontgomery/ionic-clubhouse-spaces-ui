import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import { useStoreState } from 'pullstate';
import { TalkStore } from '../store';
import { getTalks } from '../store/Selectors';
import './Tab1.css';

import { TalkCard } from "../components/TalkCard";
import { useRef } from 'react';

const Tab1 = () => {

  const pageRef = useRef();
  const talks = useStoreState(TalkStore, getTalks);

  return (
    <IonPage ref={ pageRef }>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Rooms</IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={ personOutline } />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonGrid className="ion-padding-start ion-padding-end extra-padding ion-padding-bottom ion-margin-bottom">
          <IonRow>
            <IonCol size="12">
              <IonText color="dark">
                <p className="title">Upcoming</p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <TalkCard upcoming={ true } talk={ talks[0] } pageRef={ pageRef } />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonText color="dark">
                <p className="title">Happening Now</p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              { talks.map((talk, talkIndex) => {

                return talkIndex > 0 && <TalkCard key={ talkIndex } talk={ talk } pageRef={ pageRef } />;
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
