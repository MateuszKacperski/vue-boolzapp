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
        serchContact: ''
    }),
    computed:{
        //Find a current contact
        currentContact(){
           return this.contacts.find(({id}) => id === this.activeId)
        },
        // Creating a filtered contact
        filteredContacts(){
            const serchContent = this.serchContact.toLowerCase();
            return this.contacts.filter(({name}) => 
                name.toLowerCase().includes(serchContent));
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
        },
        removeTask(id) {
            this.currentContact.messages = this.currentContact.messages.filter(message => id !== message.id);
        }  
    }
    
})

app.mount('#root')