import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core"
// Not Angular stuff
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message }  from "./message.model";
import { ErrorService } from "../error/error.service";

// @Injectable a dummy decorator required for injecting services
@Injectable()
export class MessageService {
  // Private array
  private messages: Message[] = [];
  // Event emitter
  messageIsEdit = new EventEmitter<Message>();

  // Define ajax stuff
  constructor(private http: Http, private errorService: ErrorService) {}

  // Add a message into the array
  addMessage(message: Message) {
    // Turn into a json object
    const body = JSON.stringify(message);
    // To set proper format of the data
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    // Create token parameter
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    // It doesn't send the requst, it's just setting up an observable object
    return this.http.post('http://localhost:3000/message' + token, body, { headers: headers })
                    // Configure further response with map()
                    // json() turns returned piece of data into a js object
                    .map((response: Response) => {

                        console.log(response);

                        const result = response.json();
                        const message = new Message(
                          result.obj.content,
                          result.obj.user.firstName,
                          result.obj._id,
                          result.obj.user._id
                        );
                        this.messages.push(message);
                        return message;
                    })
                    // Observable.throw() required for matching map()'s returning object format
                    .catch((error: Response) => {
                      this.errorService.handleError(error.json());
                      return Observable.throw(error.json());
                    });
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
                        transformedMessages.push(new Message(
                          message.content,
                          message.user.firstName,
                          message._id,
                          message.user._id
                        ));
                      }
                      // Overwrite with the new one
                      this.messages = transformedMessages;
                      return transformedMessages;
                    })
                    .catch((error: Response) => {
                      this.errorService.handleError(error.json());
                      return Observable.throw(error.json())
                    });
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
    // Create token parameter
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    // It doesn't send the requst, it's just setting up an observable object
    return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, { headers: headers })
                    // Configure further response with map()
                    // json() turns returned piece of data into a js object
                    .map((response: Response) => response.json())
                    // Observable.throw() required for matching map()'s returning object format
                    .catch((error: Response) => {
                      this.errorService.handleError(error.json());
                      return Observable.throw(error.json())
                    });
  }

  deleteMessage(message: Message) {
    // Remove the given object from the array
    this.messages.splice(this.messages.indexOf(message), 1);
    // Create token parameter
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    // It doesn't send the requst, it's just setting up an observable object
    return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
                    // Configure further response with map()
                    // json() turns returned piece of data into a js object
                    .map((response: Response) => response.json())
                    // Observable.throw() required for matching map()'s returning object format
                    .catch((error: Response) => {
                      this.errorService.handleError(error.json());
                      return Observable.throw(error.json())
                    });
  }
}
