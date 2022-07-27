import React from "react";
import { numbers, operations } from "../../../constants";
import { convertExpFromArabicToRoman } from "../../../utils/convertArabicToRoman";
import { convertExpFromRomanToArabic } from "../../../utils/convertRomanToArabic";
import AppButton from "../../atom/AppButton";

import "./AppOnScreenKeyboard.scss";

export interface AppOnScreenKeyboardProps {
  operation: (e: any) => void;
  isRoman: boolean;
}

const AppOnScreenKeyboard: React.FC<AppOnScreenKeyboardProps> = (
  props: AppOnScreenKeyboardProps
) => {
  const operatorSelected = (operation: string) => {
    props.operation(operation);
  };

  const renderLabel = (char: string): any => {
    if (char === "," || char === "=" || char === "0") {
      return char;
    }
    return props.isRoman
      ? convertExpFromArabicToRoman(char)
      : convertExpFromRomanToArabic(char);
  };

  return (
    <div className="AppOnScreenKeyboard">
      <div className="SafeAreaView AppOnScreenKeyboard_Numbers">
        {numbers.map((row, i) => (
          <div className="AppOnScreenKeyboard_Row" key={i}>
            {row.map((char) => (
              <AppButton
                color="medium"
                key={char}
                label={renderLabel(char)}
                operation={operatorSelected}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="SafeAreaView AppOnScreenKeyboard_Operations">
        {operations.map((char) => (
          <AppButton key={char} label={char} operation={operatorSelected} />
        ))}
      </div>
    </div>
  );
};

export default AppOnScreenKeyboard;
