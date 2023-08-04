<template>
	<teleport to="body">
		<div
			class="modal"
		>
			<h2>This is a modal</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet animi consectetur culpa eius enim eveniet fugit impedit incidunt ipsum, itaque, iusto laudantium pariatur quas quidem quo tempore veniam vero voluptates? Accusantium aspernatur consequatur dignissimos dolor eaque, fuga illo illum laborum maiores nisi officia pariatur sed temporibus veritatis voluptatum?</p>
			<button>Hide modal</button>
		</div>
	</teleport>
</template>

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
