import axios from "axios";

export function LoginApiService(data){
    return axios.post(`users/login`, data);
}

export function SignUpApiService(data) {
    return axios.post(`users`, data);
}
export function CoupenApiService(data) {
    return axios.post(`coupens`, data);
}
export function ProductApiService(data) {
    return axios.post(`products`, data);
}
export function ProductgetApiService() {
    return axios.get(`products`);
}
export function ProductdeleteApiService(id) {
    return axios.delete(`products/`+id);
}
export function ProducteditApiService(data) {
    return axios.put(`products/`,data);
}
export function productsphotoApiService(file) {
    return axios.post(`products/upload`, file);
}
export function categoriesApiService(data) {
    return axios.post(`categories`, data);
}
export function categoriesphotoApiService(file) {
    return axios.post(`categories/upload`, file);
}
export function categoriesgetApiService() {
    return axios.get(`categories`);
}
export function categoriesdeleteApiService(id) {
    return axios.delete(`categories/`+id);
}

export function categorieseditApiService(data) {
    return axios.put(`categories`,data);
}
export function couponApiService() {
    return axios.get(`coupens`);
}
export function coupondelApiService(id) {
    return axios.delete(`coupens/`+id);
}
export function CoupeneditApiService(data) {
    return axios.put(`coupens`, data);
}
export function ordersApiService(data) {
    return axios.post(`orders`, data);
}
export function ordersgetApiService() {
    return axios.get(`orders`);
}
export function ordersdeleteApiService(id) {
    return axios.delete(`orders/` + id);
}

export function orderseditApiService(data) {
    return axios.put(`orders`, data);}