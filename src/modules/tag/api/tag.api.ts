import api from '../../../common/api/api';
import { Tag } from '../../../common/interfaces';

const eventApi = api.injectEndpoints({
	endpoints: (build) => ({
		eventTags: build.query<Tag[], void>({
			providesTags: ['Tag'],
			query: () => 'tags/event_tag',
		}),
	}),
});

export const { useEventTagsQuery } = eventApi;
