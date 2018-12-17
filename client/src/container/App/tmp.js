{todos.map(todo =>
    <div className="">
        <div className="card my-card">
            <header className="card-header">
                <p className="card-header-title">
                    Titel: {todo.title}  Fälligkeit: {todo.dueDate}
                </p>
                <a href="/edit" className="card-header-icon" aria-label="more options" data-id={todo.id}>edit</a>
                <a href="#" onClick={this.deleteTodo} className="card-header-icon" aria-label="more options" data-id={todo.id}>delete</a>
                <a className="card-header-icon" data-id={todo.id} aria-label="more options">
                    <label htmlFor={`toggle-more-${todo.id}`}>More</label>
                </a>
            </header>
//             <input type="checkbox" id={`toggle-more-${todo.id}`} />
//             <div className="todo--more">
//                 <div className="card-content">
//                     <div className="content">
//                         {todo.description}
//                         <time dateTime="">{todo.dueDate}</time>
//                     </div>
//                 </div>
//                 <footer className="card-footer">
//                     <a href="#" className="card-footer-item">Save</a>
//                     <a href="#" className="card-footer-item">Edit</a>
//                     <a href="#" className="card-footer-item">Delete</a>
//                 </footer>
//             </div>
//         </div>
//     </div>
 )}