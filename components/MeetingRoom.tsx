import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

import {
	CallControls,
	CallParticipantsList,
	CallStatsButton,
	PaginatedGridLayout,
	SpeakerLayout,
} from "@stream-io/video-react-sdk";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Users } from "lucide-react";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
	const router = useRouter();

	const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
	const [showParticipants, setShowParticipants] = useState(false);

	const searchParams = useSearchParams();
	const isPersonalRoom = !!searchParams.get("personal");

	const CallLayout = () => {
		switch (layout) {
			case "grid":
				return <PaginatedGridLayout />;
			case "speaker-right":
				return <SpeakerLayout participantsBarPosition={"left"} />;
			default:
				return <SpeakerLayout participantsBarPosition={"right"} />;
		}
	};

	return (
		<section className="relative h-screen w-full overflow-hidden pt-4 text-white">
			<div className="relative flex size-full items-center justify-center">
				<div className=" flex size-full max-w-[1000px] items-center">
					<CallLayout />
				</div>

				<div
					className={cn("h-[calc(100vh-86px)] hidden ml-2", {
						"show-block": showParticipants,
					})}>
					<CallParticipantsList onClose={() => setShowParticipants(false)} />
				</div>
			</div>

			<div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
				<CallControls onLeave={() => router.push("/")} />

				<DropdownMenu>
					<div className="flex items-center">
						<DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
							<LayoutList size={20} className="text-white" />
						</DropdownMenuTrigger>
					</div>

					<DropdownMenuContent className="w-44 bg-dark-1 border border-dark-1 shadow-lg rounded-lg  text-sm text-white transform transition-all duration-200 ease-out">
						{["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
							<div key={index}>
								<DropdownMenuItem
									onClick={() =>
										setLayout(item.toLowerCase() as CallLayoutType)
									}
									className="cursor-pointer px-4 py-2 my-2 hover:bg-gray-700 rounded-md transition-all duration-200 ease-out">
									{item}
								</DropdownMenuItem>
								{index < 2 && (
									<DropdownMenuSeparator className="my-1 mx-4 border-t border-gray-600" />
								)}
							</div>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				<CallStatsButton />

				<button onClick={() => setShowParticipants((prev) => !prev)}>
					<div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
						<Users size={20} />
					</div>
				</button>

				{!isPersonalRoom && ""}
			</div>
		</section>
	);
};

export default MeetingRoom;
