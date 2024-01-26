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
    }),
    computed:{
        //Find a current contact
        currentContact(){
           return this.contacts.find(({id}) => id === this.activeId)
        }
    },
    methods:{
        //Creating a string for uploading images
        getAvatarUrl({avatar}){
            return `img/avatar${avatar}.jpg`
        },
        //Creating a new message
        addNewMessage(){
            if(!this.newMessagetxt) return;
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toLocaleDateString(),
                text: this.newMessagetxt,
                status:'sent'
            }
            this.currentContact.messages.push(newMessage);
            this.newMessagetxt = "";
            //Respond message after 1 second
            setTimeout(() => {
                const newMessageReceived = {
                    id: new Date().toISOString(),
                    date: new Date().toLocaleDateString(),
                    text: 'ok',
                    status:'received'
                }
                this.currentContact.messages.push(newMessageReceived);
            }, 1000)
        }
       

        
    }
    
})

app.mount('#root')