import BsInput from "@/Components/Fields/BsInput"
import BsCheckBox from "@/Components/Fields/BsCheckBox"
import Select from "@/Components/Fields/Select"
import FilterSelect from "@/Core/Refs/FilterSelect"

export const fieldMap = [
  {
    label: "Username",
    id: "login",
    component: BsInput,
    placeholder: "Login"
  },
  {
    label: "Password",
    id: "password",
    type: "password",
    component: BsInput,
    placeholder: "Password"
  },
  {
    id: "storeCredentials",
    inputWrapper: ({ children }) => children,
    component: BsCheckBox,
    label: "Remember my login"
  }
]

export const rules = {
  login: "required",
  password: "required"
}
