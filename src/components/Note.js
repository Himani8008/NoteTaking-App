const Note = ({ id, text, date, handleDeleteNote }) => {
    return (<div className = 'note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
        <span onClick={()=> handleDeleteNote(id)} className='delete-icon'>&#10060;</span>
        </div>
    </div>
    );
};

export default Note;