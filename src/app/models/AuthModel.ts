export interface AuthModel {
    id?: String,
    name?: String;
    email?: String;
    password?: String;
}

export interface AuthLogin {
    email: String;
    password: String;
}