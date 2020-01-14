<template>
    <div class="q-mt-lg">
      <list-header
      bgColor="bg-green-4"
      >Feito</list-header>
	     <q-list
       separator
       bordered >

        <task
           v-for="(task, key) in tasksCompleted"
           :key="key"
           :task="task" 
           :id="key"> 
          
        </task>

      </q-list>
      </div>
</template>

<script>
	export default {
		props: ['tasksCompleted'],
		components :{
			'task': require('components/Task/Task.vue').default ,
      'list-header' : require('components/Shared/ListHeader.vue').default
    
 		
		}
	}
</script>


<style></style>