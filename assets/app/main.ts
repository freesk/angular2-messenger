import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";

// Start of the angular app
platformBrowserDynamic().bootstrapModule(AppModule);
