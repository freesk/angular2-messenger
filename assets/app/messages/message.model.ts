export class Message {
  // Define types
  content: String;
  username: String;
  // Optional
  messageId?: String;
  userId?: String;
  // Constructor
  constructor(content: String, username: String, messageId?: String, userId?: String) {
    this.content = content;
    this.username = username;
    this.messageId = messageId;
    this.userId = userId;
  }
}
