import ConditionGroup from "./ConditionUnWrapper/index"
import {ConditionInput} from "./ConditionInput/index"
import CheckboxGroup from "@/Components/Fields/CheckboxGroup";

export const criteriaFields = [
  {
    label: "Нац телекомп",
    id: "national_telecom",
    component: ConditionGroup,
    inputComponent: ConditionInput,
    componentProps: {
      options: [
        { label: "AD CHANNELS" },
        { label: "CHE" },
        { label: "DOM KINO" },
        { label: "DOMASHNIY" },
        { label: "MIR" },
        { label: "MULT" },
      ],
      valueKey: "label",
      labelKey: "label",
    },
    columns: ["AND", "NOT"]
  },
  {
    label: "Рекламодатели",
    id: "advertisers",
    component: ConditionGroup,
    inputComponent: ConditionInput,
    componentProps: {
      options: [
        { label: "TANDER" },
        { label: "ROMASHKA" },
        { label: "LUTIK" },
        { label: "BUKASHKA" },
        { label: "KARAT" },
        { label: "VASYA" },
      ],
      valueKey: "label",
      labelKey: "label",
    },
    columns: ["AND", "NOT"]
  },
  {
    label: "Р/блоки по содержанию",
    id: "adv_blocks",
    component: CheckboxGroup,
    valueKey: "label",
    labelKey: "label",
    filterable: false,
    blockTitle: "Итоги",
    options: [
      { label: "Announcement"},
      { label: "Commercial"},
      { label: "Sponsorship"},
    ]
  },
]