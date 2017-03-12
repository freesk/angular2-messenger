import { Message }  from "./message.model";

export class MessageService {
  // Private array
  private messages: Message[] = [];

  // Add a message into the array
  addMessage(message: Message) {
    this.messages.push(message);
    console.log(this.messages);
  }

  getMessage() {
    return this.messages;
  }

  deleteMessage(message: Message) {
    // Remove the given object from the array
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
