import { Job } from "@/domain/modules/jobs/entities/Job";
import { HttpJsonRequest } from "@/domain/shared/entities/HttpJsonRequest";
import { FetchHttpGetService } from "@/domain/shared/infra/fetch/adapters/FetchHttGetService";
import { createStore } from "vuex";
import { Actions } from "./actions";
import { Mutations } from "./mutations";

const getService = new FetchHttpGetService();

interface StoreState {
	jobs: Array<Job>;
	currentPage: number;
	filters: {
		organizations: Array<string>
	};
}

const initialState: StoreState = {
	jobs: [],
	currentPage: 0,
	filters: {
		organizations: []
	}
};

export const store = createStore({
	state: initialState,
	mutations: {
		[Mutations.SET_JOBS](state, jobs: Array<Job>) {
			state.jobs = jobs;
		},
		[Mutations.ADD_ORGANIZATION_FILTER](state, organization: string) {
			state.filters.organizations.push(organization);
		},
		[Mutations.DROP_ORGANIZATION_FILTER](state, organization: string) {
			state.filters.organizations = state.filters.organizations.filter(el => el !== organization);
		},
		[Mutations.SET_CURRENT_PAGE](state, page) {
			state.currentPage = page;
		}
	},
	actions: {
		async [Actions.FETCH_JOBS](context, page: number) {
			if (!this.state.jobs.length) {
				const request = new HttpJsonRequest(`${process.env.VUE_APP_API_URL}/jobs`);
				const response = await getService.get<Array<Job>>(request);
				context.commit(Mutations.SET_JOBS, response.body);
			} else {
				context.commit(Mutations.SET_CURRENT_PAGE, page);
			}
		}
	},
	getters: {
		organizations(state) {
			const organizations = new Set<string>();
			state.jobs.forEach(job => organizations.add(job.organization));
			return [...organizations];
		},
		filteredJobs(state) {
			const jobs = (!state.filters.organizations.length) ? state.jobs : state.jobs.filter(el => {
				const organizationsFilters = state.filters.organizations;
				return organizationsFilters.includes(el.organization);
			});
			return jobs.slice(0, (state.currentPage + 1) * 5);
		}
	}
});