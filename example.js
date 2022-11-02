BigBrother.registerPartyMember('app-component', {
    message: 'Hello, World!'
});

BigBrother.registerPartyMember('main-component', {
    title: 'Title',
    titleClass: 'red',
    titleId: 'bg-yellow',
    showTitle: true,
    
    switchClass() {
        this.titleClass = (this.titleClass === 'red' ? 'blue' : 'red');
    },
    switchId() {
        this.titleId = (this.titleId === 'bg-cyan' ? 'bg-yellow' : 'bg-cyan');
    },
    toggleTitle(event) {
        this.showTitle = event.target.checked;
    }
});

BigBrother.registerPartyMember('date-component', {
    date: '2021-02-01',
    fromDateObject(date) {
        const day = (`0${date.getDate()}`).slice(-2);
        const month = (`0${date.getMonth() + 1}`).slice(-2);
        this.date = `${date.getFullYear()}-${month}-${day}`;
    }
});

BigBrother.registerPartyMember('select-component',  {
    text: ['Zero', 'One', 'Two'],
    updateText(event) {
        this.text[0] = event.target.value;
        this.text[2] = this.parent.message;

        const example = this.children.example;
        const date = new Date(`${example.date}T00:00`);

        date.setDate(date.getDate() + 1);
        example.fromDateObject(date);
    }
});

window.onload = () => {
    BigBrother.beginWatching()
        .then(() => console.log('Content loaded'));
}
