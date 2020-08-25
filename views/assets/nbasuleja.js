$(document).ready( () => {
const member = $('#member');
console.log(member);
const event = $('event');
const news = $('#news');

window.on('load', ()=>{
    member.show();
    event.hide();
    news.hide();
})
 })