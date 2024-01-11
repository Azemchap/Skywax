// 'use client'

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text
} from '@react-email/components';

type contactFormEmailProps = {
  message: string
  username: string
  email: string
}

const ContactForm = ({ message, username, email,  }: contactFormEmailProps) => {




  return (
    <Html>
      <Head />
      <Preview>New order from skywaxfabrics.com website</Preview>
      <Tailwind >
        <Body>
          <Container>
            <Heading>You received an order from {username}</Heading>
            <Hr />
            <Text>{message}</Text>
            <Text>Order placed by {email} </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactForm