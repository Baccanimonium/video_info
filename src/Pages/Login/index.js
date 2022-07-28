import React, {useState} from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";
import {
  PageContainer, ContentContainer, FormContainer, FormTittle, ImgLogo
} from "./styles"

import { AlertWindow } from "@/Components/ModalWindows";
import {WithWithValidationForm} from '@/component_ocean/Components/Forms'

import { rules, fieldMap } from "./formConfig"
import BaseButton from "@/component_ocean/Components/Button";

const LOCAL_STORAGE_REMEBER_ME = "LOCAL_STORAGE_REMEBER_ME"

const Login = ({onSubmit, initialRoute}) => {
  const [error, setError] = useState("")
  const [value, setValue] = useState({
    storeCredentials: Boolean(localStorage.getItem(LOCAL_STORAGE_REMEBER_ME))
  })
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

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
        setError("Couldn't connect to login server. Please contact your administrator")
      }
    } catch (e) {
      setError("Couldn't connect to login server. Please contact your administrator")
      console.log("login error", e)
    } finally {
      setLoading(false)
    }
  }


    return (
      <PageContainer>
        <ImgLogo src="./assets/bg/img-login.jpg" alt="" />
        <AlertWindow
          className="flex flex-col items-center mt-90"
          open={error}
          onClose={() => setError("")}
        >
          <text className="text-center break-words my-auto mx-12">
            {error}
          </text>
          <BaseButton className="bg-color-lightGold color-white w-48 mt-auto mb-8">
            Ок
          </BaseButton>
        </AlertWindow>
        <ContentContainer>
          <FormContainer className="display-flex fd-column">
            <FormTittle className="fw700">
              Welcome
            </FormTittle>
            <WithWithValidationForm
              fields={fieldMap}
              rules={rules}
              value={value}
              onInput={handleInput}
              onSubmit={submitForm}
            >
              <BaseButton
                className="golden sign-up-btn btn m-l-a m-r-a m-t-20"
                loading={loading}
                disabled={loading}
                type="submit"
              >
                Log in
              </BaseButton>
            </WithWithValidationForm>
          </FormContainer>
        </ContentContainer>
      </PageContainer>
    )

}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialRoute: PropTypes.string,
}

export default Login
