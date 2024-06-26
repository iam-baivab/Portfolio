<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "my1btdxdjj");
</script>

const messages = ["Hello", "Bonjour", "स्वागत हे", "Ciao", "Olá", "おい", "Hallå", "Guten tag", "Hallo"];
const preloader = document.getElementById('preloader');
const content = document.getElementById('content');

let currentMessage = 0;

function showNextMessage() {
    if (currentMessage < messages.length) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messages[currentMessage];

        if (currentMessage === 0) {
            messageElement.classList.add('fade-in');
        }

        preloader.innerHTML = '';
        preloader.appendChild(messageElement);

        let displayTime = 150;
        if (currentMessage === 0) {
            displayTime = 800;
        }

        currentMessage++;
        setTimeout(showNextMessage, displayTime);
    } else {
        content.classList.add('show-content');
        content.style.borderBottomLeftRadius = '0';
        content.style.borderBottomRightRadius = '0';
        
        setTimeout(() => {
            preloader.classList.add('slide-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 400);
        }, 400);
    }
}

window.onload = () => setTimeout(showNextMessage, 700);

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
