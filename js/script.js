console.log('Vue ok', Vue);


const {user, contacts} = data


const {createApp} = Vue;
const app = createApp({
    name: 'Vue Slider',
    data: () => ({
        user,
        contacts,
        activeId: 1,
        newMessagetxt: '',
        timeout: ''
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
        },
        messageReceived(currentContact){
            const newMessageReceived = {
                id: new Date().toISOString(),
                date: new Date().toDateString(),
                text: 'ok',
                status:'received'
            }
            currentContact.messages.push(newMessageReceived);
            setTimeout(this.messageReceived, 1000);

        }
    },
    mounted(){
        this.timeout = setTimeout(this.messageReceived, 1000);
    }
    
})

app.mount('#root')