import React from 'react';
import StudentMarkingTask from "../../components/instructor/StudentMarkingTask";
import { getTaskFromTitleAndId } from "../../utilities/utilities";
const Parser = require('html-react-parser');

export default ({student, topics}) => {
	console.log(student.toJS());
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
												answer={task} 
												task={getTaskFromTitleAndId(topic, i, topics).description.replace(/\\n/g, "")}
												student={student}
												sharedCode={sharedCode}
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