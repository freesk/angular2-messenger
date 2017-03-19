import { EventEmitter } from "@angular/core";

import { Error } from "./error.model";

export class ErrorService {
  errorOccured = new EventEmitter<Error>();

  handleError(error: any) {

    // let error = error;
    //
    // error.title = error.title || "No title";

    const errorData = new Error(error.title, error.err.message);
    this.errorOccured.emit(errorData);
  }
}
