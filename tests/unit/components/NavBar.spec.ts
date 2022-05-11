import { mount } from "@vue/test-utils";
import NavBar from "@/components/organisms/NavBar.vue";

describe("NavBar", () => {
	it("Should display the company name", () => {
		const sut = mount(NavBar).find("[data-test='enterprise-name']");
		expect(sut.text()).toBe("Vue sample");
	});

	it("Should display the nav items", () => {
		const sut = mount(NavBar);
		const elements = sut.findAll("[data-test='nav-list-item']");
		expect(elements.every(element => element.text().includes("Page"))).toBeTruthy();
	});
});