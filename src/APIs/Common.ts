import Asios from 'axios';

const { REACT_APP_API_URL } = process.env;

export const doGetCall = async (url: string, params: any = {}) => {
    const RESOURCE_URL = `${REACT_APP_API_URL}${url}`;
    const result = await Asios.get(RESOURCE_URL, { params });
    return result.data;
}