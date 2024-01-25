console.log('Vue ok', Vue);


const {user, contacts} = data


const {createApp} = Vue;
const app = createApp({
    name: 'Vue Slider',
    data: () => ({
        user,
        contacts,
        activeId: 1,
        newMessagetxt: ''
    }),
    computed:{
        currentContact(){
           return this.contacts.find(({id}) => id === this.activeId)
        }
    },
    methods:{
        getAvatarUrl({avatar}){
            return `img/avatar${avatar}.jpg`
        },
        addNewMessage(currentContact){
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toDateString(),
                text: this.newMessagetxt,
                status:'sent'
            }
            currentContact.messages.push(newMessage);


            this.newMessagetxt = "";
        }
    }
    
})

console.log(data);
app.mount('#root')