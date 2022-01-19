import React, {useMemo} from 'react';
import {ButtonsContainer, Button} from "./style"
// todo сейчас этот компонент не используется
// используются только стили


const ButtonsTabBar = ({data, }) => {
  return (
    <ButtonsContainer>
      {useMemo(() => data.map(({id, label, ...props}) => (
        <>

          <Button
            key={id}
          >
            {label}
          </Button>
        </>
      )), [])}
    </ButtonsContainer>
  );
};

export default ButtonsTabBar;
