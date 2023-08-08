<template>
	<div class="modals">
			<h1><slot name="title" /></h1>
			<button @click="showModal = true">Show modal</button>
			<Modal
					v-if="showModal"
					@hideModal="showModal = false"
					interestingTitle="This is the real new title"
			>
<!--				text of the paragraph was passed via slot / instead of v-slot we can use # symbol-->
				<template v-slot:title>My new title</template>
		    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet animi consectetur culpa eius enim eveniet fugit impedit incidunt ipsum, itaque, iusto laudantium pariatur quas quidem quo tempore veniam vero voluptates? Accusantium aspernatur consequatur dignissimos dolor eaque, fuga illo illum laborum maiores nisi officia pariatur sed temporibus veritatis voluptatum?</p>
			</Modal>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import Modal from "@/components/Modal.vue";
const showModal = ref(false)
</script>

