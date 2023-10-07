import React, { useRef } from 'react';
import './mainBody.css';

const MyComponent = () => {

    const shareButton = useRef(null);

    const toggleSocials = () => {
        const socialsWrapper = document.querySelector('.socials-wrapper');
        const shareButtonImage = shareButton.current.querySelector('img');

        socialsWrapper.classList.toggle('active');

        if (shareButtonImage.src.includes('share')) {
            shareButtonImage.src = './close.svg';
        } else {
            shareButtonImage.src = './share.svg';
        }
    };

    return (
        <div className="socials-wrapper">
            <div ref={shareButton} className="share-button" onClick={toggleSocials}>
                <img src="./share.svg" alt="Share On Socials" />
            </div>
            <menu className="socials-menu">
                <li className="social">
                    <a href="#" title="Instagram">
                        <img src="./instagram.svg" alt="Instagram" />
                    </a>
                </li>
                <li className="social">
                    <a href="#" title="Twitter">
                        <img src="./twitter.svg" alt="Twitter" />
                    </a>
                </li>
                <li className="social" title="Facebook">
                    <a href="#">
                        <img src="./facebook.svg" alt="Facebook" />
                    </a>
                </li>
                <li className="social">
                    <a href="#" title="Youtube">
                        <img src="./youtube.svg" alt="Youtube" />
                    </a>
                </li>
            </menu>
        </div>
    );
}

export default MyComponent;
