import Image from "next/image";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

type MeetingCardProps = {
	icon: string;
	title: string;
	date: string;
	isPreviousMeeting: boolean;
	buttonIcon1?: string;
	buttonText?: string;
	handleClick: () => void;
	link: string;
};

const MeetingCard = ({
	icon,
	title,
	date,
	isPreviousMeeting,
	buttonIcon1,
	buttonText,
	handleClick,
	link,
}: MeetingCardProps) => {
	const { toast } = useToast();

	return (
		<div className="flex w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-5 xl:max-w-[568px] gap-3">
			<div className="flex flex-col gap-5">
				<Image src={icon} width={28} height={28} alt="upcoming" />

				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold truncate">{title}</h1>
					<p className="text-base font-normal">{date}</p>
				</div>
			</div>

			{!isPreviousMeeting && (
				<div className="flex gap-2">
					<Button onClick={handleClick} className="rounded bg-blue-1 px-6">
						{buttonIcon1 && (
							<Image src={buttonIcon1} alt="feature" width={20} height={20} />
						)}
						&nbsp; {buttonText}
					</Button>

					<Button
						onClick={() => {
							navigator.clipboard.writeText(link);
							toast({
								title: "Link Copied",
							});
						}}
						className="bg-dark-4 px-6">
						<Image src="/icons/copy.svg" alt="feature" width={20} height={20} />
						&nbsp; Copy Link
					</Button>
				</div>
			)}
		</div>
	);
};

export default MeetingCard;
