import StreamClientProvider from "@/providers/StreamClientProvider";
import { ReactNode } from "react";

const RootPageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main>
			<StreamClientProvider>{children}</StreamClientProvider>
		</main>
	);
};

export default RootPageLayout;
