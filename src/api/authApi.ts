import { ListResponse, authModel, usersModel } from 'models';
import axiosClient from './axiosClient';

const authApi = {
  login(body: usersModel): Promise<authModel>{
    const url = '/login/';
    return axiosClient.post(url);
  },
};

export default authApi;
