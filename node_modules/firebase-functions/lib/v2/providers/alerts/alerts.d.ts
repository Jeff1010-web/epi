import { CloudEvent, CloudFunction } from '../../core';
import * as options from '../../options';
/**
 * The CloudEvent data emitted by Firebase Alerts.
 */
export interface FirebaseAlertData<T = any> {
    createTime: string;
    endTime: string;
    payload: T;
}
interface WithAlertTypeAndApp {
    alertType: string;
    appId?: string;
}
/**
 * A custom CloudEvent for Firebase Alerts (with custom extension attributes).
 */
export declare type AlertEvent<T> = CloudEvent<FirebaseAlertData<T>, WithAlertTypeAndApp>;
/** The underlying alert type of the Firebase Alerts provider. */
export declare type AlertType = 'crashlytics.newFatalIssue' | 'crashlytics.newNonfatalIssue' | 'crashlytics.regression' | 'crashlytics.stabilityDigest' | 'crashlytics.velocity' | 'crashlytics.newAnrIssue' | 'billing.planUpdate' | 'billing.automatedPlanUpdate' | 'appDistribution.newTesterIosDevice' | string;
/**
 * Configuration for Firebase Alert functions.
 */
export interface FirebaseAlertOptions extends options.EventHandlerOptions {
    alertType: AlertType;
    appId?: string;
}
/**
 * Declares a function that can handle Firebase Alerts from CloudEvents.
 * @param alertTypeOrOpts the alert type or Firebase Alert function configuration.
 * @param handler a function that can handle the Firebase Alert inside a CloudEvent.
 */
export declare function onAlertPublished<T extends {
    ['@type']: string;
} = any>(alertTypeOrOpts: AlertType | FirebaseAlertOptions, handler: (event: AlertEvent<T>) => any | Promise<any>): CloudFunction<FirebaseAlertData<T>>;
export {};
