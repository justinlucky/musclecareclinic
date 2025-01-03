import { createChatBotMessage, SetState } from 'react-chatbot-kit';

export type ActionProviderType = {
  handleBookAppointment: () => void;
  handleAdvice: () => void;
  handleDefault: () => void;
};

class ActionProvider {
  createChatBotMessage: createChatBotMessage;
  setState: SetState;

  constructor(createChatBotMessage: createChatBotMessage, setStateFunc: SetState) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleBookAppointment = () => {
    const message = this.createChatBotMessage("Sure, I can help you book an appointment. Please provide the details.");
    this.setChatbotMessage(message);
  };

  handleAdvice = () => {
    const message = this.createChatBotMessage("Sure, I can provide advice. What do you need help with?");
    this.setChatbotMessage(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("I'm not sure how to help with that. Can you please provide more details?");
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message: any) => {
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;