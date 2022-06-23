const injectCardsButton = () => {
    var controls = document.body.getElementsByClassName('ytp-right-controls')[0];
    var btn = document.createElement('button');
    
    btn.setAttribute('class', 'ytp-button');
    btn.setAttribute('id', 'ytcardsext_cards-yt-btn');
    btn.setAttribute('aria-label', "End Cards are enabled");

    btn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
    <path d="M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z" style="fill:none;stroke:#FFFFFF;stroke-width:2;"></path>
    <rect x="10" y="12" fill="#fff" width="7.25" height="5"></rect>
    <rect x="10" y="19" fill="#fff" width="7.25" height="5"></rect>
    <circle cx="22.5" cy="18" r="3" fill="#fff"></circle>
    </svg>`;
    
    controls.insertBefore(btn, controls.children[2]);

    let toggleState = true;
    const toggleEndCardsEventHandler = () => {
        toggleState = !toggleState;

        btn.setAttribute('class', toggleState ? 'ytp-button' : 'ytp-button disabled');

        document.querySelectorAll('.ytp-ce-element').forEach((el) => el.style.display = toggleState ? '-webkit-box' : 'none');

    }


    btn.addEventListener('click', toggleEndCardsEventHandler);
}

function process() {
    if(!location.pathname.startsWith('/watch')) return;
    const cardsButton = document.getElementById('ytcardsext_cards-yt-btn');
    if(!cardsButton) {
        injectCardsButton();
    }
}

document.addEventListener('yt-navigate-finish', process);
if (document.body) process();
else document.addEventListener('DOMContentLoaded', process);