export class HttpRequest {
	constructor(
		public url: string,
		public headers: Record<string, string> = {},
		public body: any = {},
		readonly method: "GET" | "POST" | "PUT" | "DELETE" = "GET") {
	}

	isJsonRequest() {
		return !!this.headers["Content-Type"] && this.headers["Content-Type"].includes("application/json");
	}
}