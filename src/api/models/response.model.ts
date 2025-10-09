interface BaseResponse {
  success: boolean;
  message: string;
}

export interface ReturnManyResponse<T> extends BaseResponse {
  count: number;
  data: T[];
}

export interface ReturnOneResponse<T> extends BaseResponse {
  data: T;
}
