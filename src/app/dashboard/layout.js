export default function Layout({ children }) {
	return (
		<>
			<div className="flex h-screen flex-col md:overflow-hidden">{children}</div>
		</>
	);
}
