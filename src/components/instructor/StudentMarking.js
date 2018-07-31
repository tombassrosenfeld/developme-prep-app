import React from 'react';
import StudentMarkingTask from "../../components/instructor/StudentMarkingTask";
import { getQuestionFromTitleAndId } from "../../utilities/utilities";

export default ({student, topicID, topics}) => (
	<div className="marking-task">
		<div className="row">
			<div className="col-xs-12">
				<h2 className="panel-title">Code:</h2> 
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12">
				{ student.getIn(['userSharedCode', topicID]) ?
					student.getIn(['userSharedCode', topicID]).map((task, i) => (
						<div>
							{task ? 
								<StudentMarkingTask 
									question={getQuestionFromTitleAndId(topicID, i, topics).description.replace(/\\n/g, "")}
									answer={task} 
									topicID={topicID}
									taskID={i}
									student={student}
								/>
							: null}
						</div>
					))
					: 
					<p className="taskList-task-title">This topic has no code submitted for review</p>
					}
			</div>
		</div>					
	</div>
)