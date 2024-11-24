"use client";
import React, { useState } from "react";

import { useParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";

const Meeting = () => {
	const { id } = useParams();
	const { isLoaded } = useUser();
	const { call, isCallLoading } = useGetCallById(id!);

	const [isSetupComplete, setIsSetupComplete] = useState(false);

	if (!isLoaded || isCallLoading) return <Loader />;

	if (!call) {
		return (
			<p className="text-center text-3xl font-bold text-white">
				Call Not Found
			</p>
		);
	}

	//

	return (
		<main className="h-screen w-full">
			<StreamCall call={call}>
				<StreamTheme>
					{isSetupComplete ? (
						<MeetingRoom />
					) : (
						<MeetingSetup setIsSetupComplete={setIsSetupComplete} />
					)}
				</StreamTheme>
			</StreamCall>
		</main>
	);
};

export default Meeting;
