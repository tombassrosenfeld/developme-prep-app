import React from 'react';
import { getTaskFromTitleAndId } from "../../utilities/utilities";
const Parser = require('html-react-parser');

export default ({student, topics}) => {
	console.log(student.toJS());
	const sharedCode = student.get('userSharedCode');
	const keys = Object.keys(sharedCode.toJS());
	// for each shared code
	// this user has new shared code for you to mark
	// show topic name, Task (and get the question), student's answer, whether it has been flagged as requesting new feedback, a box for leaving comments, all previous feedback
	return (
		<div>
			<div className="panel">
				<div className="row">
					<div className="col-xs-12">
						<h2 className="panel-title">Code</h2> 
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						{keys.map((topic) => (
							<div>
								<p><strong>{topic}</strong></p>
								{sharedCode.get(topic).map((task, i) => (
									<div>
										{task ? 
											<div>
												<i>{ Parser(getTaskFromTitleAndId(topic, i, topics).description.replace(/\\n/g, "")) }</i>
												<p>{task.get('code')}</p>
												<p>{task.get('pending')}</p>
												<p>Previous Feedback</p>
												{task.get('feedback') ? task.get('feedback').map(comment => (
													<p>{comment}</p>
													)) 
													: <p>You are yet to provide feedback for this code</p>
												}
											</div>
										: null}
									</div>
								))}

							</div>
							
						))}
					</div>
				</div>				

			
			</div>
		</div>
	)
}