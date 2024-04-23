import fetch from 'auth/FetchInterceptor';

const AuthService = {
    login: (data: any) => fetch({
        url: '/auth/login',
        method: 'post',
        data
    }),

    register: (data: any) => fetch({
        url: '/auth/register',
        method: 'post',
        data
    }),
    loginInOAuth: () => {
        return fetch({
            url: '/auth/loginInOAuth',
            method: 'post',

        })
    }
    ,
    logout: () => fetch({
        url: '/auth/logout',
        method: 'post',
    })

}


export default AuthService;