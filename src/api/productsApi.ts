import { ListParams, ListResponse, productsModel } from 'models';
import axiosClient from './axiosClient';

const productsApi = {
  getAll(params: ListParams): Promise<ListResponse<productsModel>> {
    const url = '/products/';
    return axiosClient.get(url, { params });
  },

  getById(id: string): Promise<productsModel> {
    const url = `/products/${id}/`;
    return axiosClient.get(url);
  },

  add(data: productsModel): Promise<productsModel> {
    const url = '/products/';
    console.log(data);
    
    return axiosClient.post(url, data);
  },

  update(data: Partial<productsModel>): Promise<productsModel> {
    const url = `/products/${data.id}/`;
    return axiosClient.post(url, data);
  },


  remove(id: number): Promise<any> {
    const url = `/products/${id}/`;
    return axiosClient.delete(url);
  },


};

export default productsApi;
