import { IonHeader, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import React, { Dispatch, SetStateAction } from "react";

import "./AppHeaderToogle.scss";

export interface AppHeaderToogleProps
  extends React.ComponentProps<typeof IonToggle> {
  isRoman: boolean;
  toggleSwitch: any;
}

const AppHeaderToogle: React.FC<AppHeaderToogleProps> = (
  props: AppHeaderToogleProps
) => {
  return (
    <IonHeader className="AppHeaderToogle ion-no-border">
      <IonToolbar color="dark">
        <IonTitle />
        <div slot="end">
          <IonToggle
            onIonChange={props.toggleSwitch}
            value={props.isRoman ? "on" : "off"}
          ></IonToggle>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeaderToogle;
