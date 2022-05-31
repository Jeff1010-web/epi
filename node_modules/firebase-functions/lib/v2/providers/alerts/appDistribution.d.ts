import { FirebaseAlertData } from './alerts';
import { CloudEvent, CloudFunction } from '../../core';
import * as options from '../../options';
/**
 * The internal payload object for adding a new tester device to app distribution.
 * Payload is wrapped inside a FirebaseAlertData object.
 */
export interface NewTesterDevicePayload {
    ['@type']: 'com.google.firebase.firebasealerts.NewTesterDevicePayload';
    testerName: string;
    testerEmail: string;
    testerDeviceModelName: string;
    testerDeviceIdentifier: string;
}
interface WithAlertTypeAndApp {
    alertType: string;
    appId: string;
}
/**
 * A custom CloudEvent for Firebase Alerts (with custom extension attributes).
 */
export declare type AppDistributionEvent<T> = CloudEvent<FirebaseAlertData<T>, WithAlertTypeAndApp>;
/**
 * Configuration for app distribution functions.
 */
export interface AppDistributionOptions extends options.EventHandlerOptions {
    appId?: string;
}
/**
 * Declares a function that can handle adding a new tester iOS device.
 */
export declare function onNewTesterIosDevicePublished(handler: (event: AppDistributionEvent<NewTesterDevicePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewTesterDevicePayload>>;
export declare function onNewTesterIosDevicePublished(appId: string, handler: (event: AppDistributionEvent<NewTesterDevicePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewTesterDevicePayload>>;
export declare function onNewTesterIosDevicePublished(opts: AppDistributionOptions, handler: (event: AppDistributionEvent<NewTesterDevicePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewTesterDevicePayload>>;
export {};
