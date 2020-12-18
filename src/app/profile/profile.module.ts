import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';


import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LayoutModule } from '../layout/layout.module';
import { TimelineComponent } from './timeline/timeline.component';
import { BasicComponent } from './basic/basic.component';
import { AboutComponent } from './about/about.component';
import { JobsComponent } from './jobs/jobs.component';
import { EducationComponent } from './education/education.component';
import { NgModel, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { trainingReducer } from './training.reducer';

@NgModule({
  declarations: [ProfileComponent, TimelineComponent, BasicComponent, AboutComponent, JobsComponent, EducationComponent, PersonalInfoComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    StoreModule.forFeature('training', trainingReducer)
  ]
})
export class ProfileModule {}
