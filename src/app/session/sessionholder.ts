import { Session } from './session';

export class SessionHolder {

    private static sessionHolder: SessionHolder = new SessionHolder();
    private sessionMap: Map<string, Session> = new Map<string, Session>();

    private constructor() {}

    public static getInstance(): SessionHolder {
        return this.sessionHolder;
    }

    public addSession(login: string): void {
        if (this.sessionMap.size === 0) {
            this.sessionMap.set(login, new Session(login));
        }
    }

    public checkIsAnySessionExits(): boolean {
        return this.sessionMap.size > 0;
    }

    public removeSession(login: string): boolean {
        return this.sessionMap.delete(login);
    }

    public getActiveLogin(): string {
        let activeLogin = '';
        this.sessionMap.forEach((value, key, map) => {
            activeLogin = key;
            return;
        });
        return activeLogin;
    }

    public checkIsExistSession(): boolean {
        return this.sessionMap.size === 1;
    }
}
