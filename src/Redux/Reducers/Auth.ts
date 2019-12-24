import { ROLES_ENUM } from "Utils/Enums";

const initState = {
    username: 'Diwakar',
    isLoggedIn: true,
    role: ROLES_ENUM.ADMIN
};

const authReducer = (state = initState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default authReducer;