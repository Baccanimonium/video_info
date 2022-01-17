import React, { Component } from "react"
import PropTypes from "prop-types"
import StateLessForm from "@/Components/Forms/StateLessForm"
import BsButton from "@/Components/BsButton"
import { AuthRequest } from "@/Store/userObject"
import WithOpenModalWindow from "@/Core/Decorators/WithOpenModalWindow"
import history from "@/history"
import {
  PageContainer, ContentContainer, FormContainer, FormTittle, ImgLogo
} from "./styles"

import { rules, fieldMap } from "./formConfig"

const LOCAL_STORAGE_REMEBER_ME = "LOCAL_STORAGE_REMEBER_ME"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        storeCredentials: Boolean(localStorage.getItem(LOCAL_STORAGE_REMEBER_ME))
      },
      loading: false,
    }
  }

  handleInput = (payload) => {
    this.setState(({ value }) => ({ value: { ...value, ...payload } }))
  }

  submitForm = async ({ storeCredentials, login, password }) => {
    const { onSubmit, initialRoute, openModalWindow } = this.props
    try {
      this.setState({ loading: true })
      localStorage.setItem(LOCAL_STORAGE_REMEBER_ME, String(Boolean(storeCredentials)))
      // const token = await AuthRequest({ login, password })
      const token = "token"

      if (storeCredentials && window.PasswordCredential) {
        await navigator.credentials.store(await new window.PasswordCredential({ id: login, password }))
      }
      onSubmit(token)
      if (initialRoute) {
        history.push(initialRoute)
      } else {
        history.push("/tab")
      }
    } catch (e) {
      openModalWindow({
        message: "Couldn't connect to login server. Please contact your administrator"
      })
      console.log("login error", e)
    } finally {
      this.setState({ loading: false })
    }
  }

  onInput = (payload) => {
    this.setState({ val: payload })
  }

  render() {
    const { state: { value, loading } } = this
    return (
      <PageContainer>
        <ImgLogo src="./assets/bg/img-login.jpg" alt="" />
        <ContentContainer>
          <img
            className="p-b-10"
            src="./assets/icons/logo.svg"
            alt=""
          />

          <FormContainer className="display-flex fd-column">
            <FormTittle className="fw700">
              Welcome
            </FormTittle>
            <StateLessForm
              fields={fieldMap}
              rules={rules}
              value={value}
              onInput={this.handleInput}
              onSubmit={this.submitForm}
            >
              <BsButton
                className="golden btn width-max m-l-a m-r-a m-t-20"
                loading={loading}
                disabled={loading}
                name="Login"
                type="submit"
              >
                Log in
              </BsButton>
            </StateLessForm>
          </FormContainer>
        </ContentContainer>
      </PageContainer>
    )
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  openModalWindow: PropTypes.func.isRequired,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    goBack: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  }),
  initialRoute: PropTypes.string,
}

export default WithOpenModalWindow(Login)
