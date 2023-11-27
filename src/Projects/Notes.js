import React, { useState } from 'react';

const Notes = (props) => {
    const [topic, setTopic] = useState('');
    const [note, setNote] = useState('');
    const [topicList, setTopicList] = useState([]);
    const [noteList, setNoteList] = useState([]);

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    }

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    }

    const handleSaveClick = () => {
        if (topic.trim() !== "" && note.trim() !== "") {
            setTopicList([...topicList, topic]);
            setNoteList([...noteList, note]);
            setTopic('');
            setNote('');
        } else {
            alert('Topic or Note should not be empty');
        }
    }

    const handleEditClick = (index) => {
        setTopic(topicList[index]);
        setNote(noteList[index]);
    }

    const handleUpdateClick = (index) => {
        if (topic.trim() !== "" && note.trim() !== "") {
            const updatedTopicList = [...topicList];
            updatedTopicList[index] = topic;
            setTopicList(updatedTopicList);

            const updatedNoteList = [...noteList];
            updatedNoteList[index] = note;
            setNoteList(updatedNoteList);

            setTopic('');
            setNote('');
        } else {
            alert('Topic or Note should not be empty');
        }
    }

    const handleDeleteClick = (index) => {
        const updatedTopicList = [...topicList];
        updatedTopicList.splice(index, 1);
        setTopicList(updatedTopicList);

        const updatedNoteList = [...noteList];
        updatedNoteList.splice(index, 1);
        setNoteList(updatedNoteList);
    }

    return (
        <div className="p-3">
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className ={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter Topic</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" onChange={handleTopicChange} value={topic}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea2" className ={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter Note</label>
                <textarea className="form-control" id="exampleFormControlTextarea2" rows="3" onChange={handleNoteChange} value={note}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleSaveClick}>Save</button>
            <br />
            <br />
            <div className="accordion" id="accordionExample">
                <div className="accordion" id="accordionExample">
                {noteList.map((note, index) => (
                    <div className="accordion-item p-2" key={index}>
                        <h2 className="accordion-header font-weight-bold">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                <strong>{topicList[index]}</strong>
                            </button>
                        </h2>
                        <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                {note}
                            </div>
                        </div>
                        <div className = "mx-2">
                        <button className='btn btn-primary mx-1' onClick={() => handleEditClick(index)}>Edit</button>
                        <button className='btn btn-primary mx-1' onClick={() => handleDeleteClick(index)}>Delete</button>
                        <button className='btn btn-primary mx-1' onClick={() => handleUpdateClick(index)}>Update</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Notes;
