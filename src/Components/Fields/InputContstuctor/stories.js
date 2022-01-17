import React from "react"
import TextEditor from "@/Components/Fields/InputContstuctor/EditButtons/TextEditor"
import HorizontalRender from "@/Components/Fields/InputContstuctor/LayoutHelpers/HorizontalRender"
import OnlyValueRender from "@/Components/Fields/InputContstuctor/LayoutHelpers/OnlyValueRender"
import styled from "styled-components"
import AvatarPreview from "@/Components/Fields/InputContstuctor/PreviewFields/AvatarPreview"
import DeadlineDatePreview from "@/Components/Fields/InputContstuctor/PreviewFields/DeadlineDatePreview"
import PreviewFromArray from "@/Components/Fields/InputContstuctor/PreviewFields/PreviewFromArray"
import PreviewWithoutValue from "@/Components/Fields/InputContstuctor/PreviewFields/PreviewWithoutValue"
import PreviewWithUntils from "@/Components/Fields/InputContstuctor/PreviewFields/PreviewWithUntils"
import SelectPreview from "@/Components/Fields/InputContstuctor/PreviewFields/SelectPreview"
import TextAreaPreview from "@/Components/Fields/InputContstuctor/PreviewFields/TextAreaPreview"
import DatePreview from "@/Components/Fields/InputContstuctor/PreviewFields/DatePreview"
import FieldConstructor from "./index"

const StyleContainer = styled.div`
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
`

export default {
  title: "Components/Fields/InputConstructor/FieldConstructor",
  component: FieldConstructor,
  argTypes: {
    value: {
      description: "Объект или массив данных",
    },
    constructorProps: {
      description: "Объект с конструкторами компонента"
    },
    noDataLabel: {
      description: "Не выводить лабель"
    },
    style: {
      description: "пропс эквивалентый HTML аттрибуту",
    },
    className: {
      description: "пропс эквивалентый HTML аттрибуту",
    },
  }
}

const Template = (args) => (
  <StyleContainer className="display-grid">
    <div className="p-b-30">
      <h3>По умолчанию</h3>
      <div className="p-b-20">
        <FieldConstructor {...args} label="данные" />
      </div>
      <div className="p-b-20">
        <FieldConstructor {...args} label="name" value={["есть данные"]} />
      </div>
    </div>

    <div className="p-b-30">
      <h3>editButton: TextEditor</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ editButton: TextEditor }}
          label="данные"
          value={["есть данные"]}
        />
      </div>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ editButton: TextEditor }}
          label="данные"
        />
      </div>
    </div>

    <div className="p-b-30">
      <h3>layout: HorizontalRender</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ layout: HorizontalRender }}
          label="данные"
          value={["есть данные"]}
        />
        <div className="p-b-20">
          <FieldConstructor
            {...args}
            constructorProps={{ layout: HorizontalRender }}
            label="данные"
          />
        </div>
      </div>
    </div>

    <div className="p-b-30">
      <h3>layout: OnlyValueRender</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ layout: OnlyValueRender }}
          label="данные"
          value={["есть данные"]}
        />
      </div>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ layout: OnlyValueRender }}
          label="данные"
        />
      </div>
    </div>

    <div className="p-b-30">
      <h3>preview: AvatarPreview</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: AvatarPreview }}
          label="данные"
          value={["есть данные"]}
        />
      </div>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: AvatarPreview }}
          label="данные"
        />
      </div>
    </div>

    <div className="p-b-30">
      <h3>preview: DeadlineDatePreview</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: DeadlineDatePreview }}
          label="данные"
          formPayload={{ PLAN_DEADLINE: "03.04.2021" }}
          value={["03.04.2021"]}
        />

      </div>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: DeadlineDatePreview }}
          label="данные"
        />
      </div>
    </div>

    <div className="p-b-30">
      <h3>preview: PreviewFromArray</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: PreviewFromArray }}
          label="данные"
          formPayload={
            { ROLES: [{ ID: 2000, SYS_NAME: "SUPER-ADMIN" },
              { SYS_NAME: "SOCIAL", ID: 23, ID_REF_DATA: 134, ID_TABLE_DATA: 1102 }] }
          }
          value={[{ ID: 2000, SYS_NAME: "SUPER-ADMIN" },
            { SYS_NAME: "SOCIAL", ID: 23, ID_REF_DATA: 134, ID_TABLE_DATA: 1102 }]}
        />

      </div>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: PreviewFromArray }}
          label="данные"
        />
      </div>
    </div>

    <div className="p-b-30">
      <h3>preview: PreviewWithoutValue</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: PreviewWithoutValue }}
          label="данные"
          value={["dddd"]}
        />

      </div>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: PreviewWithoutValue }}
          label="данные"
        />
      </div>
    </div>

    <div className="p-b-30">
      <h3>preview: PreviewWithUntils</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: PreviewWithUntils }}
          label="данные"
          units="часов"
          value={["12"]}
        />

      </div>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          units="часов"
          constructorProps={{ preview: PreviewWithUntils }}
          label="данные"
        />
      </div>
    </div>

    <div className="p-b-30">
      <h3>preview: SelectPreview</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: SelectPreview }}
          label="данные"
          formPayload={[{ SYS_NAME: "DAOR", ID: 1 }, { SYS_NAME: "SEM", ID: 2 }]}
          value={[{ SYS_NAME: "DAOR", ID: 1 }, { SYS_NAME: "SEM", ID: 2 }]}
        />

      </div>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: SelectPreview }}
          label="данные"
        />
      </div>
    </div>

    <div className="p-b-30">
      <h3>preview: TextAreaPreview</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: TextAreaPreview }}
          label="данные"
          value={["SEO-анализ текста от Text.ru - это уникальный сервис, не имеющий аналогов. Возможность подсветки «воды», заспамленности и ключей в тексте позволяет сделать анализ текста интерактивным и легким для восприятия.\n"]}
        />

      </div>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: TextAreaPreview }}
          label="данные"
        />
      </div>
    </div>

    <div className="p-b-30">
      <h3>preview: DatePreview</h3>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: DatePreview }}
          label="данные"
          value={["02.02.2021", "21.02.2021"]}
        />

      </div>
      <div className="p-b-20">
        <FieldConstructor
          {...args}
          constructorProps={{ preview: DatePreview }}
          label="данные"
        />
      </div>
    </div>
  </StyleContainer>
)

export const Default = Template.bind({})
Default.args = {
  constructorProps: {},
  noDataLabel: "no data"
}
