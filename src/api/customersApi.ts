import { ListParams, ListResponse, customersModel } from 'models';
import axiosClient from './axiosClient';

const customersApi = {
  getAll(params: ListParams): Promise<ListResponse<customersModel>> {
    const url = '/customers/';
    return axiosClient.get(url, { params });
  },

  getById(id: string): Promise<customersModel> {
    const url = `/customers/${id}/`;
    return axiosClient.get(url);
  },

  add(data: customersModel): Promise<customersModel> {
    const url = '/customers/';
    console.log(data);
    
    return axiosClient.post(url, data);
  },

  update(data: Partial<customersModel>): Promise<customersModel> {
    const url = `/customers/${data.id}/`;
    return axiosClient.post(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/customers/${id}/`;
    return axiosClient.delete(url);
  },


};

export default customersApi;
