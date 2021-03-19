class ChatUI {
    constructor(list) {
        this.list = list;
    }

    clear() {
        this.list.innerHTML = '';

    }


    render(data) {

        console.log(typeof data.created_at);
        console.log(data.created_at.toDate());
        const now = new Date();
        console.log(now.toDateString());
        const html = `
            <li class="list-group-item">
                <span class = "username">${data.username}</span>
                <span class = "message">${data.message}</span>
                <div class="time">${data.created_at.toDate().toLocaleTimeString()}  ${data.created_at.toDate().toDateString()}</div>
            </li>
        `;


        this.list.innerHTML += html;
    }

}