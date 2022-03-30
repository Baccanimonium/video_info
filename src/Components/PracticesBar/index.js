import React from 'react';
import { PracticesButtonsContainer, PracticeButton, OpenVersionButton } from "./styles"

const PracticesBar = () => {
  return (
    <PracticesButtonsContainer>
      <div className="display-flex">
        <PracticeButton>
          Отчеты
        </PracticeButton>
        <PracticeButton>
          Критерии отбора
        </PracticeButton>
        <PracticeButton>
          Результаты
        </PracticeButton>
      </div>
    </PracticesButtonsContainer>
  );
};

export default PracticesBar;
