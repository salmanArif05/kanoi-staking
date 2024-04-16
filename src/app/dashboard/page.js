"use client";

import { useState } from "react";

export default function Page() {
	const [isConnected, setIsConnected] = useState(false);
	const [activeTab, setActiveTab] = useState("apecoin");
	return (
		<div className="flex-grow dashboard-bg pb-[100px] overflow-y-auto">
			{!isConnected && (
				<main>
					<div className="container py-5">
						<div className="flex flex-col px-5 py-5 mt-5 text-center text-black border rounded">
							<h1 className="mt-5 mb-2 text-4xl font-bold uppercase font-header">Connect your wallet</h1>
							<p className="my-5 text-xl text-grey-light">As you probably guessed, you will need to connect your wallet in order to start staking.</p>
							<div>
								<button
									onClick={() => setIsConnected(true)}
									className="rounded border-2 uppercase px-5 py-2.5 mb-2 text-center font-bold text-xs disabled:cursor-not-allowed transition-colors bg-[#0043e5] text-white border-white-200 hover:bg-[#0043e5] focus:bg-[#0043e5] hover:border-[#0043e5] hover:border-[#0043e5] disabled:bg-grey"
									type="button">
									connect wallet
								</button>
							</div>
						</div>
					</div>
				</main>
			)}
			{isConnected && (
				<>
					<div className="container py-5">
						<div className="hidden md:block">
							<div className="container py-5 mb-12 ">
								<div className="py-5 uppercase">
									<div className="flex flex-row ">
										<div className="w-full md:w-1/3 pr-6">
											<div className="pr-3 text-black">
												<h1 className="text-3xl font-bold uppercase font-header">Dashboard</h1>
												<p className="mt-3 text-base font-normal normal-case text-grey-light">
													Provided is an overview of all of your staked positions. Enter into new positions and manage existing positions by depositing, withdrawing, and claiming rewards.
												</p>
											</div>
										</div>
										<div className="w-full md:w-1/3 px-6">
											<div className="px-5 py-5 uppercase bg-white border rounded-lg border-grey-200">
												<div className="flex text-xs text-gray-400 flex-inline">
													<p className="text-grey-light">Total Deposited</p>
													<div className="relative">
														<button className="px-1" id="headlessui-popover-button-:r24b:" type="button">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
																	stroke="#F6688C"
																	stroke-linecap="round"
																	stroke-linejoin="round"></path>
																<path d="M8 7.33398V10.6673" stroke="#F6688C" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M7.9668 5.33398H8.03346V5.40065H7.9668V5.33398Z" stroke="#F6688C" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
														</button>
													</div>
												</div>
												<div className="flex mt-3 text-2xl font-bold uppercase text-bold">0 $APE</div>
												<div className="flex text-sm text-gray-400">
													<p className="text-grey-light">$0.00</p>
												</div>
											</div>
										</div>
										<div className="w-full md:w-1/3 pl-6">
											<div className="px-5 py-5 uppercase bg-white border rounded-lg border-grey-200">
												<div className="flex text-xs text-gray-400 flex-inline">
													<p className="text-grey-light">Unclaimed Rewards</p>
													<div className="relative">
														<button className="px-1" id="headlessui-popover-button-:r24e:" type="button">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
																	stroke="#F6688C"
																	stroke-linecap="round"
																	stroke-linejoin="round"></path>
																<path d="M8 7.33398V10.6673" stroke="#F6688C" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M7.9668 5.33398H8.03346V5.40065H7.9668V5.33398Z" stroke="#F6688C" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
														</button>
													</div>
												</div>
												<div className="flex mt-3 text-2xl font-bold uppercase text-bold">0 $APE</div>
												<div className="flex text-sm text-gray-400">
													<p className="text-grey-light">$0.00</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex  flex-col justify-start my-6 md:flex-row md:items-center">
							<div className="w-auto">
								<h1 className="mt-1 md:mr-3 py-3 md:py-0 text-2xl font-bold uppercase text-grey-dark">Pools:</h1>
							</div>
							<div className="w-auto flex-grow">
								<div className="flex flex-row justify-start">
									<div className="md:pl-1 md:pr-1 pl-0 pr-2">
										<div>
											<button
												onClick={() => setActiveTab("apecoin")}
												class={`py-2 px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-sm h-[36px] max-h-[36px] border ${
													activeTab === "apecoin" ? "bg-blue-100 text-[#0043e5]" : "bg-white text-slate-500"
												}`}
												aria-current="page">
												Apecoin
											</button>
										</div>
									</div>
									<div className="md:pl-1 md:pr-1 pl-0 pr-2">
										<div>
											<button
												onClick={() => setActiveTab("bayc")}
												class={`py-2 px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-sm h-[36px] max-h-[36px] border ${
													activeTab === "bayc" ? "bg-blue-100 text-[#0043e5]" : "bg-white text-slate-500"
												}`}
												aria-current="page">
												BAYC
											</button>
										</div>
									</div>
									<div className="md:pl-1 md:pr-1 pl-0 pr-2">
										<div>
											<button
												onClick={() => setActiveTab("mayc")}
												class={`py-2 px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-sm h-[36px] max-h-[36px] border ${
													activeTab === "mayc" ? "bg-blue-100 text-[#0043e5]" : "bg-white text-slate-500"
												}`}
												aria-current="page">
												MAYC
											</button>
										</div>
									</div>
									<div className="md:pl-1 md:pr-1 pl-0 pr-2">
										<div>
											<button
												onClick={() => setActiveTab("paired")}
												class={`py-2 px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-sm h-[36px] max-h-[36px] border ${
													activeTab === "paired" ? "bg-blue-100 text-[#0043e5]" : "bg-white text-slate-500"
												}`}
												aria-current="page">
												Paired
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="w-auto"></div>
							<div className="w-auto"></div>
						</div>
						<div className="hidden md:block">
							<div className="px-4">
								<div className="flex flex-row flex-wrap md:flex-nowrap items-start md:items-center ">
									<div className="md:w-3/12 basis-[50%] md:basis-[auto] mb-6 md:mb-0 xl:mr-4">
										<div className="flex pb-2 text-xs uppercase text-grey-light">
											<p>Asset</p>
										</div>
									</div>
									<div className="md:w-2/12 basis-[50%] md:basis-[auto] mb-6 md:mb-0">
										<div className="flex pb-2 text-xs uppercase text-grey-light">
											<p>Rewards 24H</p>
											<div className="relative">
												<button className="px-1" id="headlessui-popover-button-:r242:" type="button" aria-expanded="false">
													<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
															stroke="#F6688C"
															stroke-linecap="round"
															stroke-linejoin="round"></path>
														<path d="M8 7.33398V10.6673" stroke="#F6688C" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M7.9668 5.33398H8.03346V5.40065H7.9668V5.33398Z" stroke="#F6688C" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</button>
											</div>
										</div>
									</div>
									<div className="md:w-2/12 basis-[50%] md:basis-[auto] mb-6 md:mb-0">
										<div className="flex pb-2 text-xs uppercase text-grey-light">
											<p>Unclaimed</p>
											<div className="relative">
												<button className="px-1" id="headlessui-popover-button-:r245:" type="button" aria-expanded="false">
													<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
															stroke="#F6688C"
															stroke-linecap="round"
															stroke-linejoin="round"></path>
														<path d="M8 7.33398V10.6673" stroke="#F6688C" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M7.9668 5.33398H8.03346V5.40065H7.9668V5.33398Z" stroke="#F6688C" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</button>
											</div>
										</div>
									</div>
									<div className="md:w-2/12 basis-[50%] md:basis-[auto] mb-6 md:mb-0">
										<div className="flex pb-2 text-xs uppercase text-grey-light">
											<p>Deposited</p>
											<div className="relative">
												<button className="px-1" id="headlessui-popover-button-:r248:" type="button" aria-expanded="false">
													<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
															stroke="#F6688C"
															stroke-linecap="round"
															stroke-linejoin="round"></path>
														<path d="M8 7.33398V10.6673" stroke="#F6688C" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M7.9668 5.33398H8.03346V5.40065H7.9668V5.33398Z" stroke="#F6688C" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
												</button>
											</div>
										</div>
									</div>
									<div className="md:w-3/12 basis-[100%] md:basis-[auto] md:flex md:flex-row md:justify-end"></div>
								</div>
							</div>
						</div>
						<div className="p-4 mb-4 bg-white border rounded border-grey-200">
							<div className="flex flex-row md:flex-nowrap items-start md:items-center ">
								<div className="md:w-3/12 basis-[100%] md:basis-[auto] mb-6 md:mb-0 xl:mr-4">
									<div className="flex flex-col items-start xl:flex-row xl:items-center">
										<p className="text-xs uppercase md:hidden text-grey-light">asset</p>
										<div className="font-bold text-black uppercase text-xl xl:ml-3 xl:order-2">APE</div>
										<span
											className="lazy-load-image-background lazy-load-image-loaded"
											style={{
												color: "transparent",
												display: "inline-block",
												height: "147px",
												width: "147px",
											}}>
											<img src="/apecoin-pool-image.png" className="h-[147px] w-[147px] max-w-none xl:order-1 rounded-lg" alt="NFT Asset" height="147" width="147" />
										</span>
									</div>
								</div>
								<div className="md:w-1/2 basis-[100%] md:basis-[auto] mb-6 md:mb-0">
									<div className="text-grey-light">Stake some $APE to start earning rewards.</div>
								</div>
								<div className="md:w-3/12 basis-[100%] md:basis-[auto] md:flex md:flex-row md:justify-end">
									<button
										data-bs-toggle="modal"
										data-bs-target="#exampleModal"
										className="rounded border-2 uppercase px-5 py-2.5 mb-2 text-center font-bold text-xs disabled:cursor-not-allowed transition-colors bg-[#0043e5] text-white border-white-200 hover:bg-[#0043e5] focus:bg-[#0043e5] hover:border-[#0043e5] hover:border-[#0043e5] disabled:bg-grey w-full md:w-[150px]"
										type="button">
										<span className="flex items-center justify-center">
											<p className="mb-0">Stake</p>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}

			{/* Modal  */}
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="exampleModalLabel">
								Modal title
							</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">...</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
								Close
							</button>
							<button type="button" class="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
