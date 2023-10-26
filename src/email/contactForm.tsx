import * as React from 'react';
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/components';

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
            <Text>Order placed by {email}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactForm