import React, { useRef, useState } from 'react';

function FullPage() {
    const buttonRef = useRef(null);
    const [excuse, setExcuse] = useState('');

    const excuses = [
        'Förlåt, jag hade en dålig dag.',
        'Jag är verkligen ledsen, det var inte meningen.',
        'Jag ber om ursäkt, det var ett misstag.',
        'Förlåt, jag tänkte mig inte för.',
        'Jag är ledsen, jag visste inte att det skulle påverka dig så mycket.',
        'Jag ber om ursäkt, jag var inte medveten om det.',
        'Oj, det var inte meningen, antar jag.',
        'Jag är ledsen om du känner så.',
        'Beklagar, men jag var upptagen med viktigare saker.',
        'Förlåt om det störde dig, men det var faktiskt inte mitt problem.',
        'Jag ber om ursäkt, men det var faktiskt inte så allvarligt.',
        'Förlåt, jag var bara ärlig.',
        'Jag är ledsen om du tog det fel.',
        'Beklagar om du blev upprörd.',
        'Förlåt, men jag har ett liv också.',
        'Jag ber om ursäkt, men du överreagerar lite.',
        'Förlåt, jag trodde det var självklart.',
        'Jag är ledsen, men det är vad det är.',
        'Förlåt om du tog illa upp.',
        'Beklagar, men jag kan inte göra alla nöjda.',
        'Förlåt, men jag tänkte inte att det var en stor grej.',
        'Jag ber om ursäkt om det störde din dag.',
        'Förlåt, men ibland händer sådant.',
        'Jag är ledsen, men jag kan inte ändra det nu.',
        'Förlåt, men jag kan inte göra allt rätt hela tiden.',
        'Jag ber om ursäkt om det sårade dina känslor.',
        'Beklagar om det var ett problem för dig.',
        'Förlåt, men jag hade annat att tänka på.',
        'Jag är ledsen, men livet går vidare.',
        'Beklagar om det inte passade dig.',
        'Förlåt, men det var nödvändigt.',
        'Jag ber om ursäkt, men jag var tvungen att prioritera.',
        'Förlåt om det inte var vad du ville höra.',
        'Jag är ledsen, men jag kan inte vara perfekt.',
        'Beklagar, men jag tänkte att det var uppenbart.',
        'Förlåt, men ibland måste man vara rak.',
        'Jag ber om ursäkt, men det var ärligt sagt nödvändigt.',
        'Förlåt, jag hade ingen aning om att det var så känsligt.',
        'Jag är ledsen om du tog illa upp, men det var inte meningen.',
        'Beklagar om det inte var vad du förväntade dig.',
        'Förlåt, men jag hade faktiskt viktigare saker att göra.',
        'Jag ber om ursäkt, men ibland blir det bara så.',
        'Förlåt om du blev störd.',
        'Jag är ledsen om det påverkade dig.',
        'Beklagar, men jag såg ingen annan utväg.',
        'Förlåt om det verkade hårt, men det var nödvändigt.',
        'Jag ber om ursäkt, men jag trodde att du skulle förstå.',
        'Förlåt, men jag kan inte ändra det nu.',
        'Jag är ledsen om du känner så, men det var inte min avsikt.',
        'Beklagar om du blev upprörd, men det var nödvändigt.'
    ];
    

    const handleMouseEnter = () => {
        if (buttonRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const offsetX = buttonRect.width / 2;
            const offsetY = buttonRect.height / 2;

            const newMouseX = buttonRect.left + window.scrollX + offsetX;
            const newMouseY = buttonRect.top + window.scrollY + offsetY;

            // Move mouse cursor away
            window.scrollBy(0, 0); // Trigger scroll to ensure mouse event updates
            document.documentElement.style.cursor = 'none'; // Hide cursor

            setTimeout(() => {
                document.documentElement.style.cursor = ''; // Show cursor again
                const simulatedMouseEvent = new MouseEvent('mousemove', {
                    clientX: newMouseX + 100, // Move cursor to a new position
                    clientY: newMouseY + 100, // Move cursor to a new position
                });
                document.dispatchEvent(simulatedMouseEvent);
            }, 0);
        }
    };

    const handleGetExcuse = () => {
        const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
        setExcuse(randomExcuse);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f8ff', color: '#333', textAlign: 'center' }}>
            
            <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>Har Alexander råkat förolämpa dig?</h3>
            <h1 style={{ marginBottom: '20px', color: '#2c3e50' }}>Ibland blir det fel!</h1>
            <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Förlåt!</h2>
            <button
                ref={buttonRef}
                style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    padding: '15px 30px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={handleMouseEnter}
                onClick={handleGetExcuse}
            >
                Få ursäkt
            </button>
            {excuse && <h3 style={{ marginTop: '20px', color: '#7BB2D9' }}>{excuse}</h3>}
        </div>
    );
}

export default FullPage;
