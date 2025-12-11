import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
 const videoRef = useRef();
 
 const isMobile = useMediaQuery({ maxWidth: 767 });
 
 useGSAP(() => {
	const heroSplit = new SplitText(".title", {
	 type: "chars, words",
	});
	
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines",
	});
	
	// Apply text-gradient class once before animating
	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
	
	gsap.from(heroSplit.chars, {
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	});
	
	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	 delay: 1,
	});
	
	gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
	 },
	})
	.to(".right-leaf", { y: 200 }, 0)
	.to(".left-leaf", { y: -200 }, 0)
	.to(".arrow", { y: 100 }, 0);
	
	const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";
	
	let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};
 }, []);
 
 return (
	<>
	 <section id="hero">
		<h1 className="title">VALOVIE</h1>
		
		{/* <img
		 src="/logo/game.png"
		 alt="left-leaf"
		 className="left-leaf opacity-50 h-64"
		/>
		<img
		 src="/logo/game.png"
		 alt="right-leaf"
		 className="right-leaf opacity-50  h-64"
		/> */}
		
		<div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content text-center">
			<div className="space-y-5 md:block">
			 <p>Learn. Evolve. Become.</p>
			 <p className="subtitle">
				Dreams <br /> Reality
			 </p>
			</div>
			
			<div className="view-cocktails md:text-left text-center">
			 <p className="subtitle md:text-left text-center">
				Your Dreams are the mission. {'\n'} Valovie is the arena.
			 </p>
			 <a href="#cocktails md:text-left text-center">View features</a>
			</div>
		 </div>
		</div>
	 </section>
	 
	 <div className="video absolute inset-0">
		<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/videos/output2.mp4"
		/>
	 </div>
	</>
 );
};

export default Hero;