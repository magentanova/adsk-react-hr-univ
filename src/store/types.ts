import { AnyAction } from 'redux';

export enum ActionTypes {
    TOGGLE_LOGIN_FORM = "TOGGLE_LOGIN_FORM",
    HIDE_LOGIN_FORM = "HIDE_LOGIN_FORM",
    SET_USER_DATA = "SET_USER_DATA",
    SHOW_MODAL = "SHOW_MODAL",
    HIDE_MODAL = "HIDE_MODAL"
}

export interface IDispatch {
    dispatch: (action:AnyAction) => void;
}

export interface IAppState {
    showLoginForm: boolean;
    modalShowing: boolean;
    userData: IUserData;
}

export interface IUserData {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    username: string;
}