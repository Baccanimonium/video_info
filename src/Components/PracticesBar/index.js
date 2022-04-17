import React, {useMemo} from 'react';
import { PracticesButtonsContainer, PracticeButton, OpenVersionButton, WrapperButton } from "./styles"

const PracticesBar = ({parentUrl, buttons}) => {
  return (
    <PracticesButtonsContainer>
      <WrapperButton className="display-flex bg-color-greyLight-4">
        {useMemo(() => buttons.map(({ path, text }) => (
          <PracticeButton
            key={text}
            className="current-practice"
            type="button"
            to={`${parentUrl}${path}`}
          >
            {text}
          </PracticeButton>
        )), [buttons, parentUrl])}
      </WrapperButton>
    </PracticesButtonsContainer>
  );
};

export default PracticesBar;
