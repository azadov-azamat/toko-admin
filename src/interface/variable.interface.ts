export interface InitialStateProps {
    loading: boolean;
    value: string;
    userInfo: {};
    userToken: string;
    error: string;
    success: boolean;
}

export interface AuthData {
    _username: string;
    _password: string;
    _subdomain: string;
}

export interface AuthRes {
    token: string;
    lifetime: bigint;
}

export interface variationsReq {
    size: number;
    page: number;
}

export interface variationsRes {
    total_count: number;
    page: number;
    items: itemsProps[]
}

interface itemsProps {
    sku: string;
    supplier: string;
    supplierId: number;
    category?: null | '';
    id: number;
    barcode: string;
    lastUpdateTime: string;
    showMarket: boolean;
    uploadedImages?: [];
    innerHitIds?: null;
    technicalCard?: boolean;
    importProperties?: []
}