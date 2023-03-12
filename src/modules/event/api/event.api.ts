import api from '../../../common/api/api';
import { Event } from '../../../common/interfaces';

const eventApi = api.injectEndpoints({
	endpoints: (build) => ({
		createEvent: build.mutation({
			invalidatesTags: ['Event'],
			query: (
				body: Pick<
					Event,
					'business' | 'date_end' | 'date_start' | 'description' | 'name' | 'tags' | 'time_end' | 'time_start'
				>,
			) => ({
				body,
				method: 'POST',
				url: 'event/event',
			}),
		}),
	}),
});

export const { useCreateEventMutation } = eventApi;
