import { mount } from "@vue/test-utils";
import Button from "@/components/atoms/Button.vue";

describe("Button unit tests", () => {
	it("Should display button text", async () => {
		const sut = mount(Button);
		await sut.setProps({
			buttonText: "I'm a Button"
		});
		expect(sut.text()).toBe("I'm a Button");
	});

	it("Should display a primary button", async () => {
		const sut = mount(Button);
		await sut.setProps({
			variant: "primary"
		});
		expect(sut.find("button").classes("primary")).toBeTruthy();
	});

	it("Should display a secondary button", async () => {
		const sut = mount(Button);
		await sut.setProps({
			variant: "secondary"
		});
		expect(sut.find("button").classes("secondary")).toBeTruthy();
	});
});