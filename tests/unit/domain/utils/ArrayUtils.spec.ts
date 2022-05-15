import { ArrayUtils } from "@/domain/shared/utils/Array";

describe("Array utils unit tests", () => {
	describe("FindNextElement", () => {
		it("Should find next element of an array", () => {
			expect(ArrayUtils.getNextElement([
				{
					a: 1
				},
				{
					a: 2
				}
			], (v) => v.a === 1)).toMatchObject({
				a: 2
			});
		});

		it("Should circle in the array if last element is the current", () => {
			expect(ArrayUtils.getNextElement([
				{
					a: 1
				},
				{
					a: 2
				}
			], (v) => v.a === 2)).toMatchObject({
				a: 1
			});
		});
	});
});