import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CBComponent } from './c-b/c-b.component';
import { CodeBlockComponent } from './code-block/code-block.component';
import { ComingSoonComponent } from './coming-soon.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { PwaInstallComponent } from './pwa-install/pwa-install.component';
import { PwaManifestComponent } from './pwa-manifest/pwa-manifest.component';
import { PwaStepComponent } from './pwa-step/pwa-step.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ShareComponent } from './share/share.component';
import WebFont from 'webfontloader';
import { appRoutes } from './routes';
import { environment } from '../environments/environment';

WebFont.load({
  google: {
    families: ['Roboto', 'Roboto Mono', 'Material Icons'],
  },
});

@NgModule({
  declarations: [
    AppComponent,
    CBComponent,
    CodeBlockComponent,
    ComingSoonComponent,
    FirebaseComponent,
    PwaInstallComponent,
    PwaManifestComponent,
    PwaStepComponent,
    ShareComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
