import { mount } from "@vue/test-utils";
import NavBar from "@/components/organisms/NavBar.vue";

describe("NavBar", () => {
	it("Should display the company name", () => {
		const sut = mount(NavBar).find("[data-test='enterprise-name']");
		expect(sut.text()).toBe("Vue sample");
	});

	it("Should display the nav items", () => {
		const sut = mount(NavBar);
		const elements = sut.findAll("[data-test='nav-list-item']").map(el => el.text());
		expect(elements).toMatchObject([
			"Teams",
			"Locations",
			"Benefits",
			"Jobs",
			"Students"
		]);
	});

	describe("when the user is logged out", () => {
		it("Should prompts user to sign in", () => {
			const sut = mount(NavBar);
			const loginButton = sut.find("[data-test='navbar-signIn-button']");
			expect(loginButton.exists()).toBeTruthy();
		});
	});

	describe("when the user is logged", () => {
		it("Should show the user profile picture", async () => {
			const sut = mount(NavBar);
			const loginButton = sut.find("[data-test='navbar-signIn-button']");
			await loginButton.trigger("click");
			const profilePicture = sut.find("[data-test='navbar-profilePicture']");
			expect(profilePicture.exists()).toBeTruthy();
		});
	});
});