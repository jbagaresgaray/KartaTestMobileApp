import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import AppDisplay from "../components/molecules/AppDisplay";
import AppHeaderToogle from "../components/molecules/AppHeaderToogle";
import AppOnScreenKeyboard from "../components/molecules/AppOnScreenKeyboard";
import { convertExpFromArabicToRoman } from "../utils/convertArabicToRoman";
import { convertExpFromRomanToArabic } from "../utils/convertRomanToArabic";
import "./Calculator.scss";

const Calculator: React.FC = () => {
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState("");
  const [isRoman, setIsRoman] = useState(false);

  useEffect(() => {
    const _display: any = isRoman
      ? convertExpFromArabicToRoman(display)
      : convertExpFromRomanToArabic(display);

    const _result: any = isRoman
      ? convertExpFromArabicToRoman(result)
      : convertExpFromRomanToArabic(result);

    setResult(_result);
    setDisplay(_display);
  }, [isRoman]);

  const handleOperation = (operation: string) => {
    if (operation === "C") {
      setResult("");
      setDisplay("");
    } else if (operation === "=") {
      let fixedOperation = display.split("×").join("*");
      fixedOperation = fixedOperation.split("÷").join("/");
      fixedOperation = fixedOperation.split(",").join(".");

      const _result = new String(eval(fixedOperation)).toString();
      setResult(_result);
      if (_result !== "undefined") {
        setDisplay(display);
      }
    } else {
      const _display = display + operation;
      const _result = result;
      setResult(_result);
      setDisplay(_display);
    }
  };

  return (
    <IonPage className="Calculator">
      <AppHeaderToogle
        isRoman={isRoman}
        toggleSwitch={() => setIsRoman(!isRoman)}
      />
      <AppDisplay
        state={{
          display,
          result,
        }}
      />
      <IonContent className="Calculator_Content" scroll-y="false">
        <AppOnScreenKeyboard isRoman={isRoman} operation={handleOperation} />
      </IonContent>
      {/* <IonFooter className="Calculator_Content">
        
      </IonFooter> */}
    </IonPage>
  );
};

export default Calculator;
