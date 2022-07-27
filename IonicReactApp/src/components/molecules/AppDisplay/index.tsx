import React from "react";
import "./AppDisplay.scss";

export interface AppDisplayProps {
  state?: {
    display: any;
    result: any;
  };
}

const AppDisplay: React.FC<AppDisplayProps> = (props: AppDisplayProps) => {
  const { state } = props;
  return (
    <div className="AppDisplay">
      <div className="SafeAreaView AppDisplay_SafeAreaView">
        <div className="AppDisplay_Display">{state?.display}</div>
        {state?.result !== "" && (
          <div className="AppDisplay_Result">{state?.result}</div>
        )}
      </div>
    </div>
  );
};

export default AppDisplay;
