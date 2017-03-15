import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core"
// Not Angular stuff
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message }  from "./message.model";

// @Injectable a dummy decorator required for injecting services
@Injectable()
export class MessageService {
  // Private array
  private messages: Message[] = [];
  // Event emitter
  messageIsEdit = new EventEmitter<Message>();

  // Define ajax stuff
  constructor(private http: Http) {}

  // Add a message into the array
  addMessage(message: Message) {
    // Turn into a json object
    const body = JSON.stringify(message);
    // To set proper format of the data
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    // It doesn't send the requst, it's just setting up an observable object
    return this.http.post('http://localhost:3000/message', body, { headers: headers })
                    // Configure further response with map()
                    // json() turns returned piece of data into a js object
                    .map((response: Response) => {
                        const result = response.json();
                        const message = new Message(result.obj.content, 'John', result.obj._id, null);
                        this.messages.push(message);
                        return message;
                    })
                    // Observable.throw() required for matching map()'s returning object format
                    .catch((error: Response) => Observable.throw(error.json()));
  }

  getMessage() {
    return this.http.get('http://localhost:3000/message')
                    .map((response: Response) => {
                      // Get a particular property "obj" from the response
                      const messages = response.json().obj;
                      // New arr
                      let transformedMessages: Message[] = [];
                      // Fill the arr with new objects
                      for (let message of messages) {
                        transformedMessages.push(new Message(message.content, 'John', message._id, null));
                      }
                      // Overwrite with the new one
                      this.messages = transformedMessages;
                      return transformedMessages;
                    })
                    .catch((error: Response) => Observable.throw(error.json()));
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  updateMessage(message: Message) {
    const body = JSON.stringify(message);
    // To set proper format of the data
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    // It doesn't send the requst, it's just setting up an observable object
    return this.http.patch('http://localhost:3000/message/' + message.messageId, body, { headers: headers })
                    // Configure further response with map()
                    // json() turns returned piece of data into a js object
                    .map((response: Response) => response.json())
                    // Observable.throw() required for matching map()'s returning object format
                    .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteMessage(message: Message) {
    // Remove the given object from the array
    this.messages.splice(this.messages.indexOf(message), 1);
    // It doesn't send the requst, it's just setting up an observable object
    return this.http.delete('http://localhost:3000/message/' + message.messageId)
                    // Configure further response with map()
                    // json() turns returned piece of data into a js object
                    .map((response: Response) => response.json())
                    // Observable.throw() required for matching map()'s returning object format
                    .catch((error: Response) => Observable.throw(error.json()));
  }
}
