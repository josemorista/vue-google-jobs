export class ArrayUtils {
	static getNextElement<T>(v: Array<T>, matchCurrentFunction: (v: T) => boolean) {
		const currentIndex = v.findIndex(matchCurrentFunction);
		return v[(currentIndex + 1) % v.length];
	}
}