import { IonButton } from "@ionic/react";
import React from "react";
import AppText from "../AppText";

import "./AppButton.scss";

export interface AppButtonProps extends React.ComponentProps<typeof IonButton> {
  label: string | JSX.Element;
  operation: (e: any) => void;
}

const AppButton: React.FC<AppButtonProps> = (props: AppButtonProps) => {
  return (
    <IonButton
      className="AppButton"
      expand="full"
      {...props}
      onClick={() => props.operation(props.label)}
    >
      {props.label}
    </IonButton>
  );
};

export default AppButton;
