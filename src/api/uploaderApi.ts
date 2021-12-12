import { ListParams, ListResponse, uploaderModel } from 'models';
import axiosClient from './axiosClient';

const categoriesApi = {
  getAll(params: ListParams): Promise<ListResponse<uploaderModel>> {
    const url = '/images/';
    return axiosClient.get(url, { params });
  },

  getById(id: string): Promise<uploaderModel> {
    const url = `/images/${id}/`;
    return axiosClient.get(url);
  },

  add(data: uploaderModel): Promise<uploaderModel> {
    const url = '/images/';
    console.log(data);
    
    return axiosClient.post(url, data);
  },

  update(data: Partial<uploaderModel>): Promise<uploaderModel> {
    const url = `/images/${data.id}/`;
    return axiosClient.post(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/images/${id}/`;
    return axiosClient.delete(url);
  },


};

export default categoriesApi;
