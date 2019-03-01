import { ACTIONS } from './reducer';
import { queryDomains } from '../../api/domains';

export const loadingAction = () => ({ type: ACTIONS.LOADING });
export const resetAction = () => ({ type: ACTIONS.RESET });
export const updateAction = (data) => ({ type: ACTIONS.UPDATE, payload: data });
export const setAction = (data) => ({ type: ACTIONS.SET, payload: data });

export const fetchDomains = () => {
    return async (dispatch, getState, { api }) => {
        dispatch(loadingAction());
        try {
            const { Domains = [] } = await api(queryDomains());
            return dispatch(setAction(Domains));
        } catch (error) {
            dispatch(resetAction());
            throw error;
        }
    };
};