export interface AuthModel {
    id?: string,
    name?: string;
    email?: string;
    password?: string;
}

export interface AuthLogin {
    email: string;
    password: string;
}
