import React from 'react';
import StudentMarkingTask from "../../components/instructor/StudentMarkingTask";
import { getTaskFromTitleAndId } from "../../utilities/utilities";

export default ({student, topics}) => {
	const sharedCode = student.get('userSharedCode');
	const keys = Object.keys(sharedCode.toJS());
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
											<StudentMarkingTask 
												question={getTaskFromTitleAndId(topic, i, topics).description.replace(/\\n/g, "")}
												answer={task} 
												topicID={topic}
												taskID={i}
												student={student}
											/>
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