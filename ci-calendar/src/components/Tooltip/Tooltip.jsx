import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function showDescription(info){
    return new bootstrap.Popover(info.el, {
        title : info.event.title,
        placement : 'auto',
        trigger : 'hover',
        animation : true,
 
            
        customClass : 'popOverStyle',
        content : `<p>${info.event.extendedProps.description}</p>`,
        html : true,
        container:info.el
        
    })
}
