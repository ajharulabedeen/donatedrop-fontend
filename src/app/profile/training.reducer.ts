import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

import {
  ProfileActions,
  // SET_AVAILABLE_TRAININGS,
  // SET_FINISHED_TRAININGS,
  // START_TRAINING,
  // STOP_TRAINING
  SetUserName
} from './training.actions';
// import { Exercise } from './exercise.model';
import * as fromRoot from '../app.reducer';
import {SET_PROFILE_USER_NAME} from '../profile/training.actions';

// export interface TrainingState {
export interface ProfileState {
  // availableExercises: Exercise[];
  // finishedExercises: Exercise[];
  // activeTraining: Exercise;
  userName : string;
}

export interface State extends fromRoot.State {
  // training: TrainingState;
  profileBasic: ProfileState;
}

// const initialState: TrainingState = {
const initialState: ProfileState= {
  // availableExercises: [],
  // finishedExercises: [],
  // activeTraining: null
  userName : null
};

// export function trainingReducer(state = initialState, action: TrainingActions) {
export function trainingReducer(state = initialState, action: ProfileActions) {
  switch (action.type) {
    // case SET_AVAILABLE_TRAININGS:
    //   return {
    //     ...state,
    //     availableExercises: action.payload
    //   };

    // case SET_FINISHED_TRAININGS:
    //   return {
    //     ...state,
    //     finishedExercises: action.payload
    //   };

    // case START_TRAINING:
    //   return {
    //     ...state,
    //     activeTraining: { ...state.availableExercises.find(ex => ex.id === action.payload) }
    //   };

    // case STOP_TRAINING:
    //   return {
    //     ...state,
    //     activeTraining: null
    //   };

    case SET_PROFILE_USER_NAME:
      return {
        // activeTraining: action.payload
        userName: action.payload
      };

    default: {
      return state;
    }
  }
}

// export const getTrainingState = createFeatureSelector<TrainingState>('training');
export const getTrainingState = createFeatureSelector<ProfileState>('training');

//TODO: clean
// export const getAvailableExercises = createSelector(getTrainingState, (state: TrainingState) => state.availableExercises);

//TODO: clean
// export const getAvailableExercises = createSelector(getTrainingState, (state: ProfileState) => state.userName);
export const getAvailableExercises = createSelector(getTrainingState, (state: ProfileState) => {
  return state.userName;
});

//TODO: clean
// export const getFinishedExercises = createSelector(getTrainingState, (state: TrainingState) => state.finishedExercises);
// export const getActiveTraining = createSelector(getTrainingState, (state: TrainingState) => state.activeTraining);
// export const getIsTraining = createSelector(getTrainingState, (state: TrainingState) => state.activeTraining != null);

