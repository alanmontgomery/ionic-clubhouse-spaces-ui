import { IonButton, IonButtons, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { bulb, exitOutline, micOutline, personOutline } from "ionicons/icons";
import { useStoreState } from "pullstate";
import { PeopleStore } from "../store";
import { getAllPeople } from "../store/Selectors";

import styles from "./TalkModal.module.css";

export const TalkModal = ({ dismiss, talk, category, speakers }) => {

  const people = useStoreState(PeopleStore, getAllPeople);

	return (

    <IonPage className="talk-modal">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Talk Room</IonTitle>

          <IonButtons slot="end">
            <IonButton color="primary" onClick={ dismiss }>
              <IonIcon icon={ exitOutline } />
              {/* Leave Room */}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className={ styles.modal }>
        <IonGrid className="ion-padding-start ion-padding-end ion-margin-start ion-margin-end">

          <IonRow>
            <IonCol size="12">
              <div className={ styles.cardTitle }>
                <IonIcon color="white" icon={ bulb } />
                <IonCardSubtitle color="primary">{ category.name } talks</IonCardSubtitle>
              </div>
            </IonCol>
          </IonRow>

          <IonRow className={ styles.talkTitle }>
            <IonCol size="12">
              <h1>{ talk.title }</h1>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <div className={ styles.detailCount }>
                <IonIcon icon={ micOutline } color="primary" />
                <span>{ talk.speakers } Speakers</span>
              </div>
            </IonCol>
          </IonRow>

          <IonRow className={ styles.talkSpeakers }>
            { speakers.map((speaker, index) => {
                
                return (

                  <IonCol className={ styles.speakerContainer }>
                    <div key={ `speaker_${ index }` } className={ `${ styles.talkSpeaker } ${ index === 0 && styles.activeSpeaker }` }>
                      <img src={ speaker.image } alt="avatar" />
                    </div>
                    <p>{ speaker.name.split(" ")[0] }</p>
                </IonCol>
                );
            })}
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <div className={ styles.detailCount }>
                <IonIcon icon={ personOutline } color="primary" />
                <span>{ talk.audience } Audience</span>
              </div>
            </IonCol>
          </IonRow>

          <IonRow className={ styles.talkSpeakers }>
            { [ ...Array(talk.audience)].map((audience, index) => {
                
                return (

                  <IonCol size="3" className={ `${ styles.speakerContainer } ${ styles.audienceContainer }` }>
                    <div key={ `speaker_${ index }` } className={ styles.talkSpeaker }>
                      <img src={ people[Math.floor(Math.random() * 30)].image } alt="avatar" />
                    </div>
                    <p>{ people[Math.floor(Math.random() * 30)].name.split(" ")[0] }</p>
                </IonCol>
                );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
	);
}