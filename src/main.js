// import App from './App.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

// export default app;

import Bar from './Bar.svelte'

const bar = new Bar({
  target: document.body,
  props: {
    name: 'Max',
    value: '20',
  },
})

export default app
