import * as React from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { toast } from "react-toastify"
import react, { useEffect } from "react"
import { Container } from "../../../components/Container"

export default function EmailConfirm() {
  const router = useRouter()

  const { token } = router.query

  console.log(token)

  useEffect(() => {
    sendToken(token)
  }, [token])

  const sendToken = async (token) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      const { data } = await axios.put(`/api/user/email/${token}`, {}, config)
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.error)
    }
  }

  return (
    <>
      <Container>
          <p>Confirm Email</p>
      </Container>
    </>
  )
}