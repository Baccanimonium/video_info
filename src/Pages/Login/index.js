import React, {Component, useState} from "react"
import PropTypes from "prop-types"
import StateLessForm from "@/Components/Forms/StateLessForm"
import BsButton from "@/Components/BsButton"
import { AuthRequest } from "@/Store/userObject"
import WithOpenModalWindow from "@/Core/Decorators/WithOpenModalWindow"
import { useNavigate } from "react-router-dom";
import {
  PageContainer, ContentContainer, FormContainer, FormTittle, ImgLogo
} from "./styles"

import { rules, fieldMap } from "./formConfig"

const LOCAL_STORAGE_REMEBER_ME = "LOCAL_STORAGE_REMEBER_ME"

const Login = ({onSubmit, initialRoute, openModalWindow}) => {
  const [value, setValue] = useState({
    storeCredentials: Boolean(localStorage.getItem(LOCAL_STORAGE_REMEBER_ME))
  })
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate();

  const handleInput = (payload) => {
    setValue({ ...value, ...payload } )
  }

  const submitForm = async ({ storeCredentials, login, password }) => {
    try {
      setLoading(true)
      if (login === "user" && password === "11111") {
        localStorage.setItem(LOCAL_STORAGE_REMEBER_ME, String(Boolean(storeCredentials)))
        // const token = await AuthRequest({ login, password })
        const token = "token"

        if (storeCredentials && window.PasswordCredential) {
          await navigator.credentials.store(await new window.PasswordCredential({ id: login, password }))
        }
        onSubmit(token)
        if (initialRoute) {
          navigate(initialRoute)
        } else {
          navigate("/tab")
        }
      } else {
        openModalWindow({
          message: "Couldn't connect to login server. Please contact your administrator"
        })
      }
    } catch (e) {
      openModalWindow({
        message: "Couldn't connect to login server. Please contact your administrator"
      })
      console.log("login error", e)
    } finally {
      setLoading(false)
    }
  }


    return (
      <PageContainer>
        <ImgLogo src="./assets/bg/img-login.jpg" alt="" />
        <ContentContainer>
          <FormContainer className="display-flex fd-column">
            <FormTittle className="fw700">
              Welcome
            </FormTittle>
            <StateLessForm
              fields={fieldMap}
              rules={rules}
              value={value}
              onInput={handleInput}
              onSubmit={submitForm}
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
