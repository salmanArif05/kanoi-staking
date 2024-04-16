import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import Image from "next/image";

export default function Home() {
	const stakeWays = [
		{
			id: "01",
			title: "APECOIN ($APE) POOL",
			description: "As long as you have $APE in your wallet, you can stake and start accruing rewards. No NFTs required. The total staking allocation for the $APE pool is 30,000,000 $APE.",
			img: "/apeCoin.png",
		},
		{
			id: "02",
			title: "BORED APE (BAYC) POOL",
			description:
				"The BAYC pool represents the highest of the staking pools with a maximum stake up to 10,094 $APE for each BAYC you own. The total staking pool for Apes runs deep at 47,105,000 $APE for Year 1.",
			img: "/apeCoin.png",
		},
		{
			id: "03",
			title: "MUTANT (MAYC) POOL",
			description: "The MAYC pool lets you stake up to 2,042 $APE for each MAYC you own. The total staking pool for Mutants tops out at 19,060,000 $APE for Year 1.",
			img: "/apeCoin.png",
		},
		{
			id: "04",
			title: "PAIRED (BAKC) POOL",
			description:
				"The Paired pool works differently. A Dog (BAKC) cannot be staked alone and must be paired with a Bored Ape or a Mutant. The total staking pool for a BAKC pairing is 3,835,000 $APE for Year 1.",
			img: "/apeCoin.png",
		},
	];
	const faqs = [
		{
			question: "WHAT IS APESTAKE.IO?",
			answer: `ApeStake.io is the official staking protocol for ApeCoin ($APE) established by the ApeCoin DAO (ApeDAO) and was created as a way for $APE, BAYC, MAYC, and BAKC holders to earn rewards through staking. $APE can be staked by itself or in conjunction with a BAYC, MAYC, or BAKC in one of the four staking pools, with each pool offering different levels of rewards.
      The ApeStake.io protocol was proposed in AIPs 21 and 22 and subsequently approved by the community on May 4, 2022. Following approval, the Ape Foundation enlisted Horizen Labs to provide a platform for the staking protocol according to the specifications set forth in the AIPs.

      To help clarify terminology, the AIPs provided definitions for some important terms:

      Staking Pools: The total ApeCoin pools that participants can earn from.

      Staking Pool Type: The pool is specifically assigned to a digital asset class; there are four in total.

      Staking Period: Each period is 12 months.

      Staking Pool Allocations: The total amount of ApeCoin allocated to each Staking Pool Type per period.

      Total Staking Period: A total of three (3) years.

      Initial Staking Period: The first 12-month period of staking.

      Pool Distribution: The spread of the staking allocation assigned across the period.

      Incentive Distribution Curve: The schedule of ApeCoin allocated for incentives per quarter.`,
		},
		{
			question: "WHAT BROWSERS AND DEVICES SUPPORT APESTAKE.IO?",
			answer: `ApeStake.io is the official staking protocol for ApeCoin ($APE) established by the ApeCoin DAO (ApeDAO) and was created as a way for $APE, BAYC, MAYC, and BAKC holders to earn rewards through staking. $APE can be staked by itself or in conjunction with a BAYC, MAYC, or BAKC in one of the four staking pools, with each pool offering different levels of rewards.`,
		},
		{
			question: "WHAT BROWSERS AND DEVICES SUPPORT APESTAKE.IO?",
			answer: `ApeStake.io is the official staking protocol for ApeCoin ($APE) established by the ApeCoin DAO (ApeDAO) and was created as a way for $APE, BAYC, MAYC, and BAKC holders to earn rewards through staking. $APE can be staked by itself or in conjunction with a BAYC, MAYC, or BAKC in one of the four staking pools, with each pool offering different levels of rewards.`,
		},
		{
			question: "WHAT BROWSERS AND DEVICES SUPPORT APESTAKE.IO?",
			answer: `ApeStake.io is the official staking protocol for ApeCoin ($APE) established by the ApeCoin DAO (ApeDAO) and was created as a way for $APE, BAYC, MAYC, and BAKC holders to earn rewards through staking. $APE can be staked by itself or in conjunction with a BAYC, MAYC, or BAKC in one of the four staking pools, with each pool offering different levels of rewards.`,
		},
		{
			question: "WHAT BROWSERS AND DEVICES SUPPORT APESTAKE.IO?",
			answer: `ApeStake.io is the official staking protocol for ApeCoin ($APE) established by the ApeCoin DAO (ApeDAO) and was created as a way for $APE, BAYC, MAYC, and BAKC holders to earn rewards through staking. $APE can be staked by itself or in conjunction with a BAYC, MAYC, or BAKC in one of the four staking pools, with each pool offering different levels of rewards.`,
		},
	];
	return (
		<>
			{/* Banner */}
			<section className="banner-section">
				<div className="container min-h-screen">
					<div className="row !items-center">
						<div className="col-md-6">
							<div className="banner-image">
								<Image src="/ape-banner.png" alt="Banner" width={500} height={500} />
							</div>
						</div>
						<div className="col-md-5">
							<div className="banner-text">
								<h1 className="text-black text-5xl font-bold">STAKE YOUR APE AND EARN REWARDS</h1>
								<p className="lg:max-w-[488px] text-[#293740]">
									Apes might get bored but ApeCoins love to stay busy. Whether you’re an <strong> OG Ape</strong> holder or just bought your first <strong> $APE</strong>, get your assets in gear and
									start staking.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Stake */}
			<section className="stake pb-[100px]">
				<div className="container">
					<h1 className="text-black text-3xl font-bold mb-5">STAKE IN FOUR DIFFERENT WAYS</h1>
					<div className="row mb-12">
						{stakeWays.map((way) => (
							<div className="col-md-6 mt-4 pb-5" key={way.id}>
								<div className="stake-card">
									<div className="flex items-center gap-2">
										<h4 className="text-[#f6688c] font-header font-bold text-xl mr-2 lg:leading-8">{way.id}</h4>
										<h3 className="text-black font-bold">{way.title}</h3>
									</div>
									<p className="mb-8 text-grey-light text-base leading-5 w-75">{way.description}</p>
									<div>
										<div class="inline-block ">
											<picture>
												<Image src={way.img} alt="Coin/NFT icon" width="60" height="60" />
											</picture>
										</div>
										<div class="inline-block -translate-x-[1.5rem]">
											<picture>
												<Image src={way.img} alt="Coin/NFT icon" width="60" height="60" />
											</picture>
										</div>
										<div class="inline-block -translate-x-[3rem]">
											<picture>
												<Image src={way.img} alt="Coin/NFT icon" width="60" height="60" />
											</picture>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="text-center">
						<button className="btn btn-primary text-uppercase !bg-[#0043e5] !font-bold !px-7 py-2">Start Staking</button>
					</div>
				</div>
			</section>
			{/* Faq's */}
			<section className="faqs pb-[100px]">
				<div className="container">
					<h1 className="text-black text-3xl font-bold mb-5">FREQUENTLY ASKED QUESTIONS</h1>
					<div class="accordion accordion-flush" id="accordionFlushExample">
						{faqs.map((faq, index) => (
							<div className="accordion-item" key={index}>
								<h2 className="accordion-header" id={`flush-heading-${index}`}>
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target={`#flush-collapse-${index}`}
										aria-expanded="false"
										aria-controls={`flush-collapse-${index}`}>
										{faq.question}
										<i className="bi bi-chevron-down"></i>
									</button>
								</h2>
								<div id={`flush-collapse-${index}`} className="accordion-collapse collapse !visible" aria-labelledby={`flush-heading-${index}`} data-bs-parent="#accordionFlushExample">
									<div className="accordion-body">{faq.answer}</div>
								</div>
							</div>
						))}
					</div>
					<div className="text-center mt-8">
						<button className="btn btn-primary text-uppercase !bg-[#0043e5] !font-bold !px-7 py-2">See All</button>
					</div>
				</div>
			</section>
		</>
	);
}
