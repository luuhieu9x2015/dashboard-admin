import { ListParams, ListResponse, categoriesModel } from 'models';
import axiosClient from './axiosClient';

const categoriesApi = {
  getAll(params: ListParams): Promise<ListResponse<categoriesModel>> {
    const url = '/categories/';
    return axiosClient.get(url, { params });
  },

  getById(id: string): Promise<categoriesModel> {
    const url = `/categories/${id}/`;
    return axiosClient.get(url);
  },

  add(data: categoriesModel): Promise<categoriesModel> {
    const url = '/categories/';
    console.log(data);
    
    return axiosClient.post(url, data);
  },

  update(data: Partial<categoriesModel>): Promise<categoriesModel> {
    const url = `/categories/${data.id}/`;
    return axiosClient.post(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/categories/${id}/`;
    return axiosClient.delete(url);
  },


};

export default categoriesApi;
