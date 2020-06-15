Vue.component('notes', {
    template: '#notes-template',
    props:['data'],
    
    methods:{
        del_note: function(){
            this.$emit('del_note'); //запуск функции из экземпляра, $-глоб вар
        }
    },

})

Vue.component('adds', {
    template:'#add-template',
    props:['data'],
    methods:{
        adds_note:function(){
            this.$emit('adds_note');
        },
        counted_note: function(){
            this.$emit('counted_note');
        }
    }
})




new Vue({
    el: "#app",
    
    data:{
        
        new_notes:{
            title:'',
            desc:''
        },
        notes:[
            {
                title:'wow, its Vue!',
                desc:'i`m scared'
            },
            {
                title:'My first steps',
                desc:' i`m scared yet'
            }

        ]
    },
    
    methods: {
        delete_note:function(id){
            this.notes.splice(id,1);
            this.save_notes();
        },
        add_note: function(){
            if(this.new_notes.title != ''){
                this.notes.push({
                  title: this.new_notes.title,
                  desc: this.new_notes.desc
                });
                this.new_notes.title='';
                this.new_notes.desc='';
                this.save_notes();
              } 
        },
        
        save_notes(){
            const parsed = JSON.stringify(this.notes);
            localStorage.setItem('notes', parsed);
        },
        
        
    },   
        mounted() {
            if (localStorage.getItem('notes')) {
            try {
                this.notes = JSON.parse(localStorage.getItem('notes',"\n"));
            } catch(e) {
                localStorage.removeItem('notes');
            }
            }
            
        },
})


// Vue.component('count', {
//     template: "<h1>My notes{{ count}}</h1>",
//     props:['data'],
//     computed: {
//         count: function(){
//             return this.props.length;
//         }
//     },
// })





