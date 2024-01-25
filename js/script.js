console.log('Vue ok', Vue);


const {user, contacts} = data


const {createApp} = Vue;
const app = createApp({
    name: 'Vue Slider',
    data: () => ({
        user,
        contacts,
        activeId: 1,
    }),
    computed:{
        currentContact(){
            if(this.contacts.id !== this.activeId){
                return this.activeId = this.contacts.id
            }else{
                return this.activeId
            } 
        }
    },
    methods:{
        getAvatarUrl({avatar}){
            return `img/avatar${avatar}.jpg`
        }
    }
    
})

console.log(data);
app.mount('#root')