import { IMessage } from "minimal-chatbot";


const messages: IMessage[] = [
  {
    id: "about",
    body: "I am a chatbot, I am here to help you.",
    sender: "bot",
    options: [
      {
        body: "your services",
        nextMessageId: "services"
      },
      {
        body: "thanks",
        nextMessageId: "thanks"
      },

    ]
  },

  {
    id: "services",
    body: <p>You can access our page in <a href="https://google.com">this link</a> for more informations about our services</p>,
    sender: "bot",
    options: [
      {
        body: "about you",
        nextMessageId: "about"
      },
      {
        body: "thanks",
        nextMessageId: "thanks"
      },
    ]
  },

  {
    id: "thanks",
    body: "Thanks for the interest!",
    sender: "bot"
  }
]

export const firstMessage: IMessage = {
  id: "introduction",
  body: "Hello, how can I help you?",
  sender: "bot",
  options: [
    {
      body: "about you",
      nextMessageId: "about"
    },
    {
      body: "your services",
      nextMessageId: "services"
    },
  ]
}


export default messages;
