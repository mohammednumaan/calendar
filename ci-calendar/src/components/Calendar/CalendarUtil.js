import Hammer from "hammerjs";



// export default calendarFunctions;



// const swipeRight = new Hammer.swipeRight()


const calendarFunctions = {


    nextMonth : function(api){
        const calendarEl = document.querySelector('.calendar')
        const hammer = new Hammer(calendarEl, {domEvents : true})
        hammer.on('swiperight', (event) => {
            const action = {action : event}
            api.next(action)
        })
    },

    // prevMonth : function(api){
    //     hammer.on('swiperight', (event) => {
    //         const action = {action : event}
    //         api.prev(action)
    //     })
    // }
}

export default calendarFunctions



