import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
	useGSAP(() => {
  const titleSplit = SplitText.create('#contact h2', { type: 'words' });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#contact',
      start: 'top center',
      toggleActions: 'play none none none',
    },
    ease: "power1.inOut"
  });

  timeline
    .from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
      immediateRender: false
    })
    .from('#contact h3, #contact p', {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
      immediateRender: false
    })
    .to('#f-right-leaf', { y: '-50', duration: 1, ease: 'power1.inOut' })
    .to('#f-left-leaf',  { y: '-50', duration: 1, ease: 'power1.inOut' }, '<');
});


	return (
		<footer id="contact">
			<img src="/logo/brain.png" alt="leaf-right" id="f-right-leaf" className='md:mt-64 h-64 hidden md:block' />
			<img src="/logo/brain.png" alt="leaf-left" id="f-left-leaf" className='h-64  hidden md:block' />

			<div className="content">
				<h2>Where to Find Us</h2>

				{/* <div>
		 <h3>Visit Our Bar</h3>
		 <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
		</div> */}

				<div className='mb-4 md:mb-0'>
					<h3>Contact Us</h3>
					<p>+91 8237021309</p>
					<p>valovie.team@gmail.com</p>
				</div>
				{/* 		
		<div>
		 <h3>Open Every Day</h3>
		 {openingHours.map((time) => (
			<p key={time.day}>
			 {time.day} : {time.time}
			</p>
		 ))}
		</div> */}

				{/* <div>
		 <h3>Socials</h3>
		 
		 <div className="flex-center gap-5">
			{socials.map((social) => (
			 <a
			 	key={social.name}
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={social.name}
			 >
				<img src={social.icon} />
			 </a>
			))}
		 </div>
		</div> */}
			</div>
		</footer>
	)
}

export default Contact