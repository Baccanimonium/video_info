import React from 'react';
import { PracticesButtonsContainer, PracticeButton, OpenVersionButton, WrapperButton } from "./styles"

const PracticesBar = ({children}) => {
  return (
    <PracticesButtonsContainer>
      <WrapperButton className="display-flex bg-color-greyLight-4">
        <PracticeButton>
          Критерии отбора
        </PracticeButton>
        <PracticeButton className="current-practice">
          Отчеты
        </PracticeButton>
        <PracticeButton>
          Результат
        </PracticeButton>
      </WrapperButton>
      {children}
    </PracticesButtonsContainer>
  );
};

export default PracticesBar;
