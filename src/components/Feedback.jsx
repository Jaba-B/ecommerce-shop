function Feedback (props) {
    return(
        <div key={props.id} className="m-2 border-2 border-gold h-auto rounded-lg" >
            <p className='m-2'>{props.text}</p>
        </div>
    )
}   

export default Feedback