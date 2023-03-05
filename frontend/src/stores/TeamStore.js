import {defineStore} from "pinia";

export const useTeamStore = defineStore('team',{
   state(){
       return {
           name:'',
           spots:0,
           members:[]
       }
   },
    actions:{
       fill(){
           import('@/team.json').then(r => {
               let data = r.default
               this.name = data.name
               this.email = data.email
               this.status = data.status
           })
       }
    }
});