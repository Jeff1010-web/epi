import { UserRecord, UserInfo, UserRecordMetadata, userRecordConstructor } from '../common/providers/identity';
import { CloudFunction, EventContext } from '../cloud-functions';
import { DeploymentOptions } from '../function-configuration';
export { UserRecord, UserInfo, UserRecordMetadata, userRecordConstructor };
/** @hidden */
export declare const provider = "google.firebase.auth";
/** @hidden */
export declare const service = "firebaseauth.googleapis.com";
/**
 * Handle events related to Firebase authentication users.
 */
export declare function user(): UserBuilder;
/** @hidden */
export declare function _userWithOptions(options: DeploymentOptions): UserBuilder;
/** Builder used to create Cloud Functions for Firebase Auth user lifecycle events. */
export declare class UserBuilder {
    private triggerResource;
    private options?;
    private static dataConstructor;
    /** @hidden */
    constructor(triggerResource: () => string, options?: DeploymentOptions);
    /** Respond to the creation of a Firebase Auth user. */
    onCreate(handler: (user: UserRecord, context: EventContext) => PromiseLike<any> | any): CloudFunction<UserRecord>;
    /** Respond to the deletion of a Firebase Auth user. */
    onDelete(handler: (user: UserRecord, context: EventContext) => PromiseLike<any> | any): CloudFunction<UserRecord>;
    private onOperation;
}
