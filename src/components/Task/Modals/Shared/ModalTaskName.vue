<template>
	

	<div class="row q-mb-sm">
		  							<q-input 
		  							outlined
		  							:value="name"
		  							@input="$emit('update:name', $event)" 
		  							:rules="[val => !!val || 'Campo Obrigatorio']"
		  							autofocus
		  							ref="name"
		  							class="col"
		  							label="Task name">
		  							<template v-slot:append>
		  								<q-icon
		  								v-if="name"
		  								@click="$emit('update:name' , '')"
		  								name="close"
		  								class="cursor-pointer"
		  								/>


		  							</template>
		  						</q-input>
  							</div>
</template>
<script>
	export default{
		props :['name']
	}

</script>
<style></style>