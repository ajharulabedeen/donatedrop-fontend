import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {HomeComponent} from './home/home.component';
import {LayoutModule} from './layout/layout.module';
import {FormsModule, ReactiveFormsModule, NgModel} from '@angular/forms';
import {PublicModule} from './public/public.module';
import {AuthComponent} from './auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/auth.service';
import {ProfileComponent} from './profile/profile/profile.component';
import {ProfileModule} from './profile/profile.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatButtonModule
} from '@angular/material';
import {DataTableComponent} from './data-table/data-table.component';
import {FileUploaderTestComponent} from './file-uploader-test/file-uploader-test.component';
// import { PaymentModule } from './payment/payment.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
// import {RecordRtcComponent} from './record-rtc/record-rtc.component';
import {RecordClearComponent} from './record-clear/record-clear.component';
import {DonationHistoryComponent} from './donation-history/donation-history.component';
import {AdminModule} from './admin/admin.module';
import {AgentDashboardComponent} from './agent-dashboard/agent-dashboard/agent-dashboard.component';
import {AgentDashboardModule} from './agent-dashboard/agent-dashboard.module';
import {TestModule} from './test/test.module';
import {PostModule} from './post/post.module';
import {RouterModule} from '@angular/router';

//TODO: active
import { reducers } from './app.reducer';
import { StoreModule } from '@ngrx/store';


//TODO: clean
// import { trainingReducer } from './training.reducer';
// import { authReducer } from './auth/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    DataTableComponent,
    FileUploaderTestComponent,
    // RecordRtcComponent,
    RecordClearComponent,
    DonationHistoryComponent
    // AuthService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    LayoutModule,
    FormsModule,
    PublicModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfileModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    // PaymentModule,
    CKEditorModule,
    BrowserModule,
    AdminModule,
    AgentDashboardModule,
    TestModule,
    PostModule,
    RouterModule,
    //TODO: active
    StoreModule.forRoot(reducers),
    //TODO: clean
    // StoreModule.forFeature('training', trainingReducer)
    // StoreModule.forFeature('training', authReducer)

    // RecordRTC
    // NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
