import { useEffect, useState } from "react";

import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useGetCalls = () => {
	const [calls, setCalls] = useState<Call[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const { user } = useUser();
	const client = useStreamVideoClient();

	useEffect(() => {
		if (!client || !user?.id) return;

		const loadCalls = async () => {
			try {
				setIsLoading(true);

				const { calls } = await client?.queryCalls({
					filter_conditions: {
						starts_at: { $exists: true },
						$or: [
							{ created_by_user_id: user.id },
							{ members: { $in: [user.id] } },
						],
					},
					sort: [{ field: "starts_at", direction: -1 }],
				});

				setCalls([...calls]);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		loadCalls();
	}, [client, user?.id]);

	const now = new Date();

	const endedCalls = calls.filter(({ state: { startsAt, endedAt } }: Call) => {
		return (startsAt && new Date(startsAt) < now) || !!endedAt;
	});

	const upcomingCalls = calls.filter(({ state: { startsAt } }: Call) => {
		return startsAt && new Date(startsAt) > now;
	});

	return { callRecordings: calls, endedCalls, upcomingCalls, isLoading };
};
