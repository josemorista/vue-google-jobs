import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Hero from "@/components/organisms/Hero.vue";

describe("Hero unit tests", () => {
	it("Should change headline over time", async () => {
		jest.useFakeTimers("modern");
		jest.spyOn(globalThis, "setInterval");

		const sut = mount(Hero);
		jest.runOnlyPendingTimers();
		expect(setInterval).toHaveBeenCalled();

		const heroTitle = sut.find("[data-test='hero-title']");
		await nextTick();

		expect(heroTitle.text()).toBe("Create");

		jest.useRealTimers();
	});
});