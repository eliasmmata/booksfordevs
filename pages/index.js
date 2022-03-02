// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import LoginForm from "../components/LoginForm";
import LoginOk from "../components/LoginOk";
import { Footer } from "../components/Footer";
import { Instagram } from "../components/Instagram";
import Script from 'next/script';

export default function Home() {
  const { data: session } = useSession()
  if (!session) {
    return (
      <>
      <Script src="/scripts/instafeed.min.js" strategy="beforeInteractive"></Script>
        <LoginForm />
        <Instagram />
      </>
    )
  }
  return (
    <>
      <Container>
        <LoginOk />
        <Instagram />
        <Footer />
      </Container>
    </>
  )
}
