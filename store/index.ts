import { mutate } from '@/services/mutations'
import { RequestOptionT } from '@/services/types'
export const state: any = () => ({
    activeTab: 0 as number,
    activeTabBool: [true, false, false] as Array<boolean>,
    trendingURL: "https://api.coingecko.com/api/v3/search/trending" as string,
    user: {} as object,
    token: '' as string,
    Err: {
        errMessages: "" as string,
        showError: false as boolean,
    },
    RegisterForm: {
        name: "" as string,
        email: "" as string,
        password: '' as string,
        rePassword: '' as string,
        phone: '' as string
    },
    alert: {
        title: "null" as string,
        text: "null" as string,
        icon: 'lni lni-check-mark' as string,
        show: false as boolean,
        type: 'success' as string
    }
})
export const getters = {
    //pass active step
    getActiveStep(state: any): number {
        return state.activeTab as number
    },
    //pass user from localStorage
    getUser(state: any) {
        if (process.browser) {
            let user: object
            user = JSON.parse(localStorage.getItem('user') || '{}') as object
            return user
        }
    },
    //pass boolean for show error component
    showError: (state: any): boolean => state.Err.showError as boolean,
    //pass string for error title
    ErrorMessage: (state: any): string => state.Err.errMessage as string,
}

export const mutations = {

    //set user in localStorage
    [mutate.SET_USER](state: any, user: any): void {
        state.user = user
        if (process.browser) {
            localStorage.setItem('user', user)
        }
    },
    //set token in localStorage
    [mutate.SET_TOKEN](state: any, token: any): void {
        state.token = token
        if (process.browser) {
            localStorage.setItem('token', token)
        }
    },
    //set showing error
    [mutate.SHOW_ERROR](state: any, success: boolean): void {
        state.Err.showError = !success
    },
    //set showing alert
    [mutate.SHOW_ALERT](state: any, payload: any): void {
        state.alert = payload
    },
    //set hide alert
    [mutate.HIDE_ALERT](state: any): void {
        state.alert.show = false
    },
    //increase active tab number for change register steps
    [mutate.INCREASE_ACTIVE_TAB](state: any): void {
        if (state.activeTab >= 2) return
        state.activeTab++

        switch (state.activeTab) {
            case 0:
                state.activeTabBool = [true, false, false];
                break;
            case 1:
                state.activeTabBool = [false, true, false];
                break;
            case 2:
                state.activeTabBool = [false, false, true];
                break;

            default:
                state.activeTabBool = [true, false, false];
                break;
        }
    },
    //decrease active tab number for change register steps
    [mutate.DECREASE_ACTIVE_TAB](state: any): void {
        if (state.activeTab == 0) return
        state.activeTab--

        switch (state.activeTab) {
            case 0:
                state.activeTabBool = [true, false, false];
                break;
            case 1:
                state.activeTabBool = [false, true, false];
                break;
            case 2:
                state.activeTabBool = [false, false, true];
                break;

            default:
                state.activeTabBool = [true, false, false];
                break;
        }
    },
}
export const actions = {
    //login method
    async LogIn({ commit,app }: any, { password, email }: any) {
        var formdata: FormData = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        var requestOptions: RequestOptionT = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        return await fetch("https://apingweb.com/api/login", requestOptions as any)
            .then((response) => response.json())
            .then((res) => {
                if (res.status == 200) {
                    commit([mutate.SET_USER], JSON.stringify(res.result))
                    commit([mutate.SET_TOKEN], JSON.stringify(res.token))
                    commit([mutate.SHOW_ALERT], {
                        text: 'با موفقیت وارد حساب خود شده اید',
                        icon: 'lni lni-check-mark',
                        show: true,
                        color: 'success'
                    });
                    app.$router.push("/dashboard");
                } else {
                    commit([mutate.SHOW_ALERT], {
                        text: "ورورد با خطا مواجه شد",
                        icon: 'lni lni-check-mark',
                        show: true,
                        color: 'error'
                    });

                    commit([mutate.SHOW_ERROR], res.success)
                }
            })



    },
    //register method
    async Register({ commit,app }: any, {
        name,
        email,
        phone,
        password,
        password_confirmation }: any) {

        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("phone", phone);
        formdata.append("password", password);
        formdata.append("password_confirmation", password_confirmation);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        return await fetch("https://apingweb.com/api/register", requestOptions as any)
            .then(response => response.json())
            .then((res) => {
                console.log(res);
                if (res.status == 200) {
                    app.$router.push("/dashboard");
                    commit([mutate.SET_USER], JSON.stringify(res.result))
                    commit([mutate.SET_TOKEN], JSON.stringify(res.token))
                    localStorage.removeItem('page1')
                    localStorage.removeItem('page2')
                    commit([mutate.SHOW_ALERT], {
                        text: 'با موفقیت وارد حساب خود شده اید',
                        icon: 'lni lni-check-mark',
                        show: true,
                        color: 'success'
                    });
                } else {
                    commit([mutate.SHOW_ALERT], {
                        text: "ثبت نام با خطا مواجه شد",
                        icon: 'lni lni-close',
                        show: true,
                        color: 'error'
                    });
                    commit([mutate.SHOW_ERROR], res.success)
                }
            })
    },
}