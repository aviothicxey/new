 function createHeart() {
            const hearts = ['💖', '💕', '💗', '💝', '💘', '💞', '❤️', '🥰'];
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            document.getElementById('heartsContainer').appendChild(heart);
            
            setTimeout(() => heart.remove(), 8000);
        }
        
        setInterval(createHeart, 800);

        function openGame(game) {
            document.getElementById(game + 'Modal').style.display = 'flex';
            if (game === 'reasons') showReasons();
            if (game === 'memory') initMemory();
            if (game === 'dates') showDates();
            if (game === 'promises') showPromises();
        }

        function closeGame(game) {
            document.getElementById(game + 'Modal').style.display = 'none';
        }

        // Reasons I Love You
        function showReasons() {
            const reasons = [
                "💖 Your smile brightens my entire day",
                "🌟 You make me laugh like nobody else can",
                "💕 You listen to me and actually care about what I say",
                "🥰 Your hugs feel like home",
                "💝 You're patient with me even when I'm being difficult",
                "🌈 You make ordinary moments feel special",
                "💗 Your kindness inspires me",
                "🎵 I love our late-night conversations 😁😗",
                "💘 You understand me without me having to explain",
                "🌙 You make me feel safe and loved",
                "⭐ You're my best friend and my love",
                "💞 You accept all my quirks and weirdness",
                "🦋 You make me want to be a better person",
                "💖 Simply put - you're YOU, and that's perfect!"
            ];

            const grid = document.getElementById('reasonsGrid');
            grid.innerHTML = reasons.map(reason => 
                `<div class="reason-card">${reason}</div>`
            ).join('');
        }

        // Memory Game
        const emojis = ["images/ayu_al.jpg", "images/ayu_lib.jpg", "images/ayu_p.jpg", "images/us6.jpg", "images/us7.jpg", "images/us1.jpg", "images/us2.jpg", "images/us3.jpg"];
        let memoryCards = [];
        let flippedCards = [];
        let matchedPairs = 0;

        function initMemory() {
            const grid = document.getElementById('memoryGrid');
            grid.innerHTML = '';
            memoryCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
            flippedCards = [];
            matchedPairs = 0;

            memoryCards.forEach((emoji, index) => {
                const card = document.createElement('div');
                card.className = 'memory-card';
                card.dataset.emoji = emoji;
                card.dataset.index = index;
                card.onclick = () => flipCard(card);
                grid.appendChild(card);
            });
        }

        function flipCard(card) {
            if (flippedCards.length === 2 || card.classList.contains('flipped')) return;

            card.classList.add('flipped');
            card.textContent = card.dataset.emoji;
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }

        function checkMatch() {
            const [card1, card2] = flippedCards;
            
            if (card1.dataset.emoji === card2.dataset.emoji) {
                matchedPairs++;
                if (matchedPairs === emojis.length) {
                    setTimeout(() => {
                        alert('🎉 You matched them all! Just like how perfectly we match together! 💕');
                    }, 300);
                }
            } else {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.textContent = '';
                card2.textContent = '';
            }
            
            flippedCards = [];
        }

        function resetMemory() {
            initMemory();
        }

        // Compliment Generator
        const compliments = [
            "Your smile could light up the darkest room! It definitely lights up my world! 😊💖",
            "You're not just handsome on the outside - your beautiful heart makes you absolutely stunning! 🥰",
            "I love how you make me feel safe and loved...💕",
            "You have this amazing way of making everything better just by being you! ✨",
            "Your voice is my favorite sound in the whole world! 🎵",
            "I'm so lucky to have someone as caring and sweet as you! 🍀💖",
            "You're my favorite person to talk to, always! 💝",
            "Your laugh is contagious and I never want to stop hearing it! 😄",
            "You make me happier than I ever thought possible! Thank you for being you! 🌟",
            "Even when we're apart, you make me feel so loved and special! 💞",
            "You're my rock, my joy, and my favorite everything! 💗",
            "I fall in love with you more every single day! How is that even possible?! 🫠🫠", 
            "You're so thoughtful and considerate.... it's one of the million things I love about you! 💕",
            "Your hugs are magical!! 🤗💖",
            "You're absolutely perfect 😍",
            "You're the prettiest soul..😚😚"
        ];

        function getCompliment() {
            const text = document.getElementById('complimentText');
            const btn = document.getElementById('complimentBtn');
            
            btn.classList.add('spinning');
            setTimeout(() => {
                btn.classList.remove('spinning');
                const compliment = compliments[Math.floor(Math.random() * compliments.length)];
                text.textContent = compliment;
            }, 500);
        }

        // Date Ideas
        function showDates() {
            const dates = [
                {emoji: '🎬', title: 'Movie Marathon', desc: 'Watch movies together!'},
                {emoji: '🍕', title: 'Food Adventure', desc: "Let's go on a food date, all we do is eat and talk!"},
                {emoji: '🌅', title: 'Sunset', desc: 'Watch the beautiful sky together !'},
                {emoji: '🎮', title: 'Gaming Date', desc: 'Play games together and laugh at our silly mistakes!'},
                // {emoji: '☕', title: 'Café Hopping', desc: "Find cozy cafés and talk for hours!"},
                {emoji: '🎵', title: 'Music Session', desc: 'Share our favorite songs and make playlists!'},
                {emoji: '🚶', title: 'Long Walks', desc: 'Just walk, talk, and enjoy being together!'},
                // {emoji: '📚', title: 'Book Date', desc: 'Read together or share our favorite books!'},
                {emoji: '🎨', title: 'Creative Time', desc: 'Draw, paint, or create something together!'}
            ];

            const container = document.getElementById('dateIdeas');
            container.innerHTML = dates.map(date => `
                <div class="date-card">
                    <div class="emoji">${date.emoji}</div>
                    <h3>${date.title}</h3>
                    <p>${date.desc}</p>
                </div>
            `).join('');
        }

        // Promises
        function showPromises() {
            const promises = [
                {title: 'Always Listen', text: 'I promise to always listen to you, even when you just need to vent!'},
                {title: 'Support Your Dreams', text: "I'll always cheer you on and support whatever you want to achieve!"},
                {title: 'Make You Laugh', text: "I'll do my silly dances and crack bad jokes just to see you smile!"},
                {title: 'Be Patient', text: "I promise to be patient and understanding, especially during tough times!"},
                {title: 'Communicate', text: "I'll always talk to you about how I'm feeling, the good and the bad!"},
                {title: 'Make Time', text: "No matter how busy life gets, I'll always make time for us!"},
                {title: 'Appreciate You', text: "I'll never take you for granted and will remind you how special you are!"},
                {title: 'Love You', text: 'I promise to love you more each day..!! 💕'}
            ];

            const container = document.getElementById('promisesContent');
            container.innerHTML = promises.map(promise => `
                <div class="promise-card">
                    <h3>💝 ${promise.title}</h3>
                    <p>${promise.text}</p>
                </div>
            `).join('');
        }

        // Initialize
        for(let i = 0; i < 10; i++) {
            setTimeout(createHeart, i * 200);
        }

        //love counter 
        // 💞 Love Counter
const startDate = new Date("2025-04-15T03:03:08"); // Your anniversary date

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Update every second
setInterval(updateCounter, 1000);
updateCounter();

// Reset counter button
function resetCounter() {
    // startDate.setTime(new Date().getTime());
    // updateCounter();
    alert("YOU GOT THE NERVE TO RESET OUR SPECIAL DAY? 😡 ");
}





function flipCard(card) {
    if (flippedCards.length === 2 || card.classList.contains('flipped')) return;

    card.classList.add('flipped');
    card.innerHTML = `<img src="${card.dataset.emoji}" alt="memory card" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">`;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.emoji === card2.dataset.emoji) {
        matchedPairs++;
        if (matchedPairs === emojis.length) {
            setTimeout(() => {
                alert('🎉 You matched them all! Just like how perfectly we match together! 💕');
            }, 300);
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.innerHTML = '';
        card2.innerHTML = '';
    }

    flippedCards = [];
}
