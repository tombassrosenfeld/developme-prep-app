import {fromJS, Map, List} from 'immutable';

export const initial = Map({});

export const mockTopics = fromJS([
  { 
    id: 1, 
    title: "Blanditiis quidem aut sit", 
    short_title: "CSS", 
    description: "Molestiae omnis fugiat laborum Quis sint aute ea odio hic qui officiis ab molestiae", 
    tasks: [
      {task: "Autem consequatur", description: "Laudantium ut veritatis et magnam ducimus quis aute cum sunt ex explicabo Nemo blanditiis excepturi", 
        resources: [
          {title: "resource1", resource_type: "fa fa-eye", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
          {title: "resource1", resource_type: "fa fa-file-o", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
          {title: "resource1", resource_type: "fa fa-wifi", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
        ] 
      }
    ], 
    assessments: [{
      assessment_title: 'Assessment 1', 
      questions: [
        {question: "What is the capital of the UK?", 
        answer_type: "Multiple Choice", 
        answers: [{answer_choice: 'London'}, {answer_choice: 'Berlin'}, {answer_choice: 'Paris'}, {answer_choice: 'Timbuktu'}, {answer_choice: 'Dehli'} ], 
        correct_answer: 1},

        {question: "What is the capital of the UK?", 
        answer_type: "Multiple Choice", 
        answers: [{answer_choice: 'London'}, {answer_choice: 'Berlin'}, {answer_choice: 'Paris'}, {answer_choice: 'Timbuktu'}, {answer_choice: 'Dehli'} ], 
        correct_answer: 2},

        {question: "What is the capital of the UK?", 
        answer_type: "Multiple Choice", 
        answers: [{answer_choice: 'London'}, {answer_choice: 'Berlin'}, {answer_choice: 'Paris'}, {answer_choice: 'Timbuktu'}, {answer_choice: 'Dehli'} ], 
        correct_answer: 4} 
      ],
        
    }],
    selected: false 
  },
  { 
    id: 2, 
    title: "Blanditiis quidem aut sit", 
    short_title: "CSS", 
    description: "Molestiae omnis fugiat laborum Quis sint aute ea odio hic qui officiis ab molestiae", 
    tasks: [
      {task: "Autem consequatur", description: "Laudantium ut veritatis et magnam ducimus quis aute cum sunt ex explicabo Nemo blanditiis excepturi", 
        resources: [
          {title: "resource1", resource_type: "fa fa-eye", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
          {title: "resource1", resource_type: "fa fa-file-o", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
          {title: "resource1", resource_type: "fa fa-wifi", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
        ] 
      }
    ], 
    assessments: [{
      assessment_title: 'Assessment 1', 
      questions: [
        {question: "What is the capital of the UK?", 
        answer_type: "Multiple Choice", 
        answers: [{answer_choice: 'London'}, {answer_choice: 'Berlin'}, {answer_choice: 'Paris'}, {answer_choice: 'Timbuktu'}, {answer_choice: 'Dehli'} ], 
        correct_answer: 1},

        {question: "What is the capital of the UK?", 
        answer_type: "Multiple Choice", 
        answers: [{answer_choice: 'London'}, {answer_choice: 'Berlin'}, {answer_choice: 'Paris'}, {answer_choice: 'Timbuktu'}, {answer_choice: 'Dehli'} ], 
        correct_answer: 2},

        {question: "What is the capital of the UK?", 
        answer_type: "Multiple Choice", 
        answers: [{answer_choice: 'London'}, {answer_choice: 'Berlin'}, {answer_choice: 'Paris'}, {answer_choice: 'Timbuktu'}, {answer_choice: 'Dehli'} ], 
        correct_answer: 4} 
      ],
        
    }],
    selected: false 
  },
]);