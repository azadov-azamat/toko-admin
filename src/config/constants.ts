import LoginPage from "../view/login";
import ProductList from "../view/dashboard/product-list";

export const routes = [
    // {
    //     id: 1,
    //     name: 'login',
    //     path: '/login',
    //     component: LoginPage
    // },
    {
        id: 2,
        name: 'product',
        path: '/dashboard',
        component: ProductList
    }
]