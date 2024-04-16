"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";

export default function Page() {
	const [isConnected, setIsConnected] = useState(false);
	const [activeTab, setActiveTab] = useState("kanoi");
	const [show, setShow] = useState(false);
	const [stakeActiveTab, setStakeActiveTab] = useState([{ coin: "", duration: "" }]);
	const [stakeIsCollapse, setStakeIsCollapse] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
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
									className="rounded border-2 uppercase px-5 py-2.5 mb-2 text-center font-bold text-xs disabled:cursor-not-allowed transition-colors bg-[#e8833a] text-white border-white-200 hover:bg-[#e8833a] focus:bg-[#e8833a] hover:border-[#e8833a] hover:border-[#e8833a] disabled:bg-grey"
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
												<div className="flex mt-3 text-2xl font-bold uppercase text-bold">0 $KANOI</div>
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
												<div className="flex mt-3 text-2xl font-bold uppercase text-bold">0 $SAISEN</div>
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
												onClick={() => setActiveTab("kanoi")}
												className={`py-2 px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-sm h-[36px] max-h-[36px] border ${
													activeTab === "kanoi" ? "bg-blue-100 text-[#e8833a]" : "bg-white text-slate-500"
												}`}
												aria-current="page">
												KANOI
											</button>
										</div>
									</div>
									<div className="md:pl-1 md:pr-1 pl-0 pr-2">
										<div>
											<button
												onClick={() => setActiveTab("saisen")}
												className={`py-2 px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-sm h-[36px] max-h-[36px] border ${
													activeTab === "saisen" ? "bg-blue-100 text-[#e8833a]" : "bg-white text-slate-500"
												}`}
												aria-current="page">
												SAISEN
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
							<div className="flex flex-row flex-wrap !md:flex-nowrap items-start md:items-center">
								<div className="md:w-3/12 basis-[100%] md:basis-[auto] mb-6 md:mb-0 xl:mr-4">
									<div className="flex flex-col items-start xl:flex-row xl:items-center">
										<p className="text-xs uppercase md:hidden text-grey-light">asset</p>
										<div className="font-bold text-black uppercase text-xl xl:ml-3 xl:order-2">KANOI</div>
										<span
											className="lazy-load-image-background lazy-load-image-loaded"
											style={{
												color: "transparent",
												display: "inline-block",
												height: "147px",
												width: "147px",
											}}>
											<Image src="/apecoin-pool-image.png" className="h-[147px] w-[147px] max-w-none xl:order-1 rounded-lg" alt="NFT Asset" height="147" width="147" />
										</span>
									</div>
								</div>
								<div className="md:w-3/12 basis-[100%] md:basis-[auto] mb-6 md:mb-0">
									<div className="text-grey-light">Stake some $KANOI to start earning rewards.</div>
								</div>
								<div className="md:w-3/12 basis-[100%] md:basis-[auto] md:flex md:flex-row md:justify-end">
									<button
										onClick={handleShow}
										className="rounded border-2 uppercase px-5 py-2.5 mb-2 text-center font-bold text-xs disabled:cursor-not-allowed transition-colors bg-[#e8833a] text-white border-white-200 hover:bg-[#e8833a] focus:bg-[#e8833a] hover:border-[#e8833a] disabled:bg-grey w-full md:w-[150px]"
										type="button">
										<span className="flex items-center justify-center">
											<p className="mb-0">Stake</p>
										</span>
									</button>
								</div>
							</div>
						</div>
						<div className="p-4 mb-4 bg-white border rounded border-grey-200">
							<div className="flex flex-row flex-wrap !md:flex-nowrap items-start md:items-center">
								<div className="md:w-3/12 basis-[100%] md:basis-[auto] mb-6 md:mb-0 xl:mr-4">
									<div className="flex flex-col items-start xl:flex-row xl:items-center">
										<p className="text-xs uppercase md:hidden text-grey-light">asset</p>
										<div className="font-bold text-black uppercase text-xl xl:ml-3 xl:order-2">KANOI</div>
										<span
											className="lazy-load-image-background lazy-load-image-loaded"
											style={{
												color: "transparent",
												display: "inline-block",
												height: "147px",
												width: "147px",
											}}>
											<Image src="/apecoin-pool-image.png" className="h-[147px] w-[147px] max-w-none xl:order-1 rounded-lg" alt="NFT Asset" height="147" width="147" />
										</span>
									</div>
								</div>
								<div className="md:w-3/12 basis-[100%] md:basis-[auto] mb-6 md:mb-0">
									<div className="text-grey-light">Stake some $KANOI to start earning rewards.</div>
								</div>
								<div className="md:w-3/12 basis-[100%] md:basis-[auto] md:flex md:flex-row md:justify-end">
									<button
										onClick={() => setStakeIsCollapse(!stakeIsCollapse)}
										className="rounded border-2 uppercase px-5 py-2.5 mb-2 text-center font-bold text-xs disabled:cursor-not-allowed transition-colors bg-[#e8833a] text-white border-white-200 hover:bg-[#e8833a] focus:bg-[#e8833a] hover:border-[#e8833a] disabled:bg-grey w-full md:w-[150px]"
										type="button">
										<div className="flex items-center justify-center">MANAGE</div>
									</button>
								</div>
							</div>
							<Collapse in={stakeIsCollapse} className="mt-4">
								<div id="example-collapse-text" className="!visible">
									<div className="flex justify-end flex-col md:flex-row items-center gap-3">
										<div className="card flex flex-col justify-between !bg-blue-100 p-3 w-full md:w-3/12 min-h-56">
											<h6 className="mb-4">CLAIM REWARDS </h6>

											<div>
												<div className="mb-2 text-xs text-slate-500 font-medium">Unclaimed Balance: 10.87 Kanoi</div>

												<button className="rounded border-2 uppercase px-5 py-2.5 mb-2 text-center font-bold text-xs disabled:cursor-not-allowed transition-colors bg-[#e8833a] text-white border-white-200 hover:bg-[#e8833a] focus:bg-[#e8833a] hover:border-[#e8833a]  disabled:bg-grey w-full">
													CLAIM
												</button>
											</div>
										</div>
										<div className="card !bg-blue-100 p-3 w-full md:w-3/12 min-h-56">
											<h6 className="mb-4">WITHDRAW</h6>

											<div className="mb-2 text-xs text-slate-700 font-medium">Deposited Balance: 96 Kanoi</div>

											<div className="flex gap-2 mb-4">
												<input type="number" className="border-2 w-3/5 border-grey-200 focus:outline-none rounded-md p-2" />
												<button className="rounded border-2 w-2/5 uppercase p-2 text-center font-bold text-xs disabled:cursor-not-allowed transition-colors bg-[#e8833a] text-white border-white-200 hover:bg-[#e8833a] focus:bg-[#e8833a] hover:border-[#e8833a]  disabled:bg-grey">
													WITHDRAW
												</button>
											</div>
											<button className="rounded border-2 uppercase px-5 py-2.5 mb-2 text-center font-bold text-xs disabled:cursor-not-allowed transition-colors bg-[#e8833a] text-white border-white-200 hover:bg-[#e8833a] focus:bg-[#e8833a] hover:border-[#e8833a]  disabled:bg-grey w-full">
												WITHDRAW All
											</button>
										</div>
									</div>
								</div>
							</Collapse>
						</div>
					</div>
				</>
			)}

			{/* Modal  */}
			<Modal show={show} onHide={handleClose} size={"lg"} centered animation={true}>
				<Modal.Header className="border-0" closeButton>
					<Modal.Title></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4 className="text-center text-black font-bold">Stake</h4>

					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center gap-1">
							<div className="pool-img rounded-full">
								<Image src="/apecoin-pool-image.png" className="rounded-full" alt="NFT Asset" height="35" width="35" />
							</div>
							<div className="text-slate-700 font-medium">ILV Pool</div>
						</div>
						<div className="text-slate-500 font-normal">EST. APL-</div>
					</div>

					<div className="flex flex-row justify-start mb-4">
						<div className="md:pl-1 md:pr-1 pl-0 pr-2">
							<div>
								<button
									onClick={() => setStakeActiveTab((prev) => ({ ...prev, coin: "kanoi" }))}
									className={`py-2 px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-sm h-[36px] max-h-[36px] border ${
										stakeActiveTab.coin === "kanoi" ? "bg-blue-100 text-[#e8833a]" : "bg-white text-slate-500"
									}`}
									aria-current="page">
									KANOI
								</button>
							</div>
						</div>
						<div className="md:pl-1 md:pr-1 pl-0 pr-2">
							<div>
								<button
									onClick={() => setStakeActiveTab((prev) => ({ ...prev, coin: "saisen" }))}
									className={`py-2 px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-sm h-[36px] max-h-[36px] border ${
										stakeActiveTab.coin === "saisen" ? "bg-blue-100 text-[#e8833a]" : "bg-white text-slate-500"
									}`}
									aria-current="page">
									SAISEN
								</button>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-between mb-2">
						<div className="">Amount</div>
						<div className="flex items-center gap-1">
							<div className="font-bold text-black">Balance</div>
							<div className="font-normal text-slate-600">0.00 ILV</div>
						</div>
					</div>

					<div className="stake-amount mb-4">
						<input type="number" className="w-full border-2 border-grey-200 focus:outline-none rounded-md p-2" placeholder="Enter amount" />
					</div>

					<div className="text-black font-normal mb-2">Duration</div>

					<div className="flex flex-row justify-start flex-wrap gap-2 mb-4">
						<div className="md:pl-1 md:pr-1 pl-0 pr-2">
							<div>
								<button
									onClick={() => setStakeActiveTab((prev) => ({ ...prev, duration: "oneMonth" }))}
									className={`py-2  px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-xs h-[36px] max-h-[36px] border ${
										stakeActiveTab.duration === "oneMonth" ? "bg-blue-100 text-[#e8833a]" : "bg-white text-slate-500"
									}`}
									aria-current="page">
									1 Month
								</button>
							</div>
						</div>
						<div className="md:pl-1 md:pr-1 pl-0 pr-2">
							<div>
								<button
									onClick={() => setStakeActiveTab((prev) => ({ ...prev, duration: "threeMonth" }))}
									className={`py-2  px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-xs h-[36px] max-h-[36px] border ${
										stakeActiveTab.duration === "threeMonth" ? "bg-blue-100 text-[#e8833a]" : "bg-white text-slate-500"
									}`}
									aria-current="page">
									3 Month
								</button>
							</div>
						</div>
						<div className="md:pl-1 md:pr-1 pl-0 pr-2">
							<div>
								<button
									onClick={() => setStakeActiveTab((prev) => ({ ...prev, duration: "sixMonth" }))}
									className={`py-2  px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-xs h-[36px] max-h-[36px] border ${
										stakeActiveTab.duration === "sixMonth" ? "bg-blue-100 text-[#e8833a]" : "bg-white text-slate-500"
									}`}
									aria-current="page">
									6 Month
								</button>
							</div>
						</div>
						<div className="md:pl-1 md:pr-1 pl-0 pr-2">
							<div>
								<button
									onClick={() => setStakeActiveTab((prev) => ({ ...prev, duration: "sevenMonth" }))}
									className={`py-2  px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-xs h-[36px] max-h-[36px] border ${
										stakeActiveTab.duration === "sevenMonth" ? "bg-blue-100 text-[#e8833a]" : "bg-white text-slate-500"
									}`}
									aria-current="page">
									12 Month
								</button>
							</div>
						</div>
						<div className="md:pl-1 md:pr-1 pl-0 pr-2">
							<div>
								<button
									onClick={() => setStakeActiveTab((prev) => ({ ...prev, duration: "custom" }))}
									className={`py-2  px-4 border-grey-light font-bold uppercase rounded-lg rounded-tab text-xs h-[36px] max-h-[36px] border ${
										stakeActiveTab.duration === "custom" ? "bg-blue-100 text-[#e8833a]" : "bg-white text-slate-500"
									}`}
									aria-current="page">
									Custom
								</button>
							</div>
						</div>
					</div>

					<button
						onClick={handleClose}
						className="rounded border-2 uppercase px-5 py-2.5 mb-2 text-center font-bold text-xs disabled:cursor-not-allowed transition-colors bg-[#e8833a] text-white border-white-200 hover:bg-[#e8833a] focus:bg-[#e8833a] hover:border-[#e8833a]  disabled:bg-grey w-full"
						type="button">
						Stake
					</button>
				</Modal.Body>
			</Modal>
		</div>
	);
}
