console.log('Vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'Vue Slider',
    data: () => ({
        data,
    }),
    
})

console.log(data);
app.mount('#root')