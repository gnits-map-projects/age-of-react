function Step1() {
    return "Hurray";
}


function step2() {
    const aLink = React.createElement(
        'a',
        {
            className: 'btn btn-primary btn-lg',
            href: '#',
            role: 'button',
        },
        'Learn more >>'
    );

    const aPara = React.createElement('p', {}, aLink);

    ReactDOM.render(aPara, document.getElementById('lean-more'));
}

function step3() {
    const jumbotron = null;

    ReactDOM.render(
        jumbotron,
        document.getElementById('new-header')
    );
}



ReactDOM.render(<Step1 />, document.getElementById('root'));
