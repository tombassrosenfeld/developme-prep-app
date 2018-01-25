import React from 'react';

export default ({ id, topicID, topics}) => (
	<div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-4 narrow-padding">
		<div className="panel">
			<h1>{+id + 1}. { topics.getIn([topicID, 'assessments'])[id].assessment_title }</h1>
	  		<h2>Questions</h2>
	  	</div>
	  	<form>
			<div className="assessment-questions">
			  	{ topics.getIn([topicID, 'assessments'])[id].questions.map( (question, i) => (
					<div className="panel" key={i}>
			  			<div className="row">
			  				<div className="col-xs-12">
			  					<p>{question.question}</p>
			  					{ question.answer_type === 'Multiple Choice' ? 
			  						question.answers.map( (answer, i) => (
										<div className="radio">
											<label>
								            	<input type="radio" value="option1" checked={false} />
										 		{answer.answer_choice}
								         	</label>
								        </div>
			  						))
			  					: null }
			  				</div>
			  			</div>
				  	</div>
				)) }
			</div>
		</form>
	</div>
)