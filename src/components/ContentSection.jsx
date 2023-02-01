import locationLogo from '../assets/location.png'

function ContentSection(props) {
	return(
		<section className="section--container">
			<img className="section--img" src={`./assets/${props.image}`} alt="SectionImage"/>
			<div className="text--container">
				<div className="loc--container">
					<img className="loc--img" src={locationLogo} alt="SectionImage"/>
					<span className="loc--country">{props.location}</span>
					<a className="loc--link" href={props.googleMapsUrl}>View on Google Maps</a>
				</div>
				<h3 className="card--head">{props.title}</h3>
				<h5 className="card--date">{props.startDate} - {props.endDate}</h5>
				<p className="card--text">{props.description}</p>
			</div>
		</section>
	)
}

export default ContentSection;