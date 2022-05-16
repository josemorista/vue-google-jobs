import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Hero from "@/components/organisms/Hero.vue";

describe("Hero unit tests", () => {
	beforeEach(() => {
		jest.useFakeTimers("modern");
		jest.spyOn(globalThis, "setInterval");
		jest.spyOn(globalThis, "clearInterval");
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it("Should change headline over time", async () => {

		const sut = mount(Hero);
		jest.runOnlyPendingTimers();
		expect(setInterval).toHaveBeenCalled();

		const heroTitle = sut.find("[data-test='hero-title']");
		await nextTick();

		expect(heroTitle.text()).toBe("Create");
	});

	it("Should clear interval on unmount", async () => {
		const sut = mount(Hero);
		sut.unmount();
		expect(clearInterval).toHaveBeenCalled();
	});
});