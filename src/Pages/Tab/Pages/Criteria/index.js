import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import { WithValidationHocRenderPropAdapter } from "@/Core/Decorators/withValidation"
import StateLessForm from "@/Components/Forms/StateLessForm"

import {
  DealConditionWrapper, IndentionConditionForm, Separator, ConditionFormWrapper
} from "@/Pages/Tab/Pages/styles";

import { criteriaFields } from './constants'
import {mainFields} from "@/Pages/Tab/Pages/Reports/constants";

const fieldRules = {}

const Criteria = () => {
  const [value, setValue] = useState({})
  const onSubmit = useCallback(() => console.log("submit"), [])
  return (
    <DealConditionWrapper className="flex-container">
      <IndentionConditionForm>
        <Separator>
          <h2 className="p-b-10">
            Глобальные аттрибуты
          </h2>
          <ConditionFormWrapper>
            <StateLessForm
              value={value}
              fields={mainFields}
              onInput={setValue}
              className="display-contents"
              classNameInputWrapper="styleFormWrapper"
            />
          </ConditionFormWrapper>
        </Separator>

        <Separator>
          <h2 className="p-b-10">
            Критерии отбора
          </h2>
          <ConditionFormWrapper>
            <WithValidationHocRenderPropAdapter
              onInput={setValue}
              value={value}
              rules={fieldRules}
              onSubmit={onSubmit}
            >
              {(props) => (
                <StateLessForm
                  {...props}
                  fields={criteriaFields}
                  className="display-contents"
                  classNameInputWrapper="styleFormWrapper"
                />
              )}
            </WithValidationHocRenderPropAdapter>


          </ConditionFormWrapper>
        </Separator>
      </IndentionConditionForm>
    </DealConditionWrapper>
  );
};

Criteria.propTypes = {

};

export default Criteria;
