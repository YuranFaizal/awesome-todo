import Vue from 'vue'
import { uid } from 'quasar'

const state = {
	tasks :{
		'ID1':{
							name:'Go train',
 							completed :false,
 							dueDate : '2020/01/16',
 							dueTime : '14:00'

		},
		'ID2':{
							name:'Go study',
 							completed :false,
 							dueDate : '2020/01/17',
 							dueTime : '18:00'

		},
		'ID3':{
							name:'Go pray',
 							completed :false,
 							dueDate : '2020/01/18',
 							dueTime : '21:00'

		}
		}



	
	/*tasks :[
 						{
 							id:1,
 							name:'Go train',
 							completed :false,
 							dueDate : '2020/01/16',
 							dueTime : '14:00'

 						},{
 							id:2,
 							name:'Go study',
 							completed :false,
 							dueDate : '2020/01/17',
 							dueTime : '18:00'
 						},
 						{
 							id:3,
 							name:'Go pray',
 							completed :false,
 							dueDate : '2020/01/18',
 							dueTime : '21:00'
 						}
]
*/

}

const mutations = {

updateTask(state, payload){
			Object.assign(state.tasks[payload.id], payload.updates)
		},
		deleteTask(state, id){
			Vue.delete(state.tasks, id)
		},
		addTask(state, payload){
			Vue.set(state.tasks, payload.id, payload.task)
		}
}
const actions = {
		updateTask({ commit }, payload){
			commit('updateTask' , payload)
		},
		deleteTask({ commit }, id){
			commit('deleteTask', id)

		},
		addTask({ commit }, task){
			let taskId = uid()
			let payload = {
				id: taskId,
				task: task
			}
			commit('addTask', payload)
		}

}
const getters = {
		tasksTodo: (state) => {
			let tasks = {}
			Object.keys(state.tasks).forEach(function(key){
				let task = state.tasks[key]
				if(!task.completed){
					tasks[key] = task
				}
			})
			return tasks
		},
		tasksCompleted: (state) => {
			let tasks = {}
			Object.keys(state.tasks).forEach(function(key){
				let task = state.tasks[key]
				if(task.completed){
					tasks[key] = task
				}
			})
			return tasks 
		} 

}
export default {
	namespaced : true ,
	state,
	mutations,
	actions,
	getters

}