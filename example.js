BigBrother.registerPartyMember({
    id: 'app-component', 
    watchers: { message: 'Hello, World!' }
});

BigBrother.registerPartyMember({
    id: 'main-component',
    watchers: {
        title: 'Title',
        titleClass: 'red',
        titleId: 'bg-yellow',
        showTitle: true,
    },
    listeners: {
        switchClass() {
            console.log(this);
            const titleClass = this.watchers.titleClass;
            this.watchers.titleClass = (titleClass === 'red' ? 'blue' : 'red');
        },
        switchId() {
            const titleId = this.watchers.titleId;
            this.watchers.titleId = (titleId === 'bg-cyan' ? 'bg-yellow' : 'bg-cyan');
        },
        toggleTitle(event) {
            const showTitle = event.target.checked;
            this.watchers.showTitle = showTitle;
        }
    }
});

BigBrother.registerPartyMember({
    id: 'date-component',
    watchers: { date: '2021-02-01' },
    listeners: {
        fromDateObject(date) {
            const day = (`0${date.getDate()}`).slice(-2);
            const month = (`0${date.getMonth() + 1}`).slice(-2);
            this.watchers.date = `${date.getFullYear()}-${month}-${day}`;
        }
    }
});

BigBrother.registerPartyMember({
    id: 'select-component',
    watchers: {
        text: ['Zero', 'One', 'Two']
    },
    listeners: {
        updateText(event) {
            this.watchers.text[0] = event.target.value;
            this.watchers.text[2] = this.parent.watchers.message;

            const example = this.children.example;
            const date = new Date(`${example.watchers.date}T00:00`);

            date.setDate(date.getDate() + 1);
            example.listeners.fromDateObject(date);
        }
    }
});

window.onload = () => BigBrother.beginWatching();
