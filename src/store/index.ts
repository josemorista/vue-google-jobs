import { Job } from "@/domain/modules/jobs/entities/Job";
import { HttpJsonRequest } from "@/domain/shared/entities/HttpJsonRequest";
import { FetchHttpGetService } from "@/domain/shared/infra/fetch/adapters/FetchHttGetService";
import { createStore } from "vuex";
import { Actions } from "./actions";
import { Mutations } from "./mutations";

const getService = new FetchHttpGetService();

interface StoreState {
	jobs: Array<Job>;
}

const initialState: StoreState = {
	jobs: []
};

export const store = createStore({
	state: initialState,
	mutations: {
		[Mutations.SET_JOBS](state, jobs: Array<Job>) {
			state.jobs = jobs;
		}
	},
	actions: {
		async [Actions.FETCH_JOBS](context, page: number) {
			const request = new HttpJsonRequest(`${process.env.VUE_APP_API_URL}/jobs?_page=${page}&_limit=5`);
			const response = await getService.get<Array<Job>>(request);
			context.commit(Mutations.SET_JOBS, [...context.state.jobs, ...response.body]);
		}
	}
});