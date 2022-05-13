import { mount } from "@vue/test-utils";
import SubNav from "@/components/organisms/SubNav.vue";

describe("SubNav unit tests", () => {
	it("Should not display jobs matched when user is on homepage", async () => {
		const sut = mount(SubNav, {
			global: {
				stubs: {
					icon: true
				}
			}
		});
		await sut.setData({
			hideJobsMatched: true
		});
		expect(sut.find("[data-test='jobs-matched']").exists()).toBeFalsy();
	});
});