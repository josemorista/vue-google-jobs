import { HttpRequest } from "./HttpRequest";

export class HttpJsonRequest extends HttpRequest {
	constructor(
		url: string,
		headers: Record<string, string> = {},
		body: unknown = {},
		method: "GET" | "POST" | "PUT" | "DELETE" = "GET") {
		super(url, { ...headers, "Content-Type": "application/json" }, body, method);
	}
}