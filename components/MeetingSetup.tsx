import { useEffect, useState } from "react";
import {
	DeviceSettings,
	useCall,
	VideoPreview,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";

const MeetingSetup = ({
	setIsSetupComplete,
}: {
	setIsSetupComplete: (value: boolean) => void;
}) => {
	const [isMicCamToggled, setIsMicCamToggled] = useState(false);

	const call = useCall();

	if (!call) {
		throw new Error("useCall must be used within a StreamCall component.");
	}

	useEffect(() => {
		if (isMicCamToggled) {
			call?.camera.disable();
			call?.microphone.disable();
		} else {
			call?.camera.enable();
			call?.microphone.enable();
		}
	}, [isMicCamToggled, call?.camera, call?.microphone]);

	return (
		<div className="flex flex-col h-screen w-full items-center justify-center gap-3 text-white">
			<h1 className="text-center text-2xl font-bold">Setup</h1>

			<VideoPreview />

			<div className="flex h-16 items-center justify-center gap-3">
				<label className="flex items-center justify-center gap-3 font-medium">
					<input
						type="checkbox"
						checked={isMicCamToggled}
						onChange={(e) => setIsMicCamToggled(e.target.checked)}
						className="sr-only peer"
					/>
					<div className="w-3 h-3 bg-gray-300 rounded-full peer-focus:outline-none ring-4 ring-gray-300 peer-checked:bg-blue-600 transition-all duration-300" />
					Join with mic and camera off
				</label>
				<DeviceSettings />
			</div>

			<Button
				className="rounded-md bg-green-500 px-4 py-3"
				onClick={() => {
					call.join();

					setIsSetupComplete(true);
				}}>
				Join meeting
			</Button>
		</div>
	);
};

export default MeetingSetup;
