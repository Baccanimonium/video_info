/* eslint-disable react/prop-types */
import React from "react"
import { PermissionsContext } from "@/constants"
import usePermissionConfig from "./index"

export default {
  title: "Core/Hooks/usePermissionConfig",
  component: usePermissionConfig,
  argTypes: {
    config: {
      type: { name: "array", required: false },
      description: "Массив объектов - конфиг для форм",
    },
  }
}

const Template = ({ config }) => {
  const mappedConfig = usePermissionConfig(config)
  return (
    <div>
      <div className="m-b-20">
        Хук фильтрует объекты чей ID_ENTITY_OBJ не найден в разделе прав.
        Объекты без ID_ENTITY_OBJ всегда проходят проверку
      </div>
      <div>
        <h4>w/o permissions</h4>
        {config.map(({ id }) => <span key={id} className="m-r-10">{id}</span>)}
      </div>
      <div>
        <h4>with permissions</h4>
        {mappedConfig.map(({ id }) => <span key={id} className="m-r-10">{id}</span>)}
      </div>
    </div>
  )
}

export const Default = Template.bind({})

Default.args = { config: [
  { id: "TEST1", ID_ENTITY_OBJ: 1 },
  { id: "TEST2", ID_ENTITY_OBJ: 2 },
  { id: "TEST3", ID_ENTITY_OBJ: 3 },
  { id: "TEST4", ID_ENTITY_OBJ: 4 },
  { id: "TEST5", ID_ENTITY_OBJ: 5 },
  { id: "TEST6", ID_ENTITY_OBJ: 6 },
  { id: "BYPASS" },
] }

Default.decorators = [
  (Story) => (
    <PermissionsContext.Provider
      value={{ CHILDRENS: [{ ID_ENTITY_OBJ: 1 }, { ID_ENTITY_OBJ: 2 }, { ID_ENTITY_OBJ: 5 }] }}
    >
      <Story />
    </PermissionsContext.Provider>
  ),
]
