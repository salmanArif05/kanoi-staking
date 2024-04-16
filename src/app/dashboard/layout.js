export default function Layout({ children }) {
	return (
		<>
			<div className="flex md:h-screen flex-col md:overflow-x-hidden">{children}</div>
		</>
	);
}
