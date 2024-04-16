"use client";

import { useState } from "react";

export default function Page() {
	const [activeTab, setActiveTab] = useState("nft");

	return (
		<div className="market-bg">
			<div class="flex-grow mb-28">
				<main>
					<div class="container px-5 py-5 mx-auto">
						<div class="container flex flex-col flex-wrap justify-between">
							<div class="py-[14px] basis-1">
								<h1 class="text-3xl font-bold text-center text-black uppercase font-header">Market Tools</h1>
							</div>
							<div class="py-[14px] basis-1">
								<p class="max-w-2xl mx-auto text-center text-slate-500 text-xl">
									Use ApeStake.io’s Market Tools search feature to see whether a BAYC, MAYC, or BAKC is committed to a staking position, how much $APE is staked with it, and the associated wallet
									address.
								</p>
							</div>
						</div>
						<div class="container flex flex-col items-center justify-center text-center py-7">
							<div class="flex flex-col justify-center w-full md:w-2/3 max-w-[550px]">
								<div class="flex justify-start px-2 py-1">
									<div class="mr-1">
										<div>
											<button
												onClick={() => setActiveTab("nft")}
												class={`py-2 px-4 border-blue-100 font-bold uppercase rounded-lg rounded-tab text-sm h-[36px] max-h-[36px] border ${
													activeTab === "nft" ? "bg-blue-100 text-[#0043e5]" : "bg-white text-slate-500"
												}`}
												aria-current="page">
												By NFT ID
											</button>
										</div>
									</div>
									<div>
										<button
											onClick={() => setActiveTab("address")}
											class={`py-2 px-4 text-slate-500 hover:text-slate-600 border-grey-light font-bold uppercase rounded-lg rounded-tab text-sm h-[36px] max-h-[36px] border ${
												activeTab === "address" ? "bg-blue-100 text-[#0043e5]" : "bg-white text-slate-500"
											}`}
											aria-current="page">
											By Address
										</button>
									</div>
								</div>
								<form class="flex flex-col w-full px-2 py-3 md:flex-row">
									<div class="mt-1 md:mr-3 md:mt-0 md:basis-full w-3/5">
										<input
											type="text"
											placeholder={activeTab === "nft" ? "Paste NFT ID" : "Paste Address"}
											id="initial-stake-deposit-searchNftId"
											class="rounded-lg border-1 focus:outline-none focus:ring-[#0043e5] focus:border-[#0043e5] block w-full text-sm border-grey-light/[.2] p-2 w-full px-3 py-2 text-slate-600 mb-4 md:mb-0"
											name="nftId"
										/>
										<p class="mt-1">&nbsp;</p>
									</div>
									<div class="w-full md:w-2/5 md:shrink-0">
										<button
											class="rounded border-2 uppercase px-5 py-2.5 mb-2 text-center font-bold text-xs disabled:cursor-not-allowed transition-colors bg-[#0043e5] text-white border-white-200 hover:bg-[#0043e5] focus:bg-[#0043e5] hover:border-[#0043e5] hover:border-[#0043e5] disabled:bg-grey w-full"
											type="submit">
											Check Value
										</button>
									</div>
								</form>
							</div>
							<div class="container flex flex-col flex-wrap justify-center py-5 my-5 lg:flex-row">
								<p class="text-center text-slate-500 text-lg">There are no staking positions or NFTs that match your search criteria</p>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
