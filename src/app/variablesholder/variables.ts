export class EnviromentVariables {
    public static getLocation(): string {
        return window.location.protocol + '//' + window.location.host;
    }
}
