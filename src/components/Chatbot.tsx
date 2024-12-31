import { useState } from "react";
import ChatBot, { ChatBotProvider } from "react-chatbotify";

type FlowParams = {
  userInput: string; // User's current input
  injectMessage: (message: string) => Promise<void>; // Function to inject a message into the chat
};

type FlowStep = {
  message: string | ((params: FlowParams) => string);
  path?: string | ((params: FlowParams) => string | undefined | Promise<string | undefined>);
  options?: string[] | ((params: FlowParams) => string[]); // Updated to allow a function that returns string[]
  chatDisabled?: boolean;
  component?: JSX.Element;
  function?: (params: FlowParams) => void;
};

type Flow = {
  [key: string]: FlowStep;
};

const Chatbot = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    contact: "",
    interest: "",
    preferences: [] as string[],
    appointmentDate: "",
    appointmentTime: "",
  });

  const formRef = { current: form }; // Create a reference to access the latest state dynamically

  const chatbotFlow: Flow = {
    start: {
      message: "👋 Hello there! What a pleasure to have you here! What's your name?",
      function: (params) => {
        setForm((prev) => ({ ...prev, name: params.userInput }));
        formRef.current.name = params.userInput; // Update the reference
      },
      path: "ask_age",
    },
    ask_age: {
      message: () => `Nice to meet you, ${formRef.current.name}! 🎉 How old are you?`,
      function: (params) => {
        setForm((prev) => ({ ...prev, age: params.userInput }));
        formRef.current.age = params.userInput; // Update the reference
      },
      path: async (params) => {
        if (isNaN(Number(params.userInput))) {
          await params.injectMessage("❌ Please enter a valid number for your age!");
          return undefined; // Stay on the same step
        }
        return "ask_contact";
      },
    },
    ask_contact: {
      message: "📱 Could you share your contact details?",
      function: (params) => {
        setForm((prev) => ({ ...prev, contact: params.userInput }));
        formRef.current.contact = params.userInput; // Update the reference
      },
      path: "ask_interest",
    },
    ask_interest: {
      message: "What are you interested in? 🤔",
      options: ["Fitness 🏋️‍♂️", "Physiotherapy 💆", "Training 🏃", "Relaxation 🧘", "Others ✍️"],
      function: (params) => {
        setForm((prev) => ({ ...prev, interest: params.userInput }));
        formRef.current.interest = params.userInput; // Update the reference
      },
      path: (params) => {
        if (params.userInput.includes("Others")) {
          return "customQuery";
        }
        return "ask_preferences";
      },
    },
    ask_preferences: {
      message: "✨ Please select your preferences:",
      options: (params) => {
        switch (formRef.current.interest) {
          case "Relaxation 🧘":
            return ["Cupping", "Needle", "Cryotherapy"];
          case "Fitness 🏋️‍♂️":
            return ["Yoga", "Cardio", "Strength Training"];
          case "Physiotherapy 💆":
            return ["Massage", "Chiropractic", "Acupuncture"];
          case "Training 🏃":
            return ["Endurance", "Strength", "Flexibility"];
          default:
            return [];
        }
      },
      function: async (params) => {
        const preferences = params.userInput.split(",").map((pref) => pref.trim());

        if (preferences.length < 1) {
          await params.injectMessage("❌ You must provide at least one preference.");
          return undefined; // Stay on the same step
        }

        setForm((prev) => ({ ...prev, preferences }));
        formRef.current.preferences = preferences; // Update the reference
      },
      path: "ask_appointment_date",
    },
    ask_appointment_date: {
      message: "📅 Please provide a suitable date for your appointment (e.g., YYYY-MM-DD):",
      function: (params) => {
        setForm((prev) => ({ ...prev, appointmentDate: params.userInput }));
        formRef.current.appointmentDate = params.userInput; // Update the reference
      },
      path: "ask_appointment_time",
    },
    ask_appointment_time: {
      message: "⏰ What time would you like to book your appointment? (e.g., 14:00):",
      function: (params) => {
        setForm((prev) => ({ ...prev, appointmentTime: params.userInput }));
        formRef.current.appointmentTime = params.userInput; // Update the reference
      },
      path: "submit_appointment",
    },
    submit_appointment: {
      message: "✅ Submitting your appointment details...",
      path: async (params) => {
        // Simulate sending data to the server
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await params.injectMessage(
          `🎉 Appointment confirmed for ${formRef.current.appointmentDate} at ${formRef.current.appointmentTime}!`
        );
        return "end";
      },
    },
    customQuery: {
      message: "📝 Please type your specific needs:",
      function: (params) => {
        setForm((prev) => ({ ...prev, interest: params.userInput }));
        formRef.current.interest = params.userInput; // Update the reference
      },
      path: "end",
    },
    end: {
      message: "✅ Thank you! Here's a summary of your details:",
      component: (
        <div className="bg-gray-300 ml-5 mt-5 p-3 rounded-2xl">
          <p><span className="text-sm">Name:</span> {formRef.current.name}</p>
          <p><span className="text-sm">Age:</span> {formRef.current.age}</p>
          <p><span className="text-sm">Contact:</span> {formRef.current.contact}</p>
          <p><span className="text-sm">Interest:</span> {formRef.current.interest}</p>
          <p><span className="text-sm">Preferences:</span> {formRef.current.preferences.join(", ")}</p>
          <p><span className="text-sm">Appointment Date:</span> {formRef.current.appointmentDate}</p>
          <p><span className="text-sm">Appointment Time:</span> {formRef.current.appointmentTime}</p>
        </div>
      ),
      options: ["Start Over 🔄"],
      chatDisabled: true,
      path: "start",
    },
  };

  const settings = {
    general: {
      embedded: true,
    },
    chatHistory: {
      storageKey: "user_details",
    },
  };

  return (
    <div className="fixed bottom-[90px] z-50 sm:w-300">
      <ChatBotProvider>
        <ChatBot settings={settings} flow={chatbotFlow} />
      </ChatBotProvider>
    </div>
  );
};

export default Chatbot;
