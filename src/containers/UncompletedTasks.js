import { connect } from "react-redux";
import UncompletedTasks from "../components/UncompletedTasks";

const mapStateToProps = state => {
    const userProgress = state.get('root').get('userProgress');
    const completedShortTitles = userProgress.map(el=>el.split('.')[0]);
    const topics = state.get('root').get('topics');

    const topicLengthObs = topics.map(topic => topic.set('length', topic.get('tasks').size + topic.get('assessments').size).set('count', 0));

    const incompleteTopics = topicLengthObs.map(topic => topic.set('count', completedShortTitles.reduce((total, short_title) => topic.get('short_title') === short_title ? total + 1 : total + 0, 0)));

    return {
        userProgress: userProgress,
        uncompletedTopics: incompleteTopics.filter(topic => topic.get('length') !== topic.get('count')).slice(0, 2),
    }
}
    

export default connect(mapStateToProps)(UncompletedTasks);