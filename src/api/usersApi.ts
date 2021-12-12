import { ListParams, ListResponse, usersModel } from 'models';
import axiosClient from './axiosClient';

const usersApi = {
  getAll(params: ListParams): Promise<ListResponse<usersModel>> {
    const url = '/users/';
    return axiosClient.get(url, { params });
  },

  getById(id: string): Promise<usersModel> {
    const url = `/users/${id}/`;
    return axiosClient.get(url);
  },

  add(data: usersModel): Promise<usersModel> {
    const url = '/users/';
    console.log(data);
    
    return axiosClient.post(url, data);
  },

  update(data: Partial<usersModel>): Promise<usersModel> {
    const url = `/users/${data.id}/`;
    return axiosClient.post(url, data);
  },


  remove(id: string): Promise<any> {
    const url = `/users/${id}/`;
    return axiosClient.delete(url);
  },


};

export default usersApi;
