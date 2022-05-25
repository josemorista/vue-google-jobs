import { HttpRequest } from "../entities/HttpRequest";

export interface HttpResponse<T> {
	body: T;
	status: number;
}

export interface HttpGetService {
	get<T>(request: HttpRequest): Promise<HttpResponse<T>>;
}