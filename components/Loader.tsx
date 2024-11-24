import Image from "next/image";

const Loader = ({ className }: { className?: string }) => {
	return (
		<div
			className={`flex items-center justify-center w-full ${
				className ? "h-full" : "h-screen"
			}`}>
			<Image
				src="/icons/loading-circle.svg"
				width={50}
				height={50}
				alt="Loading"
			/>
		</div>
	);
};

export default Loader;
