"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const DashboardNavbar = () => {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState("Dashboard");
	const tabsTitle = ["Dashboard", "Pools Info", "Market Tools"];
	console.log(router.pathname, "router.pathname");
	return (
		<>
			<div className="home-nav">
				<div className="container">
					<div className="flex justify-between items-center w-full py-6">
						{/* logo */}
						<Link href={"/"} className="text-black text-2xl font-bold text-decoration-none">
							KanoiStake
						</Link>
						{/* tabs */}
						{router.pathname === "/dashboard" && (
							<div className="bg-white shadow-md rounded-lg p-2">
								<ul class="nav nav-tabs border-0">
									{tabsTitle.map((tab, index) => (
										<li class="nav-item" key={index}>
											<a class={`nav-link text-uppercase  ${activeTab === tab ? "active" : ""}`} aria-current="page" href="#" onClick={() => setActiveTab(tab)}>
												{tab}
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
						{/* tabs */}
						{router.pathname === "/dashboard" ? (
							<button className="btn btn-primary !bg-[#0043e5] font-bold !px-10 py-2">Connect Wallet</button>
						) : (
							<Link href={"/dashboard"} className="btn btn-primary text-uppercase font-bold !bg-[#0043e5] !px-10 py-2">
								Launch App
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardNavbar;
