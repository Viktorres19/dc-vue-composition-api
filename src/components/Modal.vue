<template>
	<teleport to="body">
		<div
			v-if="modelValue"
			class="modal"
		>
			<h2><slot name="title" /></h2>
			<slot />
			<pre>{{newTitle}}</pre>
			<div>{{props.interestingTitle}}</div>
			<button @click="$emit('update:modelValue', false)">Hide modal</button>
			<div>
					Username is: {{ userData.userName }}
			</div>
		</div>
	</teleport>
</template>

<script setup>
import { useSlots, inject } from 'vue'

const slots = useSlots()

const newTitle = slots.title()[0].children

/*const props = defineProps(['interestingTitle'])*/
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false
	},
	interestingTitle: {
		type: String,
		default: 'No title specified'
	}
})

const emit = defineEmits([
	'update:modelValue',
	/*'hideModal'*/
])

const userData = inject('userData')

/*const handleButtonClick = () => {
	emit('update:modelValue', false)
}*/
</script>

<style>
.modal {
	background: beige;
	padding: 10px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
