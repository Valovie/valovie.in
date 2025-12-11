import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { cocktailLists, mockTailLists } from '../../constants/index.js'

const Cocktails = () => {
 useGSAP(() => {
	const parallaxTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#cocktails',
		start: 'top 30%',
		end: 'bottom 80%',
		scrub: true,
	 }
	})
	
	parallaxTimeline
	 .to('#c-left-leaf', {
		x: -150, y: 0
	}, 0)
	 .to('#c-right-leaf', {
		x: 150, y: 0
	}, 0)
 })
 
 return (
	<section id="cocktails" >
	 <img src="/logo/brain.png" alt="l-leaf" id="c-left-leaf" className='opacity-50 h-64 mt-0 hidden md:block' />
	 <img src="/logo/brain.png" alt="r-leaf" id="c-right-leaf" className='opacity-50 h-64 hidden md:block'/>
	 
	 <div className="list md:text-left text-center">
		<div className="popular">
		 <h2>Features Forged for Champions:</h2>
		 
		 <ul>
			{cocktailLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="md:me-28">
				 <h3>{name}</h3>
				 <p> {detail}</p>
				</div>
				{/* <span>- {price}</span> */}
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="loved">
		 <h2>Features Forged for Champions:</h2>
		 
		 <ul>
			{mockTailLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="md:me-28">
				 <h3>{name}</h3>
				 <p>{detail}</p>
				</div>
				{/* <span>- {price}</span> */}
			 </li>
			))}
		 </ul>
		</div>
	 </div>
	</section>
 )
}

export default Cocktails