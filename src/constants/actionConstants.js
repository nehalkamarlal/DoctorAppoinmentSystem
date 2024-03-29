export const IS_LOADING = 'IS_LOADING';
export const SET_USER = 'SET_USER'
export const SET_LOGGED_IN = 'SET_LOGGED_IN'

export const SET_APPOINTMENT_LIST = 'SET_APPOINTMENT_LIST'
export const SET_APPOINTMENT_TOTAL_PAGE = 'SET_APPOINTMENT_TOTAL_PAGE'
export const SET_DOCTORS_LIST = 'SET_DOCTORS_LIST'
export const SET_WALLET = 'SET_WALLET'
export const SET_DASHBOARD = 'SET_DASHBOARD'
export const SET_STATE_CITY = 'SET_STATE_CITY'
export const SET_WALLET_TRANSACTION = 'SET_WALLET_TRANSACTION'
export const SET_SERVICE = 'SET_SERVICE'
export const SET_SERVICE_TOTAL_PAGE = 'SET_SERVICE_TOTAL_PAGE'
export const SET_REFERAL_USER = 'SET_REFERAL_USER'
export const SET_REFERAL_USER_TOTAL_PAGE = 'SET_REFERAL_USER_TOTAL_PAGE'
export const SET_SERVICE_REQUEST_LIST = 'SET_SERVICE_REQUEST_LIST'
export const SET_SERVICE_REQUEST_TOTAl_PAGE = 'SET_SERVICE_REQUEST_TOTAl_PAGE'
export const SET_SERVICE_ORDER_LIST = 'SET_SERVICE_ORDER_LIST'
export const SET_SERVICE_ORDER_TOTAL_PAGE = 'SET_SERVICE_ORDER_TOTAL_PAGE'
export const SET_USERS_LIST = 'SET_USERS_LIST'
export const SET_USERS_TOTAL_PAGE = 'SET_USERS_TOTAL_PAGE'

export const SET_DOCTOR_LIST = 'SET_DOCTOR_LIST'
export const SET_DOCTOR_TOTAL_PAGE = 'SET_DOCTOR_TOTAL_PAGE'
export const SET_DOCTOR_SPACILITY = 'SET_DOCTOR_SPACILITY'

export const SET_EXPERT_LIST = 'SET_EXPERT_LIST'
export const SET_EXPERT_TOTAL_PAGE = 'SET_EXPERT_TOTAL_PAGE'


export const SET_TEAMS_LIST = 'SET_TEAMS_LIST'
export const SET_TESTMONIAL_LIST = 'SET_TESTMONIAL_LIST'
export const SET_BLOG_LIST = 'SET_BLOG_LIST'
export const SET_TEAMS_LIST_TOTAL_PAGE = 'SET_TEAMS_LIST_TOTAL_PAGE'
export const SET_E_CLINIC_LIST = 'SET_E_CLINIC_LIST'
export const SET_E_CLIENT_TOTAL_PAGE = 'SET_E_CLIENT_TOTAL_PAGE'
export const SET_CAREER_LIST = 'SET_CAREER_LIST'
export const SET_CAREER_TOTAL_NO = 'SET_CAREER_TOTAL_NO'

export const SET_MEDICINE_LIST = 'SET_MEDICINE_LIST'
export const SET_MEDICINE_TOTAL_PAGE = 'SET_MEDICINE_TOTAL_PAGE'
export const SET_NOTOFICATION = 'SET_NOTOFICATION'

export const SET_EARNINGS_LIST = 'SET_EARNINGS_LIST'
export const SET_EARNINGS_TOTAL = 'SET_EARNINGS_TOTAL'
export const SET_UPCOMMING_EARNINGS_TOTAL = 'SET_UPCOMMING_EARNINGS_TOTAL'

export const SET_ADMIN_EARNINGS_LIST = 'SET_ADMIN_EARNINGS_LIST'
export const SET_ADMN_EARNINGS_TOTAL = 'SET_ADMN_EARNINGS_TOTAL'
export const SET_ADMIN_TOTAL_DOCTOR_EARNING = 'SET_ADMIN_TOTAL_DOCTOR_EARNING'
export const SET_ADMIN_TOTAL_FREANCHSIE_EARNING = 'SET_ADMIN_TOTAL_FREANCHSIE_EARNING'


export const isLoading = (data) => {
    return {
        type: IS_LOADING,
        payload: data
    };
}