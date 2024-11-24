import { useEffect, useState } from "react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useGetCallById = (id: string | string[]) => {
	const [call, setCall] = useState<Call>();
	const [isCallLoading, setIsCallLoading] = useState(false);

	const client = useStreamVideoClient();

	useEffect(() => {
		if (!client) return;

		setIsCallLoading(true);

		const loadCall = async () => {
			try {
				const { calls } = await client.queryCalls({
					filter_conditions: { id },
				});

				if (calls.length > 0) setCall(calls[0]);
			} catch (error) {
				console.error(error);
			} finally {
				setIsCallLoading(false);
			}
		};

		loadCall();
	}, [client, id]);

	return { call, isCallLoading };
};
