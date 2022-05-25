import { HttpRequest } from "@/domain/shared/entities/HttpRequest";
import { HttpError } from "@/domain/shared/errors/HttpError";
import { HttpGetService, HttpResponse } from "@/domain/shared/services/HttpGetService";

export class FetchHttpGetService implements HttpGetService {

	private handleBody(request: HttpRequest) {
		if (!request.body || ["GET", "DELETE"].includes(request.method)) return null;
		if (request.isJsonRequest()) return JSON.stringify(request.body);
		return request.body;
	}

	async get<T>(request: HttpRequest): Promise<HttpResponse<T>> {
		try {
			const response = await fetch(request.url, {
				headers: request.headers,
				method: request.method,
				body: this.handleBody(request)
			});
			if (!response.ok) {
				throw new HttpError(await response.text(), response.status);
			}
			let body: T | null = null;
			if (response.body) {
				body = request.isJsonRequest() ? await response.json() : await response.text();
			}
			return {
				body: body || {} as T,
				status: response.status
			};
		} catch (error) {
			console.error(error);
			throw new HttpError("Could not complete request", 404);
		}
	}

}