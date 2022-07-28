import Input from "@/component_ocean/Components/Inputs/Input"
import CheckBox from "@/component_ocean/Components/Inputs/CheckBox"
import {VALIDATION_RULE_REQUIRED} from "@/component_ocean/Logic/Validator/constants";

export const fieldMap = [
  {
    label: "Username",
    id: "login",
    component: Input,
    placeholder: "Login"
  },
  {
    label: "Password",
    id: "password",
    type: "password",
    component: Input,
    placeholder: "Password"
  },
  {
    id: "storeCredentials",
    inputWrapper: ({ children }) => children,
    component: CheckBox,
    label: "Remember my login"
  }
]

export const rules = {
  login: [{ name: VALIDATION_RULE_REQUIRED}],
  password: [{ name: VALIDATION_RULE_REQUIRED}],
}
