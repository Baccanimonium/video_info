import styled from "styled-components"
import WithStateFullForm from "@/Core/Decorators/withStateFullForm"
import Form from "@/Components/Forms/index"

const StateFullForm = WithStateFullForm(Form)

export const ContextMenuForm = styled(StateFullForm)`
  padding: 15px;
`

export default StateFullForm
