import { FirebaseAlertData } from '.';
import { CloudEvent, CloudFunction } from '../../core';
import * as options from '../../options';
/** Generic crashlytics issue interface */
interface Issue {
    id: string;
    title: string;
    subtitle: string;
    appVersion: string;
}
/**
 * The internal payload object for a new fatal issue.
 * Payload is wrapped inside a FirebaseAlertData object.
 */
export interface NewFatalIssuePayload {
    ['@type']: 'com.google.firebase.firebasealerts.CrashlyticsNewFatalIssuePayload';
    issue: Issue;
}
/**
 * The internal payload object for a new non-fatal issue.
 * Payload is wrapped inside a FirebaseAlertData object.
 */
export interface NewNonfatalIssuePayload {
    ['@type']: 'com.google.firebase.firebasealerts.CrashlyticsNewNonfatalIssuePayload';
    issue: Issue;
}
/**
 * The internal payload object for a regression alert.
 * Payload is wrapped inside a FirebaseAlertData object.
 */
export interface RegressionAlertPayload {
    ['@type']: 'com.google.firebase.firebasealerts.CrashlyticsRegressionAlertPayload';
    type: string;
    issue: Issue;
    resolveTime: string;
}
/** Generic crashlytics trending issue interface */
interface TrendingIssueDetails {
    type: string;
    issue: Issue;
    eventCount: number;
    userCount: number;
}
/**
 * The internal payload object for a stability digest.
 * Payload is wrapped inside a FirebaseAlertData object.
 */
export interface StabilityDigestPayload {
    ['@type']: 'com.google.firebase.firebasealerts.CrashlyticsStabilityDigestPayload';
    digestDate: string;
    trendingIssues: TrendingIssueDetails[];
}
/**
 * The internal payload object for a velocity alert.
 * Payload is wrapped inside a FirebaseAlertData object.
 */
export interface VelocityAlertPayload {
    ['@type']: 'com.google.firebase.firebasealerts.VelocityAlertPayload';
    issue: Issue;
    createTime: string;
    crashCount: number;
    crashPercentage: number;
    firstVersion: string;
}
/**
 * The internal payload object for a new Application Not Responding issue.
 * Payload is wrapped inside a FirebaseAlertData object.
 */
export interface NewAnrIssuePayload {
    ['@type']: 'com.google.firebase.firebasealerts.NewAnrIssuePayload';
    issue: Issue;
}
interface WithAlertTypeAndApp {
    alertType: string;
    appId: string;
}
/**
 * A custom CloudEvent for Firebase Alerts (with custom extension attributes).
 */
export declare type CrashlyticsEvent<T> = CloudEvent<FirebaseAlertData<T>, WithAlertTypeAndApp>;
/**
 * Configuration for crashlytics functions.
 */
export interface CrashlyticsOptions extends options.EventHandlerOptions {
    appId?: string;
}
/**
 * Declares a function that can handle a new fatal issue published to crashlytics.
 */
export declare function onNewFatalIssuePublished(handler: (event: CrashlyticsEvent<NewFatalIssuePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewFatalIssuePayload>>;
export declare function onNewFatalIssuePublished(appId: string, handler: (event: CrashlyticsEvent<NewFatalIssuePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewFatalIssuePayload>>;
export declare function onNewFatalIssuePublished(opts: CrashlyticsOptions, handler: (event: CrashlyticsEvent<NewFatalIssuePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewFatalIssuePayload>>;
/**
 * Declares a function that can handle aa new non-fatal issue published to crashlytics.
 */
export declare function onNewNonfatalIssuePublished(handler: (event: CrashlyticsEvent<NewNonfatalIssuePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewNonfatalIssuePayload>>;
export declare function onNewNonfatalIssuePublished(appId: string, handler: (event: CrashlyticsEvent<NewNonfatalIssuePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewNonfatalIssuePayload>>;
export declare function onNewNonfatalIssuePublished(opts: CrashlyticsOptions, handler: (event: CrashlyticsEvent<NewNonfatalIssuePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewNonfatalIssuePayload>>;
/**
 * Declares a function that can handle a regression alert published to crashlytics.
 */
export declare function onRegressionAlertPublished(handler: (event: CrashlyticsEvent<RegressionAlertPayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<RegressionAlertPayload>>;
export declare function onRegressionAlertPublished(appId: string, handler: (event: CrashlyticsEvent<RegressionAlertPayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<RegressionAlertPayload>>;
export declare function onRegressionAlertPublished(opts: CrashlyticsOptions, handler: (event: CrashlyticsEvent<RegressionAlertPayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<RegressionAlertPayload>>;
/**
 * Declares a function that can handle a stability digest published to crashlytics.
 */
export declare function onStabilityDigestPublished(handler: (event: CrashlyticsEvent<StabilityDigestPayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<StabilityDigestPayload>>;
export declare function onStabilityDigestPublished(appId: string, handler: (event: CrashlyticsEvent<StabilityDigestPayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<StabilityDigestPayload>>;
export declare function onStabilityDigestPublished(opts: CrashlyticsOptions, handler: (event: CrashlyticsEvent<StabilityDigestPayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<StabilityDigestPayload>>;
/**
 * Declares a function that can handle a velocity alert published to crashlytics.
 */
export declare function onVelocityAlertPublished(handler: (event: CrashlyticsEvent<VelocityAlertPayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<VelocityAlertPayload>>;
export declare function onVelocityAlertPublished(appId: string, handler: (event: CrashlyticsEvent<VelocityAlertPayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<VelocityAlertPayload>>;
export declare function onVelocityAlertPublished(opts: CrashlyticsOptions, handler: (event: CrashlyticsEvent<VelocityAlertPayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<VelocityAlertPayload>>;
/**
 * Declares a function that can handle a new Application Not Responding issue published to crashlytics.
 */
export declare function onNewAnrIssuePublished(handler: (event: CrashlyticsEvent<NewAnrIssuePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewAnrIssuePayload>>;
export declare function onNewAnrIssuePublished(appId: string, handler: (event: CrashlyticsEvent<NewAnrIssuePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewAnrIssuePayload>>;
export declare function onNewAnrIssuePublished(opts: CrashlyticsOptions, handler: (event: CrashlyticsEvent<NewAnrIssuePayload>) => any | Promise<any>): CloudFunction<FirebaseAlertData<NewAnrIssuePayload>>;
export {};
