import { reactive, computed, watch, nextTick } from 'vue'
const counterData = reactive({
	count: 0,
	title: 'My Counter'
})
export function useCounter() {
// setup reactive object
	// to setup it globally move it out from the funtion
	/*const counterData = reactive({
		count: 0,
		title: 'My Counter'
	})*/

	watch(() => counterData.count, (newCount) => {
		if (newCount === 20) {
			alert('Way to go! You made it to 20!')
		}
	})

	const oddOrEven = computed(() => {
		if (counterData.count % 2 === 0) return 'even'
		return 'odd'
	})

//when you use reactive you don't need count.value
	const changeCounter = async amount => {
		counterData.count = counterData.count + amount
		//after import we can use next tick
		await nextTick(() => {
			console.log('do something when counter is updated in the dom')
		})
	}

	return { counterData, oddOrEven, changeCounter }
}
